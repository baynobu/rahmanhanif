import { Page, Locator, expect } from '@playwright/test';

/**
 * Kelas Page Object Model (POM) untuk Website Portofolio Pribadi Rahman Hanif.
 * Memisahkan pemetaan elemen antarmuka (locators) dan aksi pengguna dari file skenario uji.
 */
export class PortfolioPage {
  readonly page: Page;
  readonly headerSection: Locator;
  readonly heroSection: Locator;
  readonly projectsSection: Locator;
  readonly stackSection: Locator;
  readonly experienceSection: Locator;
  readonly credentialsSection: Locator;
  readonly contactSection: Locator;
  readonly footerSection: Locator;

  constructor(page: Page) {
    this.page = page;

    // Resilient Locators: Pemetaan bagian utama halaman Next.js
    this.headerSection = page.locator('header.site-header');
    this.heroSection = page.locator('section.hero');
    this.projectsSection = page.locator('section#work');
    this.stackSection = page.locator('section#stack');
    this.experienceSection = page.locator('section#experience');
    this.credentialsSection = page.locator('section#credentials');
    this.contactSection = page.locator('section#contact');
    this.footerSection = page.locator('footer');
  }

  /**
   * Navigasi ke halaman beranda dan memverifikasi title
   */
  async goto() {
    await this.page.goto('/');
    // Web-First Assertion: Memastikan judul halaman sesuai dengan portofolio Rahman Hanif
    await expect(this.page).toHaveTitle(/Rahman Hanif/i);
  }

  /**
   * Skenario 1: Memverifikasi seluruh komponen utama halaman berhasil di-render
   */
  async verifikasiKomponenDimuat() {
    await expect(this.headerSection).toBeVisible();
    await expect(this.heroSection).toBeVisible();
    await expect(this.projectsSection).toBeVisible();
    await expect(this.stackSection).toBeVisible();
    await expect(this.footerSection).toBeVisible();
  }

  /**
   * Skenario 2: Memverifikasi identitas pemilik portofolio tampil dengan benar di Hero section
   */
  async verifikasiIdentitasPemilik() {
    // Memastikan nama 'Rahman Hanif' tampil di heading level 1
    const nameHeading = this.heroSection.getByRole('heading', { level: 1 });
    await expect(nameHeading).toContainText(/Rahman Hanif/i);

    // Memastikan role/profesi 'Backend Developer' terlihat
    await expect(this.heroSection.getByText(/Backend Developer/i).first()).toBeVisible();
  }

  /**
   * Skenario 3: Memverifikasi navigasi menu Projects dan Tech Stack
   */
  async verifikasiNavigasi() {
    // 1. Klik navigasi Projects
    const linkProjects = this.headerSection.getByRole('link', { name: /^Projects$/i });
    await linkProjects.click();
    await expect(this.projectsSection).toBeVisible();
    await expect(this.projectsSection.getByRole('heading', { level: 2, name: /Projects/i })).toBeVisible();

    // 2. Klik navigasi Stack
    const linkStack = this.headerSection.getByRole('link', { name: /^Stack$/i });
    await linkStack.click();
    await expect(this.stackSection).toBeVisible();
    await expect(this.stackSection.getByRole('heading', { level: 2, name: /Tech stack/i })).toBeVisible();
  }
}
