import { defineConfig, devices } from '@playwright/test';

/**
 * Konfigurasi Utama Pengujian Playwright E2E untuk Proyek Portofolio Next.js
 */
export default defineConfig({
  testDir: './tests',
  /* Menjalankan seluruh pengujian secara paralel */
  fullyParallel: true,
  /* Mencegah eksekusi test.only yang tidak sengaja tertinggal pada pipeline CI */
  forbidOnly: !!process.env.CI,
  /* Pengulangan otomatis (retry) jika terjadi kegagalan di environment CI */
  retries: process.env.CI ? 2 : 0,
  /* Jumlah worker paralel */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter laporan visual dalam format HTML */
  reporter: 'html',

  use: {
    /* URL lokal tempat aplikasi Next.js dijalankan */
    baseURL: 'http://localhost:3000',

    /* Observabilitas: Simpan trace viewer, screenshot, dan video saat pengujian gagal */
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Browser target: Chromium Desktop */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Menjalankan server lokal Next.js secara otomatis sebelum pengujian berlangsung */
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
