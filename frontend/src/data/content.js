// Fraksite website content: bilingual (ID/EN), all data centralized.

export const CONTACT = {
  whatsapp: "6281234567890", // Ganti dengan nomor WhatsApp Fraksite yang aktif
  email: "hello@fraksite.com",
  instagram: "https://instagram.com/fraksite",
  location: "Jakarta, Indonesia",
};

export const NAV = [
  {
    key: "build",
    href: "/yang-kami-buat",
    id: "Yang Kami Buat",
    en: "What We Build",
  },
  { key: "work", href: "/hasil-kerja", id: "Hasil Kerja", en: "Our Work" },
  { key: "pricing", href: "/harga", id: "Harga", en: "Pricing" },
  { key: "process", href: "/cara-kerja", id: "Cara Kerja", en: "How We Work" },
  { key: "about", href: "/tentang", id: "Tentang Kami", en: "About" },
  { key: "faq", href: "/faq", id: "FAQ", en: "FAQ" },
];

export const CATEGORIES = [
  {
    slug: "website-bisnis",
    id: { name: "Website Bisnis", tag: "Company Profile" },
    en: { name: "Business Website", tag: "Company Profile" },
    icon: "Building2",
    desc: {
      id: "Untuk company profile, jasa profesional, dan bisnis lokal yang ingin tampil kredibel di dunia digital.",
      en: "For company profiles, professional services, and local businesses that want to look credible online.",
    },
    features: {
      id: [
        "Company Profile",
        "Landing Page",
        "Blog & Artikel",
        "Contact & Peta",
        "SEO Ready",
      ],
      en: [
        "Company Profile",
        "Landing Page",
        "Blog & Articles",
        "Contact & Map",
        "SEO Ready",
      ],
    },
  },
  {
    slug: "online-store",
    id: { name: "Online Store", tag: "E-Commerce" },
    en: { name: "Online Store", tag: "E-Commerce" },
    icon: "ShoppingBag",
    desc: {
      id: "Untuk UMKM, brand, dan online shop dengan katalog, keranjang, checkout, pembayaran, dan pengiriman.",
      en: "For SMEs, brands, and online shops with catalog, cart, checkout, payment, and shipping.",
    },
    features: {
      id: [
        "Katalog Produk",
        "Keranjang & Checkout",
        "Payment Gateway",
        "Ongkir Otomatis",
        "Dashboard Order",
      ],
      en: [
        "Product Catalog",
        "Cart & Checkout",
        "Payment Gateway",
        "Auto Shipping Rates",
        "Order Dashboard",
      ],
    },
  },
  {
    slug: "cafe-restaurant",
    id: { name: "Cafe & Restaurant", tag: "F&B" },
    en: { name: "Cafe & Restaurant", tag: "F&B" },
    icon: "UtensilsCrossed",
    desc: {
      id: "Untuk cafe, restoran, dan kedai. Digital menu QR, table ordering, pembayaran, dan dashboard.",
      en: "For cafes, restaurants, and eateries. Digital menu QR, table ordering, payment, and dashboard.",
    },
    features: {
      id: [
        "Digital Menu QR",
        "Table Ordering",
        "Kitchen Display",
        "Pembayaran Digital",
        "Analitik Penjualan",
      ],
      en: [
        "Digital Menu QR",
        "Table Ordering",
        "Kitchen Display",
        "Digital Payment",
        "Sales Analytics",
      ],
    },
  },
  {
    slug: "travel-booking",
    id: { name: "Travel & Booking", tag: "Reservation" },
    en: { name: "Travel & Booking", tag: "Reservation" },
    icon: "Plane",
    desc: {
      id: "Untuk travel, transportasi, tour, dan reservasi. Jadwal, rute, booking kursi, dan tiket digital.",
      en: "For travel, transportation, tours, and reservations. Schedules, routes, seat booking, and e-tickets.",
    },
    features: {
      id: [
        "Jadwal & Rute",
        "Booking Online",
        "Pilih Kursi",
        "E-Ticket",
        "Pembayaran",
      ],
      en: [
        "Schedule & Routes",
        "Online Booking",
        "Seat Selection",
        "E-Ticket",
        "Payment",
      ],
    },
  },
  {
    slug: "custom",
    id: { name: "Custom Web App", tag: "Sistem Khusus" },
    en: { name: "Custom Web App", tag: "Custom System" },
    icon: "Cpu",
    desc: {
      id: "Untuk bisnis yang butuh sistem khusus: dashboard, CRM, ERP internal, atau alur unik lainnya.",
      en: "For businesses needing a custom system: dashboards, CRM, internal ERP, or unique workflows.",
    },
    features: {
      id: [
        "Dashboard Kustom",
        "Autentikasi & Role",
        "Integrasi API",
        "Otomasi Alur",
        "Skalabel",
      ],
      en: [
        "Custom Dashboard",
        "Auth & Roles",
        "API Integrations",
        "Workflow Automation",
        "Scalable",
      ],
    },
  },
];

export const PROJECTS = [
  {
    slug: "kopikita",
    category: "cafe-restaurant",
    id: { title: "KopiKita — QR Ordering", tag: "Cafe & Restaurant" },
    en: { title: "KopiKita — QR Ordering", tag: "Cafe & Restaurant" },
    image: "https://images.unsplash.com/photo-1765894711185-63800b16dbba",
    year: "2025",
    client: "KopiKita",
    problem: {
      id: "Antrian panjang di kasir & sering salah pesanan.",
      en: "Long queue at cashier and frequent order mistakes.",
    },
    solution: {
      id: "QR menu di meja, order langsung ke dapur, pembayaran cashless.",
      en: "QR menu on tables, direct-to-kitchen orders, cashless payment.",
    },
    features: [
      "Digital Menu QR",
      "Kitchen Display",
      "Payment Gateway",
      "Dashboard Owner",
    ],
  },
  {
    slug: "urbanwear",
    category: "online-store",
    id: { title: "UrbanWear — Streetwear Store", tag: "Online Store" },
    en: { title: "UrbanWear — Streetwear Store", tag: "Online Store" },
    image: "https://images.unsplash.com/photo-1539278383962-a7774385fa02",
    year: "2025",
    client: "UrbanWear ID",
    problem: {
      id: "Jualan hanya via DM, susah lacak stok & orderan.",
      en: "Sales only via DM, hard to track stock and orders.",
    },
    solution: {
      id: "Online store terintegrasi payment gateway, ongkir otomatis, dan dashboard admin.",
      en: "Online store with payment gateway, auto shipping, and admin dashboard.",
    },
    features: ["Katalog", "Checkout", "Midtrans", "RajaOngkir", "Admin Panel"],
  },
  {
    slug: "arnavya-wedding",
    category: "wedding",
    id: { title: "Arnavya & Reyhan — Undangan Digital", tag: "Wedding" },
    en: { title: "Arnavya & Reyhan — Digital Invitation", tag: "Wedding" },
    image:
      "https://images.pexels.com/photos/27529922/pexels-photo-27529922.jpeg",
    year: "2025",
    client: "Arnavya & Reyhan",
    problem: {
      id: "Undangan cetak boros biaya dan susah update jadwal.",
      en: "Printed invitations are costly and hard to update.",
    },
    solution: {
      id: "Undangan digital elegan dengan RSVP realtime dan galeri.",
      en: "Elegant digital invitation with realtime RSVP and gallery.",
    },
    features: ["Countdown", "Gallery", "RSVP", "Google Maps", "Music"],
  },
  {
    slug: "nusatrip",
    category: "travel-booking",
    id: { title: "NusaTrip — Tour Booking", tag: "Travel & Booking" },
    en: { title: "NusaTrip — Tour Booking", tag: "Travel & Booking" },
    image: "https://images.pexels.com/photos/297984/pexels-photo-297984.jpeg",
    year: "2024",
    client: "NusaTrip",
    problem: {
      id: "Reservasi manual via chat, sering bentrok jadwal.",
      en: "Manual reservations via chat, frequent schedule clashes.",
    },
    solution: {
      id: "Sistem booking online dengan kalender, kursi, dan e-ticket.",
      en: "Online booking system with calendar, seats, and e-tickets.",
    },
    features: ["Calendar", "Seat Map", "E-Ticket", "Payment"],
  },
  {
    slug: "medix-clinic",
    category: "custom",
    id: { title: "Medix — Klinik Web App", tag: "Custom" },
    en: { title: "Medix — Clinic Web App", tag: "Custom" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    year: "2024",
    client: "Medix Clinic",
    problem: {
      id: "Rekam pasien masih di kertas dan sulit dianalisa.",
      en: "Paper-based patient records that are hard to analyze.",
    },
    solution: {
      id: "Web app internal untuk pasien, dokter, resep, dan laporan.",
      en: "Internal web app for patients, doctors, prescriptions, and reports.",
    },
    features: ["Auth & Role", "EMR", "Prescription", "Reports"],
  },
  {
    slug: "sana-boutique",
    category: "website-bisnis",
    id: { title: "Sana Boutique — Company Profile", tag: "Website Bisnis" },
    en: { title: "Sana Boutique — Company Profile", tag: "Business Website" },
    image: "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg",
    year: "2024",
    client: "Sana Boutique",
    problem: {
      id: "Belum punya presence digital yang profesional.",
      en: "No professional digital presence yet.",
    },
    solution: {
      id: "Website company profile modern dengan SEO dan blog.",
      en: "Modern company profile website with SEO and a blog.",
    },
    features: ["Landing", "Blog", "Contact", "SEO"],
  },
];

export const PRICING = [
  {
    slug: "starter",
    id: { name: "Starter", tag: "Untuk yang baru mulai" },
    en: { name: "Starter", tag: "For those just starting" },
    price: "3.5",
    unit: "juta",
    unitEn: "M",
    timeline: { id: "5–7 hari", en: "5–7 days" },
    maintenance: { id: "1 bulan gratis", en: "1 month free" },
    features: {
      id: [
        "Landing page 1 halaman",
        "Desain responsive",
        "Form kontak",
        "Domain .com gratis 1 tahun",
        "SSL & hosting 1 tahun",
      ],
      en: [
        "1-page landing page",
        "Responsive design",
        "Contact form",
        "Free .com domain (1 yr)",
        "SSL & hosting (1 yr)",
      ],
    },
  },
  {
    slug: "business",
    id: { name: "Business", tag: "Company profile lengkap" },
    en: { name: "Business", tag: "Full company profile" },
    price: "7",
    unit: "juta",
    unitEn: "M",
    timeline: { id: "2 minggu", en: "2 weeks" },
    maintenance: { id: "3 bulan gratis", en: "3 months free" },
    features: {
      id: [
        "5–8 halaman",
        "Blog & CMS",
        "SEO on-page",
        "Integrasi WhatsApp",
        "Google Analytics",
        "Domain & hosting 1 tahun",
      ],
      en: [
        "5–8 pages",
        "Blog & CMS",
        "On-page SEO",
        "WhatsApp integration",
        "Google Analytics",
        "Domain & hosting 1 yr",
      ],
    },
    highlight: true,
  },
  {
    slug: "ecommerce",
    id: { name: "E-Commerce", tag: "Toko online siap jualan" },
    en: { name: "E-Commerce", tag: "Ready-to-sell online store" },
    price: "14",
    unit: "juta",
    unitEn: "M",
    timeline: { id: "3–4 minggu", en: "3–4 weeks" },
    maintenance: { id: "3 bulan gratis", en: "3 months free" },
    features: {
      id: [
        "Katalog produk",
        "Keranjang & checkout",
        "Payment gateway",
        "Ongkir otomatis",
        "Dashboard admin",
        "Voucher & diskon",
      ],
      en: [
        "Product catalog",
        "Cart & checkout",
        "Payment gateway",
        "Auto shipping",
        "Admin dashboard",
        "Vouchers & discounts",
      ],
    },
  },
  {
    slug: "booking",
    id: { name: "Booking", tag: "Untuk travel, klinik, cafe" },
    en: { name: "Booking", tag: "For travel, clinic, cafe" },
    price: "12",
    unit: "juta",
    unitEn: "M",
    timeline: { id: "3 minggu", en: "3 weeks" },
    maintenance: { id: "3 bulan gratis", en: "3 months free" },
    features: {
      id: [
        "Sistem booking",
        "Kalender & jadwal",
        "Notifikasi WA/Email",
        "Payment gateway",
        "Dashboard admin",
      ],
      en: [
        "Booking system",
        "Calendar & schedule",
        "WA/Email notifications",
        "Payment gateway",
        "Admin dashboard",
      ],
    },
  },
  {
    slug: "custom",
    id: { name: "Custom", tag: "Web app khusus" },
    en: { name: "Custom", tag: "Custom web app" },
    price: "25+",
    unit: "juta",
    unitEn: "M",
    timeline: { id: "1–3 bulan", en: "1–3 months" },
    maintenance: { id: "6 bulan gratis", en: "6 months free" },
    features: {
      id: [
        "Analisa kebutuhan",
        "Sistem multi-role",
        "Integrasi API custom",
        "Otomasi alur",
        "Dokumentasi teknis",
      ],
      en: [
        "Requirements analysis",
        "Multi-role system",
        "Custom API integrations",
        "Workflow automation",
        "Technical documentation",
      ],
    },
  },
];

export const PROCESS = [
  {
    n: "01",
    id: {
      t: "Konsultasi",
      d: "Kita ngobrol soal kebutuhan, target, dan anggaran.",
    },
    en: {
      t: "Consultation",
      d: "We chat about your needs, goals, and budget.",
    },
  },
  {
    n: "02",
    id: { t: "Discovery", d: "Riset kompetitor, user, dan referensi visual." },
    en: {
      t: "Discovery",
      d: "Competitor, user, and visual reference research.",
    },
  },
  {
    n: "03",
    id: { t: "Planning", d: "Sitemap, wireframe, dan timeline yang jelas." },
    en: { t: "Planning", d: "Sitemap, wireframes, and a clear timeline." },
  },
  {
    n: "04",
    id: { t: "Design", d: "UI mockup di Figma untuk direview bersama." },
    en: { t: "Design", d: "UI mockups in Figma for a joint review." },
  },
  {
    n: "05",
    id: { t: "Development", d: "Coding responsive, performa cepat, siap SEO." },
    en: {
      t: "Development",
      d: "Responsive coding, fast performance, SEO-ready.",
    },
  },
  {
    n: "06",
    id: { t: "Testing", d: "QA di berbagai device dan browser." },
    en: { t: "Testing", d: "QA across devices and browsers." },
  },
  {
    n: "07",
    id: { t: "Launch", d: "Deploy ke domain kamu. Website siap live." },
    en: { t: "Launch", d: "Deploy to your domain. Site goes live." },
  },
  {
    n: "08",
    id: { t: "Maintenance", d: "Support & update setelah launch." },
    en: { t: "Maintenance", d: "Post-launch support & updates." },
  },
];

export const FAQ_GROUPS = [
  {
    group: { id: "Umum", en: "General" },
    items: [
      {
        q: {
          id: "Berapa lama pembuatan website?",
          en: "How long does it take?",
        },
        a: {
          id: "Tergantung paket: mulai 5–7 hari untuk Starter hingga 1–3 bulan untuk Custom.",
          en: "Depends on the package: from 5–7 days for Starter to 1–3 months for Custom.",
        },
      },
      {
        q: { id: "Bisa custom sesuai kebutuhan?", en: "Can it be customized?" },
        a: {
          id: "Bisa. Semua paket bisa disesuaikan. Kalau butuh sistem khusus, ambil paket Custom.",
          en: "Yes. All packages can be tailored. For a special system, choose the Custom package.",
        },
      },
      {
        q: {
          id: "Apakah website responsive di HP?",
          en: "Is the site mobile responsive?",
        },
        a: {
          id: "Semua website kami mobile-first dan responsive di semua ukuran layar.",
          en: "All our sites are mobile-first and responsive on any screen size.",
        },
      },
    ],
  },
  {
    group: { id: "Harga", en: "Pricing" },
    items: [
      {
        q: {
          id: "Apa yang termasuk dalam harga?",
          en: "What is included in the price?",
        },
        a: {
          id: "Desain, development, domain & hosting 1 tahun, plus maintenance sesuai paket.",
          en: "Design, development, 1-year domain & hosting, plus maintenance per package.",
        },
      },
      {
        q: {
          id: "Bagaimana dengan biaya maintenance?",
          en: "What about maintenance costs?",
        },
        a: {
          id: "Gratis 1–6 bulan tergantung paket. Setelahnya opsional mulai Rp250rb/bulan.",
          en: "Free 1–6 months depending on the package. Optional after that from Rp250k/month.",
        },
      },
      {
        q: {
          id: "Ada biaya tambahan tersembunyi?",
          en: "Are there hidden fees?",
        },
        a: {
          id: "Tidak. Semua fee dijelaskan di awal.",
          en: "No. All fees are explained upfront.",
        },
      },
    ],
  },
  {
    group: { id: "Development", en: "Development" },
    items: [
      {
        q: {
          id: "Bantu urus domain & hosting?",
          en: "Do you handle domain & hosting?",
        },
        a: {
          id: "Ya. Kami handle end-to-end sampai website live.",
          en: "Yes. We handle everything end-to-end until launch.",
        },
      },
      {
        q: {
          id: "Integrasi payment gateway?",
          en: "Payment gateway integration?",
        },
        a: {
          id: "Ya — Midtrans, Xendit, Stripe, atau sesuai kebutuhan.",
          en: "Yes — Midtrans, Xendit, Stripe, or as needed.",
        },
      },
      {
        q: {
          id: "Bisa integrasi dengan API lain?",
          en: "Can it integrate with other APIs?",
        },
        a: {
          id: "Bisa. WhatsApp, RajaOngkir, Google Maps, dan API custom lainnya.",
          en: "Yes. WhatsApp, RajaOngkir, Google Maps, and custom APIs.",
        },
      },
    ],
  },
  {
    group: { id: "Setelah Launch", en: "After Launch" },
    items: [
      {
        q: {
          id: "Ada support setelah website live?",
          en: "Support after launch?",
        },
        a: {
          id: "Ya, semua paket dapat masa maintenance gratis.",
          en: "Yes, every package includes a free maintenance period.",
        },
      },
      {
        q: {
          id: "Bisa update konten sendiri?",
          en: "Can we update content ourselves?",
        },
        a: {
          id: "Bisa via CMS/admin panel yang kami sediakan.",
          en: "Yes, via the CMS/admin panel we provide.",
        },
      },
      {
        q: {
          id: "Bisa tambah fitur di kemudian hari?",
          en: "Add features later?",
        },
        a: {
          id: "Tentu. Kami support pengembangan bertahap sesuai roadmap kamu.",
          en: "Absolutely. We support iterative development along your roadmap.",
        },
      },
    ],
  },
];

export const PROBLEMS = [
  {
    id: "Website lama terlihat kuno dan lambat.",
    en: "Old site looks outdated and slow.",
  },
  {
    id: "Order masih manual lewat chat.",
    en: "Orders still handled manually via chat.",
  },
  {
    id: "Susah dipercaya klien tanpa website profesional.",
    en: "Hard to earn trust without a professional site.",
  },
  {
    id: "Bingung mulai dari mana buat go-online.",
    en: "Not sure where to start going online.",
  },
];

export const WHY = [
  {
    icon: "Zap",
    id: {
      t: "Performa Kencang",
      d: "Kode ringan, load cepat, siap Core Web Vitals.",
    },
    en: {
      t: "Blazing Fast",
      d: "Lightweight code, quick load, Core Web Vitals ready.",
    },
  },
  {
    icon: "Palette",
    id: {
      t: "Desain Custom",
      d: "Bukan template. Setiap desain dibuat sesuai brand kamu.",
    },
    en: {
      t: "Custom Design",
      d: "Not a template. Every design tailored to your brand.",
    },
  },
  {
    icon: "ShieldCheck",
    id: {
      t: "Transparan",
      d: "Timeline & harga jelas dari awal, tanpa biaya tersembunyi.",
    },
    en: {
      t: "Transparent",
      d: "Clear timeline & pricing upfront, no hidden costs.",
    },
  },
  {
    icon: "MessageCircle",
    id: {
      t: "Support Cepat",
      d: "Bisa langsung ngobrol dengan tim yang bikin website kamu.",
    },
    en: {
      t: "Fast Support",
      d: "Talk directly with the team who built your site.",
    },
  },
];

export const TECH = [
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "Tailwind",
  "Figma",
  "Vercel",
  "AWS",
];
