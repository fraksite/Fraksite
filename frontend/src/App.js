import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";

import { AppProvider, useApp } from "./contexts/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhatWeBuild from "./pages/WhatWeBuild";
import Pricing from "./pages/Pricing";
import HowWeWork from "./pages/HowWeWork";
import About from "./pages/About";
import FAQPage from "./pages/FAQPage";
import StartProject from "./pages/StartProject";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function ThemedToaster() {
  const { theme } = useApp();
  return <Toaster theme={theme} position="bottom-right" richColors />;
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="App relative">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/yang-kami-buat" element={<WhatWeBuild />} />
              <Route path="/harga" element={<Pricing />} />
              <Route path="/cara-kerja" element={<HowWeWork />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/mulai-proyek" element={<StartProject />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <ThemedToaster />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
