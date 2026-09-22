import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Pastikan API Key OpenRouter telah disetel di file .env
const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;

const FREE_MODELS = [
  { id: "openrouter/free", name: "Auto Free" },
  { id: "google/gemma-4-26b-a4b-it:free", name: "Gemma 4 26B" },
  { id: "google/gemma-4-31b-it:free", name: "Gemma 4 31B" },
];

const Chatbot = () => {
  // State Management
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel] = useState(FREE_MODELS[0].id);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Halo! Ada yang bisa kami bantu terkait layanan Fraksite?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Request ke OpenRouter
  const sendToOpenRouter = async (model, apiMessages) => {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Fraksite Chatbot",
        },
        body: JSON.stringify({
          model: model,
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 500,
        }),
      },
    );

    let data = {};
    try {
      data = await response.json();
    } catch (error) {
      console.error("Gagal membaca response OpenRouter:", error);
    }

    if (!response.ok) {
      console.error(`OpenRouter Error [${model}]:`, data);
      const errorMessage =
        data?.error?.message || `HTTP Error ${response.status}`;
      const error = new Error(errorMessage);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  };

  // Handle Send Message
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    if (!apiKey) {
      console.error("REACT_APP_OPENROUTER_API_KEY tidak ditemukan.");
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: input.trim() },
        {
          sender: "bot",
          text: "API Key OpenRouter belum ditemukan.\n\nPeriksa file .env dan pastikan terdapat:\nREACT_APP_OPENROUTER_API_KEY=sk-or-v1-xxxxxxxx\n\nSetelah itu restart server React.",
        },
      ]);
      setInput("");
      return;
    }

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    const apiMessages = [
      {
        role: "system",
        content: `Anda adalah Asisten Virtual resmi website Fraksite.\n\nIDENTITAS:\nAnda membantu pengunjung website Fraksite.\n\nATURAN:\n1. Gunakan bahasa Indonesia.\n2. Jawab dengan ramah dan profesional.\n3. Jawaban harus jelas dan tidak terlalu panjang.\n4. Bantu pengguna memahami layanan Fraksite.\n5. Jangan mengarang informasi tentang Fraksite.\n6. Jika informasi tidak tersedia, katakan bahwa informasi tersebut belum tersedia.\n7. Jangan memberikan informasi yang tidak relevan.\n8. Jika pengguna hanya menyapa, balas dengan ramah.\n9. Jika pengguna bertanya tentang layanan website, bantu menjelaskan secara sederhana.`,
      },
      ...messages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: userMessage },
    ];

    try {
      let data;
      if (selectedModel === "openrouter/free") {
        console.log("Menggunakan OpenRouter Free Router...");
        data = await sendToOpenRouter("openrouter/free", apiMessages);
      } else {
        try {
          console.log("Menggunakan model:", selectedModel);
          data = await sendToOpenRouter(selectedModel, apiMessages);
        } catch (error) {
          if (error.status === 429) {
            console.warn(
              "Model terkena rate limit. Mencoba OpenRouter Free Router...",
            );
            data = await sendToOpenRouter("openrouter/free", apiMessages);
          } else {
            throw error;
          }
        }
      }

      const botText = data?.choices?.[0]?.message?.content;
      if (!botText) {
        console.error("Response OpenRouter:", data);
        throw new Error("OpenRouter tidak memberikan jawaban.");
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
    } catch (error) {
      console.error("Error Chatbot:", error);
      let errorText;

      if (error.status === 429) {
        errorText =
          "Maaf, layanan AI gratis sedang mencapai batas penggunaan.\n\nSilakan tunggu beberapa saat kemudian coba lagi.";
      } else if (error.status === 401) {
        errorText =
          "API Key OpenRouter tidak valid.\n\nSilakan periksa API Key pada file .env.";
      } else if (error.status === 402) {
        errorText =
          "Akun OpenRouter tidak memiliki saldo atau akses yang cukup untuk request ini.";
      } else if (error.status === 403) {
        errorText =
          "Request ditolak oleh OpenRouter.\n\nPeriksa API Key dan konfigurasi akun OpenRouter.";
      } else if (error.status === 404) {
        errorText =
          "Model atau endpoint OpenRouter tidak ditemukan.\n\nCoba pilih model Auto Free.";
      } else {
        errorText = `Maaf, terjadi masalah pada chatbot.\n\nDetail: ${error.message}`;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: errorText }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter Key
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 h-[28rem] shadow-2xl rounded-2xl border border-gray-200 flex flex-col mb-4 overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 text-white p-3 flex flex-col gap-2">
            <div className="flex justify-between items-center font-semibold">
              <span>Asisten Fraksite</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white font-bold text-lg transition"
                aria-label="Tutup chatbot"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl max-w-[85%] text-sm whitespace-pre-wrap break-words ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white self-end rounded-tr-none"
                    : "bg-white border border-gray-200 text-gray-800 self-start rounded-tl-none shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isLoading && (
              <div className="bg-white border border-gray-200 text-gray-500 self-start p-3 rounded-xl rounded-tl-none shadow-sm text-sm flex gap-1 items-center">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-100">●</span>
                <span className="animate-bounce delay-200">●</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 bg-white flex gap-2 items-center">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ketik pesan..."
              disabled={isLoading}
              className="flex-1 border-gray-300 focus:ring-gray-900 text-sm"
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-gray-900 hover:bg-gray-800 text-white disabled:opacity-50"
            >
              {isLoading ? "..." : "Kirim"}
            </Button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 text-white p-4 rounded-full shadow-xl hover:bg-gray-800 transition-transform hover:scale-105 flex items-center justify-center"
          aria-label="Buka chatbot"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01 M12 10h.01 M16 10h.01 M9 16H5 a2 2 0 01-2-2V6 a2 2 0 012-2h14 a2 2 0 012 2v8 a2 2 0 01-2 2h-5 l-5 5v-5z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
