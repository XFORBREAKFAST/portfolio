# Portofolio Dzaky Arif Muttaqin

Website portofolio statis (tanpa build) + panel admin di `/admin`.
Isi website disimpan di Firebase Firestore (`site/content`), login admin pakai Google.

## Isi folder
- `index.html` – website utama
- `admin.html` – panel admin (buka di `/admin`)
- `js/content.js` – isi bawaan + pembaca link YouTube/Drive
- `js/firebase-config.js` – konfigurasi Firebase
- `firestore.rules` – aturan keamanan (UID diisi dari menu Keamanan di /admin)
- `vercel.json` – pengaturan Vercel

## Online-kan
1. GitHub → New repository `portfolio` → upload semua file di folder ini.
2. Vercel → Add New → Project → Import repo `portfolio` → Deploy (tanpa ubah setting).
3. Firebase → Authentication → Settings → Authorized domains → tambahkan domain Vercel (dan nanti domain .my.id).
4. Buka `/admin` → login Google → menu Keamanan → salin aturan → Firestore → Rules → Publish.
5. Isi karya, reels, teks → Simpan.
