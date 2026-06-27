# Build Dapur Planner untuk Google Play

Aplikasi ini sudah dikonfigurasi untuk Capacitor Android. Build native dilakukan di komputer lokal (butuh Android Studio + JDK 17).

## 1. Clone project & install
```bash
git clone <repo-url>
cd dapur-planner
npm install
```

## 2. Build web assets
```bash
npm run build
```
Output ada di folder `dist/`.

## 3. Tambahkan platform Android (sekali saja)
```bash
npx cap add android
```

## 4. Sync setiap kali ada perubahan
```bash
npx cap sync android
```

## 5. Buka di Android Studio
```bash
npx cap open android
```

Di Android Studio:
1. Tunggu Gradle sync selesai.
2. Klik **Build → Generate Signed App Bundle / APK**.
3. Pilih **Android App Bundle (.aab)** untuk Google Play.
4. Buat keystore baru (simpan baik-baik — wajib untuk update di kemudian hari).
5. Pilih build variant **release**.

File `.aab` siap diupload ke [Google Play Console](https://play.google.com/console).

## Konfigurasi aplikasi
- **App ID**: `com.dapurplanner.app`
- **App Name**: Dapur Planner
- **Min SDK**: 22 (default Capacitor)
- **Web dir**: `dist`

## Checklist Google Play
- [ ] Icon launcher (`android/app/src/main/res/mipmap-*`) — ganti dengan icon kustom.
- [ ] Splash screen — opsional, install `@capacitor/splash-screen`.
- [ ] App signing key (Play App Signing direkomendasikan).
- [ ] Privacy Policy URL (wajib di Play Console). Setelah publish, gunakan URL: `https://<domain-publik-anda>/kebijakan-privasi`. Halaman sudah tersedia di aplikasi dan menjelaskan bahwa Dapur Planner tidak mengumpulkan data pribadi serta menyimpan semua data secara lokal di perangkat.
- [ ] Ganti email placeholder di `src/routes/kebijakan-privasi.tsx` dengan kontak aktual sebelum dipublikasikan.
- [ ] Screenshot, deskripsi, kategori (Food & Drink / Lifestyle).
- [ ] Versi (`versionCode` & `versionName` di `android/app/build.gradle`).
- [ ] Target SDK ≥ 34 (cek `android/variables.gradle`).

## Catatan
Semua data tersimpan offline di IndexedDB pada WebView — aplikasi tidak butuh internet & tidak mengirim data ke server.
