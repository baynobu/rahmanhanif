import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../pages/PortfolioPage';

test.describe('Pengujian E2E Website Portofolio Pribadi Rahman Hanif', () => {

  test('1. Skenario Render Komponen: Seluruh struktur utama halaman portofolio termuat dengan baik', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    // 1. Buka halaman utama portofolio
    await portfolio.goto();

    // Ambil screenshot halaman portofolio untuk dokumentasi laporan
    await page.screenshot({ path: 'screenshot_portfolio_web.png', fullPage: false });

    // 2. Web-First Assertion: Pastikan seluruh komponen dinamis (Navbar, Hero, Projects, Stack, Footer) tampil
    await portfolio.verifikasiKomponenDimuat();
  });

  test('2. Skenario Konten Beranda: Menampilkan identitas pemilik nama dan profesi dengan benar', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    // 1. Buka halaman utama portofolio
    await portfolio.goto();

    // 2. Web-First Assertion: Verifikasi identitas 'Rahman Hanif' dan role 'Backend Developer'
    await portfolio.verifikasiIdentitasPemilik();
  });

  test('3. Skenario Navigasi: Pengunjung dapat bernavigasi ke bagian Projects dan Tech Stack secara mulus', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    // 1. Buka halaman utama portofolio
    await portfolio.goto();

    // 2. Klik link navigasi dan pastikan seksi yang dituju aktif dan terlihat
    await portfolio.verifikasiNavigasi();
  });

});
