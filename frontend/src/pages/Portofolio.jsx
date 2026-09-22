// ============================================================
// CONTOH TAMBAHAN untuk data/content.js
// Sesuaikan field-nya dengan struktur CATEGORIES yang sudah kamu
// punya — di sini hanya ditambahkan `pricing` per kategori, plus
// array baru PORTFOLIO untuk contoh hasil kerja.
// ============================================================

export const CATEGORIES = [
  {
    slug: "website-bisnis",
    icon: "Building2",
    id: { tag: "Company Profile", name: "Website Bisnis" },
    en: { tag: "Company Profile", name: "Business Website" },
    desc: {
      id: "Untuk company profile, jasa profesional, dan bisnis lokal yang ingin tampil kredibel di dunia digital.",
      en: "For company profiles, professional services, and local businesses that want to look credible online.",
    },
    features: {
      id: ["Company Profile", "Landing Page", "Blog & Artikel", "Contact & Peta", "SEO Ready"],
      en: ["Company Profile", "Landing Page", "Blog & Articles", "Contact & Map", "SEO Ready"],
    },
    // Kategori dengan harga pasti pakai type "tiers"
    pricing: {
      type: "tiers",
      tiers: [
        {
          name: "Starter",
          price: "Rp799.000",
          featured: false,
          for: {
            id: "Untuk UMKM baru yang ingin mulai hadir secara online.",
            en: "For new SMEs starting their online presence.",
          },
          includes: {
            id: [
              "1 halaman landing page, desain custom/template",
              "Profil usaha, produk/layanan, galeri",
              "Tombol WhatsApp, Google Maps, link sosial",
              "SEO dasar, SSL/HTTPS",
              "Subdomain & hosting 1 tahun",
              "1× revisi minor",
            ],
            en: [
              "1 landing page, custom/template design",
              "Business profile, products/services, gallery",
              "WhatsApp button, Google Maps, social links",
              "Basic SEO, SSL/HTTPS",
              "Subdomain & hosting for 1 year",
              "1× minor revision",
            ],
          },
          eta: { id: "Estimasi 3–5 hari kerja", en: "Estimated 3–5 business days" },
        },
        {
          name: "Business",
          price: "Rp1.900.000",
          featured: true,
          for: {
            id: "Untuk bisnis yang ingin tampil lebih profesional dan membangun kepercayaan pelanggan.",
            en: "For businesses that want a more professional presence and customer trust.",
          },
          includes: {
            id: [
              "5–7 halaman, desain custom penuh",
              "Home, About, Services, Catalog, Testimonial, FAQ, Contact",
              "SEO dasar + optimasi kecepatan dasar",
              "Domain .com/.id + hosting 1 tahun",
              "2× revisi, garansi bug 30 hari",
            ],
            en: [
              "5–7 pages, fully custom design",
              "Home, About, Services, Catalog, Testimonials, FAQ, Contact",
              "Basic SEO + basic speed optimization",
              ".com/.id domain + hosting for 1 year",
              "2× revisions, 30-day bug warranty",
            ],
          },
          eta: { id: "Estimasi 5–10 hari kerja", en: "Estimated 5–10 business days" },
        },
        {
          name: "Professional",
          price: "Rp3.900.000",
          featured: false,
          for: {
            id: "Untuk bisnis yang butuh website lebih lengkap, premium, dan siap berkembang.",
            en: "For businesses that need a more complete, premium, growth-ready website.",
          },
          includes: {
            id: [
              "Semua fitur Business, 10–15 halaman",
              "UI/UX custom mendalam + design system",
              "Search/filter, form inquiry, GA & Search Console",
              "SEO lengkap, struktur scalable",
              "3× revisi, dokumentasi, garansi bug 60 hari",
            ],
            en: [
              "All Business features, 10–15 pages",
              "In-depth custom UI/UX + design system",
              "Search/filter, inquiry form, GA & Search Console",
              "Full SEO, scalable structure",
              "3× revisions, documentation, 60-day bug warranty",
            ],
          },
          eta: { id: "Estimasi 10–14 hari kerja", en: "Estimated 10–14 business days" },
        },
      ],
    },
  },

  {
    slug: "online-store",
    icon: "ShoppingCart",
    id: { tag: "E-Commerce", name: "Online Store" },
    en: { tag: "E-Commerce", name: "Online Store" },
    desc: {
      id: "Untuk UMKM, brand, dan online shop dengan katalog, keranjang, checkout, pembayaran, dan pengiriman.",
      en: "For SMEs, brands, and online shops with catalog, cart, checkout, payment, and shipping.",
    },
    features: {
      id: ["Katalog Produk", "Keranjang & Checkout", "Payment Gateway", "Ongkir Otomatis", "Dashboard Order"],
      en: ["Product Catalog", "Cart & Checkout", "Payment Gateway", "Automatic Shipping", "Order Dashboard"],
    },
    // Kategori tanpa harga tetap pakai type "custom"
    pricing: {
      type: "custom",
      label: { id: "Dibangun di atas paket Professional + modul e-commerce", en: "Built on the Professional package + e-commerce module" },
      note: {
        id: "Harga tergantung kompleksitas katalog dan integrasi pembayaran/pengiriman. Konsultasikan kebutuhanmu untuk penawaran yang sesuai.",
        en: "Price depends on catalog complexity and payment/shipping integration. Talk to us for a tailored quote.",
      },
    },
  },

  // Kategori lain (cafe-restaurant, travel-booking, wedding, custom)
  // mengikuti pola "online-store" di atas — cukup ganti icon, id/en,
  // desc, features, dan isi note sesuai kategorinya.
];

export const PORTFOLIO = [
  {
    slug: "toko-bunga-melati",
    category: "website-bisnis",
    client: "Toko Bunga Melati",
    image: null, // isi dengan path/URL screenshot asli
    result: {
      id: "Dari sekadar profil Instagram, sekarang muncul di pencarian Google.",
      en: "From a simple Instagram profile to showing up in Google search.",
    },
  },
  {
    slug: "rumah-sepatu-lokal",
    category: "online-store",
    client: "Rumah Sepatu Lokal",
    image: null,
    result: {
      id: "Order online naik 3× dalam 2 bulan sejak pindah dari WhatsApp manual.",
      en: "Online orders grew 3× within 2 months after moving off manual WhatsApp orders.",
    },
  },
  // ...tambahkan entri lain per kategori, maksimal ditampilkan 3 per kategori di Portfolio.jsx
];