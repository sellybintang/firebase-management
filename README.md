# Firebase Management

## Description

Tugas ini bertujuan memberikan pengalaman praktis pada seorang junior Node.js backend developer dalam mengelola berbagai aspek Firebase di sisi server. Ini termasuk Firebase Authentication, Firestore, Storage, dan Firebase Cloud Messaging (FCM).

## Directions & Example

### 1. Firebase Authentication

Mengelola otentikasi pengguna dengan Firebase Authentication:

- **Register User:**
  - Method: POST
  - Endpoint: `/api/register`
  - Deskripsi: Mendaftarkan pengguna baru dan menyimpan informasi di Firebase Auth.

- **Login User:**
  - Method: POST
  - Endpoint: `/api/login`
  - Deskripsi: Memungkinkan pengguna masuk ke aplikasi dengan menghasilkan token JWT.

- **Logout User:**
  - Method: POST
  - Endpoint: `/api/logout`
  - Deskripsi: Mengeluarkan pengguna dari aplikasi dan mencabut token JWT.

### 2. Firestore Management

Mengelola data melalui Firestore:

- **Get Data:**
  - Method: GET
  - Endpoint: `/api/data/:id`
  - Deskripsi: Mengambil data dari Firestore berdasarkan ID.

- **Add Data:**
  - Method: POST
  - Endpoint: `/api/data`
  - Deskripsi: Menambahkan data baru ke Firestore.

- **Update Data:**
  - Method: PUT
  - Endpoint: `/api/data/:id`
  - Deskripsi: Mengubah data yang ada di Firestore berdasarkan ID.

- **Delete Data:**
  - Method: DELETE
  - Endpoint: `/api/data/:id`
  - Deskripsi: Menghapus data dari Firestore berdasarkan ID.

### 3. Firebase Storage

Mengelola file media melalui Firebase Storage:

- **Upload File:**
  - Method: POST
  - Endpoint: `/api/upload`
  - Deskripsi: Mengunggah file media seperti gambar atau video ke Firebase Storage.

- **Download File:**
  - Method: GET
  - Endpoint: `/api/download/:filename`
  - Deskripsi: Mengunduh file media dari Firebase Storage berdasarkan nama file.

- **Delete File:**
  - Method: DELETE
  - Endpoint: `/api/delete/:filename`
  - Deskripsi: Menghapus file media dari Firebase Storage berdasarkan nama file.

### 4. Firebase Cloud Messaging (FCM)

Mengelola pengiriman notifikasi push melalui FCM:

- **Send Notification:**
  - Method: POST
  - Endpoint: `/api/send-notification`
  - Deskripsi: Mengirim notifikasi push kepada pengguna melalui FCM.

- **Custom Notification:**
  - Method: POST
  - Endpoint: `/api/custom-notification`
  - Deskripsi: Mengirim notifikasi push kustom kepada pengguna melalui FCM.

## Restrictions

- Menggunakan fitur-fitur Firebase Authentication, Firestore, Firebase Storage, dan Firebase Cloud Messaging.
- Menggunakan Firebase Admin SDK.
