export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  year: string;
  title: string;
  description: string;
  tech: string;
  techColor?: "yellow" | "blue" | "pink" | "green";
  stars?: string;
  forks?: string;
  repoUrl?: string;
  liveUrl?: string;
  isLarge?: boolean;
}

export interface StackItem {
  number: string;
  title: string;
  subtitle: string;
  category: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  points?: string[];
  place: string;
}

export interface AwardItem {
  year: string;
  title: string;
  category: string;
  event: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  major: string;
  degree?: string;
  status?: string;
}

export const portfolioData = {
  personal: {
    name: "Rahman Hanif",
    nickname: "Hanif",
    brandInitials: "RH",
    role: "Backend Developer & Tech Enthusiast",
    location: "Malang, Jawa Timur, Indonesia",
    phone: "+62 812-3363-3887",
    email: "abdulrahmanhanifd@gmail.com",
    githubUsername: "baynobu",
    githubUrl: "https://github.com/baynobu",
    linkedinUrl: "https://www.linkedin.com/in/abdulrahmanhanifd",
    instagramUrl: "https://www.instagram.com/handpts",
    availability: "Available for backend & engineering roles",
    summary:
      "Backend developer dan mahasiswa Teknik Informatika Politeknik Negeri Malang yang berfokus pada arsitektur microservices, REST API, dan sistem basis data. Berpengalaman memimpin proyek rekayasa perangkat lunak serta memiliki minat mendalam pada eksplorasi teknologi modern.",
  },

  projects: [
    {
      id: "pbl-house-price",
      number: "01 / MACHINE LEARNING",
      category: "Machine Learning & Backend",
      year: "2026",
      title: "PBL House Price Prediction",
      description:
        "Memimpin tim dalam perancangan pipeline machine learning dan integrasi backend REST API untuk memprediksi harga properti secara akurat.",
      tech: "Python",
      techColor: "yellow",
      stars: "0",
      forks: "0",
      repoUrl: "https://github.com/orgs/TI3G-PBL-House-Price/repositories",
      isLarge: false,
    },
    {
      id: "pbl-web-arsitek",
      number: "02 / WEB PLATFORM",
      category: "Project Manager & Fullstack",
      year: "2026",
      title: "PBL Web Arsitek",
      description:
        "Platform manajemen proyek dan portofolio arsitek terintegrasi; merumuskan arsitektur sistem, modularitas kode, dan kolaborasi Git sprint.",
      tech: "Laravel / Blade",
      techColor: "pink",
      stars: "0",
      forks: "0",
      repoUrl: "https://github.com/baynobu/PBL-WebArsitek",
      isLarge: false,
    },
    {
      id: "the-abc-buddy",
      number: "03 / ASSISTIVE TECH",
      category: "VR & Game Development",
      year: "2023",
      title: "The ABC Buddy",
      description:
        "Game edukasi interaktif berbasis Virtual Reality multi-sensori untuk membantu anak-anak penyandang disleksia belajar mengenali huruf dan membaca.",
      tech: "Unity / C#",
      techColor: "yellow",
      stars: "0",
      forks: "0",
      repoUrl: "https://github.com/baynobu/the-abc-buddy",
      isLarge: false,
    },
    {
      id: "machine-learning",
      number: "04 / DATA SCIENCE",
      category: "Machine Learning & Modeling",
      year: "2023",
      title: "Machine Learning",
      description:
        "Implementasi pemodelan machine learning, pengolahan data, dan eksplorasi algoritma untuk berbagai studi kasus komputasi cerdas.",
      tech: "Jupyter / Python",
      techColor: "blue",
      stars: "0",
      forks: "0",
      repoUrl: "https://github.com/baynobu/pembelajaran-mesin-26",
      isLarge: false,
    },
  ] as ProjectItem[],

  techStack: [
    {
      number: "01",
      title: "Node.js & Express",
      subtitle: "Runtime / Framework",
      category: "Backend",
    },
    {
      number: "02",
      title: "Prisma & Sequelize",
      subtitle: "ORM & Query Builder",
      category: "Database Layer",
    },
    {
      number: "03",
      title: "PostgreSQL & MySQL",
      subtitle: "Database Management",
      category: "Database",
    },
    {
      number: "04",
      title: "Microservices & REST API",
      subtitle: "Distributed Architecture",
      category: "Architecture",
    },
    {
      number: "05",
      title: "Python & Machine Learning",
      subtitle: "Data Science & Modeling",
      category: "Data & ML",
    },
    {
      number: "06",
      title: "Laravel & PHP",
      subtitle: "Web Framework",
      category: "Backend Framework",
    },
    {
      number: "07",
      title: "TypeScript & JavaScript",
      subtitle: "Core Languages",
      category: "Languages",
    },
    {
      number: "08",
      title: "Flutter & Godot",
      subtitle: "Mobile & Game Engines",
      category: "Mobile & Creative",
    },
    {
      number: "09",
      title: "QA & Project Leadership",
      subtitle: "Testing & Sprint Management",
      category: "Methodology",
    },
  ] as StackItem[],

  experiences: [
    {
      period: "2026 — Sekarang",
      role: "Project Manager / PBL House Price",
      organization: "Politeknik Negeri Malang",
      description:
        "Memimpin tim dalam perencanaan, pembagian tugas, dan koordinasi pipeline data science hingga integrasi backend REST API.",
      place: "Malang",
    },
    {
      period: "2026",
      role: "Project Manager / PBL Web Arsitek",
      organization: "Politeknik Negeri Malang",
      description:
        "Memimpin tim pengembangan website Web Arsitek dari analisis kebutuhan, arsitektur sistem, hingga penyerahan produk akhir.",
      place: "Malang",
    },
    {
      period: "2025",
      role: "Project Manager / PBL Lab Business Analytics",
      organization: "Politeknik Negeri Malang",
      description:
        "Mengoordinasikan pengumpulan, pembersihan, dan analisis data bisnis untuk menghasilkan rekomendasi strategis bagi pemangku kepentingan.",
      place: "Malang",
    },
    {
      period: "2023",
      role: "Quality Assurance (Internship) / PT. Xquisite AI",
      organization: "PT. Xquisite AI",
      description:
        "Melakukan functional testing komprehensif, penyusunan test cases, pelaporan bug, serta verifikasi perbaikan bersama tim developer sebelum rilis.",
      place: "Jakarta",
    },
  ] as ExperienceItem[],

  awards: [
    {
      year: "2023",
      title: "Medali Perunggu — Malang Young Innovators Award",
      category: "Inovasi Teknologi",
      event: "Malang Young Innovators Award 2023",
    },
    {
      year: "2023",
      title: "Peserta — Lapis AI Hackathon",
      category: "Hackathon",
      event: "Lapis AI Hackathon 2023",
    },
    {
      year: "2023",
      title: "Peserta — LKS Bidang Data Science",
      category: "Kompetisi Siswa",
      event: "LKS Data Science 2023",
    },
  ] as AwardItem[],

  education: [
    {
      period: "2024 — Sekarang",
      institution: "Politeknik Negeri Malang",
      major: "Teknik Informatika",
      status: "Mahasiswa Aktif",
    },
    {
      period: "2021 — 2024",
      institution: "SMKN 12 Malang",
      major: "Rekayasa Perangkat Lunak",
      status: "Lulus",
    },
  ] as EducationItem[],
};
