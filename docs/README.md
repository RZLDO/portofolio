# Taruh PDF di sini

1. Download 2 file dari Google Drive:
   - `1T1ZqVLlezPS230DHmYahKH6Z3tkGsnCq` → simpan sebagai `docs/portofolio.pdf`
   - `1V8nasya_J-BQeNcFDD8tM0S1GxF5bLUR` → simpan sebagai `docs/cv.pdf`
2. Setelah itu, copy `docs/cv.pdf` ke `public/cv.pdf` agar tombol "Download CV" berfungsi:
   ```bash
   cp docs/cv.pdf public/cv.pdf
   ```
3. Lalu isi `src/data/profile.ts` + `src/i18n/*.json` dari teks PDF.
