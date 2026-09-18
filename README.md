# Fraksite — Website Development Studio

Source code untuk website Fraksite: React + Tailwind CSS, bilingual (ID/EN), routing multi-halaman.

## Struktur Proyek

```
frontend/
├── public/              Aset statis & index.html
├── src/
│   ├── components/      Navbar, Footer, dan komponen bersama (Reveal, SectionHeader)
│   │   └── ui/           Komponen dasar (button, input, select, dll.)
│   ├── contexts/         AppContext — state tema & bahasa
│   ├── data/             content.js — seluruh konten teks & data (ID/EN)
│   ├── lib/              Helper (cn/classnames)
│   └── pages/            Satu file per halaman/route
```

## Cara Menjalankan

1. Masuk ke folder frontend:
   ```
   cd frontend
   ```
2. Install dependency:
   ```
   npm install
   ```
3. Jalankan development server:
   ```
   npm start
   ```
4. Buka `http://localhost:3000`

## Build untuk Production

```
npm run build
```

Hasil build ada di `frontend/build`, siap di-deploy ke Vercel, Netlify, atau hosting statis lainnya.

## Konfigurasi Sebelum Deploy

- Ganti nomor WhatsApp placeholder (`6281234567890`) di `src/data/content.js` (`CONTACT.whatsapp`) dengan nomor asli.
- Ganti data di `PROJECTS` (`src/data/content.js`) dengan portfolio klien asli, termasuk gambar (saat ini masih pakai placeholder dari Unsplash/Pexels).
- Sesuaikan `CONTACT.email` dan `CONTACT.instagram` sesuai akun resmi.

## Catatan Teknis

- Warna aksen (biru) diatur lewat CSS variable `--primary` di `src/index.css` dan dipakai lewat token Tailwind `primary` / `primary-light` — ubah di satu tempat untuk mengubah seluruh tema.
- Font menggunakan Inter dari Google Fonts, dimuat lewat `public/index.html`.
- Tema gelap/terang dan preferensi bahasa disimpan di `localStorage` lewat `AppContext`.
