# Wali Kelas SD

Aplikasi web administrasi wali kelas Sekolah Dasar: data siswa, absensi, jurnal guru, daftar mata pelajaran, poin perilaku, agenda ujian, dan nilai.

**Stack:** HTML + Tailwind CSS + Vanilla JS · Backend Google Apps Script · Database Google Sheets

Demo langsung (tanpa backend): buka situs GitHub Pages — data contoh tersimpan di browser.

---

## Fitur

| Modul | Keterangan |
|--------|------------|
| **Data Siswa** | NISN, nama, L/P, orang tua, nomor WA |
| **Absensi** | Input harian H/S/I/A, rekap bulanan, ekspor CSV |
| **Jurnal Guru** | Tanggal, mapel, materi, kegiatan, keterangan |
| **Daftar Mapel** | Ringkasan jurnal, ujian, dan rata-rata nilai per mapel |
| **Poin Perilaku** | Reward & sanksi, rekap total, ambang hadiah |
| **Agenda Ujian** | PH / UTS / UAS |
| **Nilai** | Grid spreadsheet, rata-rata otomatis, highlight di bawah KKM |
| **WhatsApp** | Notifikasi ke orang tua + **rekap absensi ke grup WA** |

---

## Struktur repo

```
├── index.html          ← Frontend (GitHub Pages)
├── js/
│   ├── config.js       ← API_URL & TOKEN
│   ├── api.js
│   └── app.js
├── backend/
│   └── Code.gs         ← Tempel ke Google Apps Script
├── README.md
└── .gitignore
```

---

## 1. Deploy frontend ke GitHub Pages

### A. Buat repository

1. Buat repo baru di GitHub (contoh: `wali-kelas-sd`), **Public**.
2. Upload semua file di folder ini (atau `git push`).

```bash
git init
git add .
git commit -m "Initial: Wali Kelas SD"
git branch -M main
git remote add origin https://github.com/USERNAME/wali-kelas-sd.git
git push -u origin main
```

### B. Aktifkan GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / folder `/ (root)`
4. **Save**
5. Tunggu 1–2 menit. URL aplikasi:
   `https://USERNAME.github.io/wali-kelas-sd/`

Tanpa mengisi `API_URL`, aplikasi berjalan di **Mode Demo** (localStorage).

---

## 2. Hubungkan ke Google Sheets (backend)

1. Buat [Google Sheet](https://sheets.google.com) baru.
2. **Extensions → Apps Script** → hapus kode default.
3. Tempel seluruh isi `backend/Code.gs` → **Save**.
4. Pilih fungsi `setup` → **Run** → izinkan akses.
5. Pastikan muncul sheet: Siswa, Absensi, Ujian, Nilai, Poin, **Jurnal**, Pengaturan.
6. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Salin URL yang berakhiran `/exec`.
8. Buka `js/config.js` di repo, isi:

```js
window.CONFIG = {
  API_URL: 'https://script.google.com/macros/s/XXXX/exec',
  TOKEN: '',
};
```

9. Commit & push. Tunggu Pages update, atau hard-refresh (`Ctrl+Shift+R`).

> Setelah mengubah `Code.gs`, selalu buat **New version** pada deployment agar perubahan aktif.

---

## 3. Pengaturan di aplikasi

Buka menu **Pengaturan** (ikon gear):

- Nama sekolah, kelas, wali, tahun ajaran, KKM
- **No. WA Grup Kelas** (format `62812…`) untuk tombol **WA Grup** di Absensi

---

## Keamanan

- URL Web App bersifat publik bagi yang mengetahui link-nya. Opsional: isi `TOKEN` yang sama di `Code.gs` dan `config.js`.
- Data siswa bersifat pribadi. Batasi akses Google Sheet hanya untuk guru/sekolah.
- Jangan commit data sensitif. `config.js` hanya berisi URL API, bukan data siswa.

---

## Mode Demo vs Google Sheets

| | Mode Demo | Google Sheets |
|--|-----------|---------------|
| `API_URL` | kosong `''` | URL `/exec` |
| Penyimpanan | Browser (localStorage) | Spreadsheet Anda |
| Cocok untuk | Coba-coba / presentasi | Produksi kelas |

---

## Lisensi

Bebas dipakai untuk keperluan sekolah dan pendidikan.
