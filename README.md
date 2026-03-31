# 🛒 Toko Paketan

Toko Paketan adalah aplikasi web _e-commerce_ simulasi untuk membeli berbagai pilihan paket data internet dari provider terkemuka di Indonesia (Telkomsel, Indosat, XL). Proyek ini dibangun menggunakan **React (Vite)** untuk _frontend_ dan **JSON Server** sebagai _Mock API_.

## ✨ Fitur Utama

- **Katalog Produk:** Menampilkan daftar paket internet dalam bentuk kartu (_card_) yang responsif.
- **Paginasi :** Memuat data produk secara bertahap menggunakan parameter `_page` dan `_per_page`.
- **Sistem Filter :**
  - Filter berdasarkan _Provider_.
  - Filter berdasarkan rentang Harga (Min/Max).
  - Filter berdasarkan rentang Kuota (Min/Max).
- **Autentikasi Pengguna:** Sistem _login_ sederhana menggunakan _global state_ (_Zustand_).
- **Protected Routes:** Halaman `Checkout` dan `Riwayat Transaksi` hanya dapat diakses oleh pengguna yang sudah _login_.
- **Checkout Transaksi:** Menyimpan data pembelian ke _database_ secara otomatis dengan `id` dan `date` yang terbuat secara dinamis.
- **Riwayat Transaksi:** Menampilkan daftar pembelian pengguna beserta detail produknya menggunakan fitur Relasi API (`_embed`).

## 🛠️ Tech Stack

**Frontend:**

- [React.js](https://react.dev/) (dengan Vite)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Zustand](https://zustand.docs.pmnd.rs/learn/getting-started/introduction) (Global State Management)
- [React Router v6](https://reactrouter.com/) (Routing & Protected Routes)
- Komponen UI kustom (berbasis Radix/Shadcn UI)

**Backend / Mock API:**

- [JSON Server](https://github.com/typicode/json-server) (REST API Simulasi)

## 🚀 Cara Menjalankan Proyek Secara Lokal

Proyek ini terdiri dari dua bagian: `my-app` (Frontend) dan `mock-api` (Backend). Kamu perlu menjalankan keduanya di terminal yang berbeda.

### Prasyarat

Pastikan kamu sudah menginstal [Node.js](https://nodejs.org/) di komputermu.

### 1. Menjalankan Backend (JSON Server)

Buka terminal pertama, lalu jalankan perintah berikut:

```bash
# Masuk ke folder mock-api
cd mock-api

# Instalasi dependensi
npm install

# Jalankan server di port 3001
npm run start
```

Server API sekarang berjalan di http://localhost:3001

### 2. Menjalankan Frontend (React)

Buka terminal kedua, lalu jalankan perintah berikut:

```Bash
# Masuk ke folder my-app
cd my-app

# Instalasi dependensi
npm install

# Jalankan development server
npm run dev
```

Aplikasi web sekarang berjalan di http://localhost:5173 (atau port yang diberikan oleh Vite)

### 🔐 Data Login Dummy

Untuk mencoba fitur Checkout dan Riwayat Transaksi, gunakan kredensial berikut:

Username: user

Password: password

#### 📂 Struktur Folder Utama

```
toko-paketan/
├── mock-api/
│   ├── db.json               # Database simulasi (Users, Products, Transactions)
│   └── package.json
└── my-app/
    └── src/
        ├── components/       # Komponen UI Reusable (Tombol, Input, Modal, dll)
        ├── lib/              # Fungsi utilitas (Format Rupiah, dll)
        ├── pages/            # Komponen Halaman (Home, Checkout, Transactions)
        ├── services/         # Fungsi Fetch API (getProducts, addTransaction, dll)
        ├── store/            # Zustand Store (useAuthStore)
        ├── App.jsx           # Setup Routing utama
        └── main.jsx          # Entry point React
```
