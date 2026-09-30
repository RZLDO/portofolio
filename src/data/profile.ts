export const profile = {
  name: "Rizaldo Setiawan",
  role: { id: "Mobile & Backend Developer", en: "Mobile & Backend Developer" },
  tagline: {
    id: "Mobile developer dengan pengalaman merilis aplikasi Android & Flutter ke Play Store dan App Store - dari desain UI sampai rilis, plus fitur real-time (MQTT, WebSocket, FCM) dan backend TypeScript.",
    en: "Mobile developer shipping Android & Flutter apps to Play Store and App Store - from UI design to release, plus real-time features (MQTT, WebSocket, FCM) and TypeScript backend development.",
  },
  bio: {
    id: "Mobile developer dengan 2 tahun pengalaman membangun dan merilis aplikasi Android dan Flutter ke Play Store dan App Store, dari desain UI hingga rilis. Terampil dalam Kotlin, Jetpack Compose, dan Flutter, fitur real-time (MQTT, WebSocket, FCM), serta pengembangan backend dengan TypeScript. Di pekerjaan sekarang berperan sebagai Mobile & Backend Developer: membangun Raja Derek V2 (Flutter, MQTT, WebSocket) dan backend sistem sales internal (Hono, Drizzle, PostgreSQL, BullMQ). Alumni Bangkit Academy dengan capstone project top 20 dan tersertifikasi BNSP Junior Mobile Programmer.",
    en: "Mobile developer with 2 years of experience building and shipping Android and Flutter apps to Play Store and App Store, from UI design to release. Skilled in Kotlin, Jetpack Compose, and Flutter, real-time features (MQTT, WebSocket, FCM), and backend development with TypeScript. Currently a Mobile & Backend Developer: building Raja Derek V2 (Flutter, MQTT, WebSocket) and the internal sales system backend (Hono, Drizzle, PostgreSQL, BullMQ). Bangkit Academy alumnus with a top-20 capstone project and BNSP-certified Junior Mobile Programmer.",
  },
  email: "rizaldo.setiawann@gmail.com",
  phone: "+62 822-4846-7955",
  location: {
    id: "Bandung, Jawa Barat, Indonesia",
    en: "Bandung, West Java, Indonesia",
  },
  links: {
    github: "https://github.com/RZLDO",
    linkedin: "https://linkedin.com/in/rizaldo-setiawan",
  },
  skills: [
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Dart",
    "TypeScript",
    "MVVM",
    "BloC",
    "Provider",
    "Riverpod",
    "MQTT",
    "WebSocket",
    "Firebase",
    "REST API",
    "Retrofit",
    "Coroutines",
    "PostgreSQL",
    "Drizzle ORM",
    "Redis",
    "SQL",
    "Git",
    "Postman",
    "Jira",
    "Docker",
    "Kubernetes",
    "Espresso",
    "JUnit",
  ],
};

export type Project = {
  slug: string;
  title: string;
  role: { id: string; en: string };
  summary: { id: string; en: string };
  description: { id: string; en: string };
  tech: string[];
  image: string;
  playStore?: string;
  appStore?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "raja-derek",
    title: "Raja Derek V2",
    role: {
      id: "Mobile Developer",
      en: "Mobile Developer",
    },
    summary: {
      id: "Aplikasi B2C pemesanan layanan derek - multi-stop order, tracking pengemudi real-time via MQTT, dan chat WebSocket.",
      en: "B2C towing service ordering app - multi-stop orders, real-time driver tracking via MQTT, and WebSocket chat.",
    },
    description: {
      id: "Memimpin pengembangan end-to-end RajaDerek v2, aplikasi pemesanan layanan derek B2C - dari desain UI, integrasi API, hingga rilis. Membangun alur pesanan multi-stop dengan integrasi Maps (satu titik jemput + 3-5+ titik antar), tracking lokasi pengemudi secara real-time via MQTT, serta chat real-time antara pelanggan, pengemudi, dan admin menggunakan WebSocket yang juga dipakai untuk auto-refresh data live. Notifikasi push FCM dan Firebase Remote Config untuk konfigurasi dinamis.",
      en: "Owned end-to-end development of RajaDerek v2, a B2C towing service ordering app - covering UI design, API integration, and release. Built a multi-stop order flow with Maps integration (one pickup point and 3-5+ dropoff points), real-time driver location tracking via MQTT, and real-time chat between customers, drivers, and admins over WebSocket - also used for live data auto-refresh. FCM push notifications and Firebase Remote Config for dynamic configuration.",
    },
    tech: ["Flutter", "MQTT", "WebSocket", "Firebase", "Google Maps"],
    image: "/projects/raja-derek.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.rajaderek.driver.app&hl=id",
  },
  {
    slug: "salesforce-api",
    title: "Raja Derek Salesforce",
    role: {
      id: "Backend Developer",
      en: "Backend Developer",
    },
    summary: {
      id: "Backend sistem sales internal: catatan keuangan, manajemen prospect, sistem notifikasi, dan worker generator PDF.",
      en: "Internal sales system backend: financial records, prospect management, notification system, and PDF generation worker.",
    },
    description: {
      id: "Mengembangkan backend untuk sistem sales internal Raja Derek yang mencakup catatan keuangan dan manajemen prospect. Membangun sistem notifikasi dan worker generator PDF. Stack: Hono, TypeScript, Drizzle ORM, PostgreSQL, dan BullMQ untuk background jobs.",
      en: "Developed the backend for Raja Derek's internal sales system covering financial records and prospect management. Built a notification system and a PDF generation worker. Stack: Hono, TypeScript, Drizzle ORM, PostgreSQL, and BullMQ for background jobs.",
    },
    tech: [
      "TypeScript",
      "Hono",
      "PostgreSQL",
      "Drizzle ORM",
      "BullMQ",
    ],
    image: "/projects/salesforce-api.png",
  },
  {
    slug: "wisnu",
    title: "Wisnu",
    role: { id: "Lead Android Developer", en: "Lead Android Developer" },
    summary: {
      id: "Aplikasi travel dengan rekomendasi wisata, open trip, dan saran perjalanan personal di seluruh Indonesia.",
      en: "Travel app with tourist recommendations, open trip planning, and personalized travel suggestions across Indonesia.",
    },
    description: {
      id: "Aplikasi travel Android yang merekomendasikan destinasi per wilayah, dibangun dari nol hingga rilis di Play Store menggunakan Jetpack Compose. Membangun pengalaman rekomendasi di sisi client, terintegrasi dengan backend AI service yang menghasilkan saran perjalanan personal. Arsitektur MVVM dengan Hilt dan Retrofit agar codebase modular dan testable, serta workflow Git berbasis PR bersama tim backend, design, dan QA.",
      en: "An Android travel app recommending destinations by region, built from scratch to Play Store release using Jetpack Compose. Built the recommendation experience on the client side, integrating with a backend AI service that generates personalized travel suggestions. MVVM architecture with Hilt and Retrofit to keep the codebase modular and testable, and a PR-based Git workflow coordinating with backend, design, and QA teams.",
    },
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Hilt",
      "Retrofit",
      "AI Integration",
    ],
    image: "/projects/wisnu.png",
  },
  {
    slug: "sajan",
    title: "Sajan - Aplikasi Pemerintah Aceh Jaya",
    role: { id: "Lead Android Developer", en: "Lead Android Developer" },
    summary: {
      id: "Aplikasi informasi pemerintah Aceh Jaya - berita lokal, direktori SKPK, dan pelaporan masalah publik. 100+ downloads.",
      en: "Aceh Jaya government information app - local news, SKPK directory, and public issue reporting. 100+ downloads.",
    },
    description: {
      id: "Aplikasi informasi publik pemerintahan untuk Aceh Jaya yang saya rancang dan kembangkan secara mandiri, dari desain UI/UX hingga rilis di Play Store dan App Store menggunakan Flutter - mencapai 100+ downloads. Fitur utama: integrasi berita lokal (provinsi & kabupaten), direktori kontak dan deskripsi SKPK, serta modul pelaporan masalah publik untuk aspirasi warga. Arsitektur BLoC untuk state management yang scalable, integrasi RESTful API dengan JSON serialization, lokalisasi bilingual (Indonesia & Inggris), dan custom widget serta animasi reusable.",
      en: "A public government information app for Aceh Jaya that I independently designed and developed, covering the full cycle from UI/UX design to deployment on Play Store and App Store using Flutter - reaching 100+ downloads. Core features: local news integration (provincial and regional), a directory of SKPK contacts and descriptions, and a public issue-reporting module for community complaints. BLoC architecture for scalable state management, RESTful API integration with JSON serialization, bilingual localization (Indonesian and English), and custom reusable widgets and animations.",
    },
    tech: ["Flutter", "BloC", "Firebase"],
    image: "/projects/sajan.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.diskominsaajay.sajan&pcampaignid=web_share",
    appStore: "https://apps.apple.com/id/app/sajan/id6746115416?l=id",
  },
  {
    slug: "simpel",
    title: "Simpel",
    role: { id: "Mobile Engineer", en: "Mobile Engineer" },
    summary: {
      id: "Sistem Layanan Mahasiswa - pengajuan dan pelacakan surat administrasi universitas secara digital.",
      en: "Student Service System - digital submission and tracking of official university letters.",
    },
    description: {
      id: "Aplikasi yang memungkinkan mahasiswa mengajukan dan melacak surat administrasi resmi untuk urusan universitas dengan mudah. Menyederhanakan proses permintaan dokumen, persetujuan, dan layanan mahasiswa lainnya. Dikembangkan saat menjadi Mobile Developer di Politeknik Negeri Lhokseumawe, berkolaborasi langsung dengan rektorat.",
      en: "An application that lets students easily submit and track official administrative letters for university matters. It simplifies requesting documents, approvals, and other student services. Built while working as Mobile Developer at Politeknik Negeri Lhokseumawe, collaborating directly with the rectorate.",
    },
    tech: ["Flutter", "Laravel"],
    image: "/projects/simpel.png",
    playStore:
      "https://play.google.com/store/apps/details?id=com.pnl.simpel&pcampaignid=web_share",
  },
  {
    slug: "ky-mobile",
    title: "KY Mobile",
    role: { id: "Mobile Engineer", en: "Mobile Engineer" },
    summary: {
      id: "Aplikasi resmi Komisi Yudisial - pelaporan pelanggaran yudikatif dan akses informasi hukum publik.",
      en: "Official Indonesian Judicial Commission app - judicial misconduct reporting and public legal information.",
    },
    description: {
      id: "Aplikasi resmi Komisi Yudisial Republik Indonesia yang dirancang untuk meningkatkan akses publik terhadap pengawasan yudikatif dan informasi hukum. Pengguna dapat melaporkan pelanggaran perilaku hakim, melacak perkembangan kasus, dan mengikuti perkembangan hukum di Indonesia.",
      en: "The official app of the Indonesian Judicial Commission (Komisi Yudisial), designed to enhance public access to judicial oversight and legal information. Users can report judicial misconduct, track case updates, and stay informed about legal affairs in Indonesia.",
    },
    tech: ["Flutter"],
    image: "/projects/ky-mobile.png",
  },
];

export type Experience = {
  period: string;
  title: string;
  org: string;
  location: string;
  points: { id: string[]; en: string[] };
};

export const experience: Experience[] = [
  {
    period: "Okt 2025 - Sekarang",
    title: "Mobile Developer & Backend Developer",
    org: "PT Lintas Cakra Cipta",
    location: "Bandung (Onsite)",
    points: {
      id: [
        "Raja Derek V2 (Flutter): memimpin pengembangan end-to-end aplikasi pemesanan derek B2C - desain UI, integrasi API, hingga rilis.",
        "Membangun alur pesanan multi-stop dengan Maps (1 titik jemput + 3-5+ titik antar), tracking pengemudi real-time via MQTT, dan chat real-time pelanggan-pengemudi-admin via WebSocket.",
        "Mengintegrasikan FCM push notifications dan Firebase Remote Config.",
        "Salesforce (Backend): mengembangkan backend sistem sales internal - catatan keuangan, manajemen prospect, sistem notifikasi, dan worker generator PDF. Stack: Hono, TypeScript, Drizzle ORM, PostgreSQL, BullMQ.",
      ],
      en: [
        "Raja Derek V2 (Flutter): owned end-to-end development of a B2C towing service ordering app - UI design, API integration, and release.",
        "Built multi-stop order flow with Maps integration (1 pickup + 3-5+ dropoffs), real-time driver tracking via MQTT, and real-time customer-driver-admin chat via WebSocket.",
        "Integrated FCM push notifications and Firebase Remote Config.",
        "Salesforce (Backend): developed the internal sales system backend - financial records, prospect management, a notification system, and a PDF generation worker. Stack: Hono, TypeScript, Drizzle ORM, PostgreSQL, BullMQ.",
      ],
    },
  },
  {
    period: "Des 2024 - Okt 2025",
    title: "Freelance Android Developer",
    org: "Feedloop.ai",
    location: "Remote",
    points: {
      id: [
        "Melakukan migrasi implementasi map dari OpenStreetMap ke Google Maps API untuk meningkatkan akurasi lokasi dan kelengkapan data.",
        "Mengimplementasikan FCM deep linking untuk mengarahkan pengguna langsung ke screen terkait dari notifikasi promo dan order.",
        "Mengintegrasikan Firebase Remote Config untuk maintenance mode dan konfigurasi API base URL dinamis.",
        "Menyelesaikan berbagai UI bug di screen existing, meningkatkan stabilitas aplikasi secara keseluruhan.",
      ],
      en: [
        "Migrated the map implementation from OpenStreetMap to Google Maps API to improve location accuracy and data completeness.",
        "Implemented FCM deep linking to route users directly to relevant screens from promo and order notifications.",
        "Integrated Firebase Remote Config to manage app maintenance mode and dynamic API base URL configuration.",
        "Resolved multiple UI bugs across existing screens, improving overall app stability.",
      ],
    },
  },
  {
    period: "Jun 2024 - Des 2024",
    title: "Mobile Developer",
    org: "Diskominsa Aceh Jaya",
    location: "Onsite",
    points: {
      id: [
        "Merancang dan mengembangkan aplikasi informasi pemerintah Aceh Jaya secara mandiri, dari desain UI/UX hingga rilis di Play Store dan App Store menggunakan Flutter - mencapai 100+ downloads.",
        "Membangun fitur inti: integrasi berita lokal (provinsi & kabupaten), direktori kontak dan deskripsi SKPK, serta modul pelaporan masalah publik.",
        "Menerapkan arsitektur BLoC untuk state management yang scalable dan mudah dirawat.",
        "Mengintegrasikan RESTful API dengan JSON serialization untuk sinkronisasi data app-backend.",
        "Menambahkan lokalisasi bilingual (Indonesia & Inggris) serta custom widget dan animasi reusable.",
      ],
      en: [
        "Independently designed and developed the Aceh Jaya public government information app, covering the full cycle from UI/UX design to Play Store and App Store release using Flutter - reaching 100+ downloads.",
        "Built core features including local news integration (provincial and regional), a directory of SKPK contacts and descriptions, and a public issue-reporting module.",
        "Implemented BLoC architecture for scalable and maintainable state management.",
        "Integrated RESTful APIs with JSON serialization for data synchronization between the app and backend services.",
        "Added bilingual localization (Indonesian and English) and built custom reusable widgets and animations.",
      ],
    },
  },
  {
    period: "Sep 2023 - Jun 2024",
    title: "Mobile Developer",
    org: "Politeknik Negeri Lhokseumawe",
    location: "Onsite",
    points: {
      id: [
        "Memimpin desain dan pengembangan aplikasi Sistem Layanan Mahasiswa (Simpel) dengan fokus UI/UX intuitif menggunakan Flutter.",
        "Menerapkan arsitektur BloC untuk state management yang efisien dan skalabilitas kode.",
        "Berkolaborasi langsung dengan rektor untuk memahami kebutuhan pengguna dan menerjemahkannya menjadi fitur aplikasi.",
      ],
      en: [
        "Led design and development of a comprehensive Student Service System app with intuitive UI/UX using Flutter.",
        "Implemented BloC architecture for efficient state management and code scalability.",
        "Collaborated closely with the university rector to translate user needs into actionable app features.",
      ],
    },
  },
  {
    period: "Jun 2023 - Jun 2024",
    title: "Android Developer",
    org: "Wisnu",
    location: "Remote",
    points: {
      id: [
        "Mengembangkan Wisnu, aplikasi travel Android yang merekomendasikan destinasi per wilayah, dari nol hingga rilis di Play Store menggunakan Jetpack Compose.",
        "Membangun pengalaman rekomendasi di sisi client, terintegrasi dengan backend AI service yang menghasilkan saran perjalanan personal.",
        "Menerapkan arsitektur MVVM dengan Hilt dan Retrofit agar codebase modular dan testable.",
        "Bekerja dengan workflow Git berbasis PR, berkoordinasi dengan tim backend, design, dan QA.",
      ],
      en: [
        "Developed Wisnu, an Android travel app recommending destinations by region, from scratch to Play Store release using Jetpack Compose.",
        "Built the recommendation experience on the client side, integrating with a backend AI service that generates personalized travel suggestions.",
        "Implemented MVVM architecture with Hilt and Retrofit to keep the codebase modular and testable.",
        "Worked in a PR-based Git workflow, coordinating with backend, design, and QA teams to deliver features.",
      ],
    },
  },
  {
    period: "Feb 2023 - Jul 2023",
    title: "Mobile Development Student",
    org: "Bangkit Academy",
    location: "Indonesia",
    points: {
      id: [
        "Trainee Android Development dengan fokus penguasaan Kotlin untuk aplikasi mobile.",
        "Capstone project masuk top 20 dan mendapatkan pendanaan startup berbasis solusi inovatif.",
      ],
      en: [
        "Android Development Trainee focused on mastering Kotlin for mobile applications.",
        "Top 20-ranked capstone project that secured startup funding for its innovative solution.",
      ],
    },
  },
  {
    period: "Jul 2022 - Okt 2022",
    title: "Junior Mobile Programmer (BNSP)",
    org: "VSGA",
    location: "Indonesia",
    points: {
      id: [
        "Trainee Android berspesialisasi Kotlin, mahir membangun aplikasi, testing, dan design pattern MVVM/MVP.",
        "Trainee berkinerja terbaik dan meraih sertifikasi BNSP Junior Mobile Programmer.",
      ],
      en: [
        "Android Trainee specializing in Kotlin - proficient in app building, testing, and MVVM/MVP design patterns.",
        "Recognized as top-performing trainee, earning BNSP certification as Junior Mobile Programmer.",
      ],
    },
  },
];

export const services = [
  {
    icon: "📱",
    title: { id: "Mobile Development", en: "Mobile Development" },
    items: {
      id: [
        "Android native: Kotlin, Jetpack Compose",
        "Cross-platform: Flutter (BloC, Provider, Riverpod)",
        "Real-time: MQTT, WebSocket, FCM",
        "5+ app rilis ke Play Store & App Store",
      ],
      en: [
        "Native Android: Kotlin, Jetpack Compose",
        "Cross-platform: Flutter (BloC, Provider, Riverpod)",
        "Real-time: MQTT, WebSocket, FCM",
        "5+ apps shipped to Play Store & App Store",
      ],
    },
  },
  {
    icon: "⚙️",
    title: { id: "Backend Development", en: "Backend Development" },
    items: {
      id: [
        "REST API: Bun, Hono, TypeScript",
        "PostgreSQL + Drizzle ORM, Redis",
        "Background workers & integrasi (BullMQ, FCM)",
      ],
      en: [
        "REST APIs: Bun, Hono, TypeScript",
        "PostgreSQL + Drizzle ORM, Redis",
        "Background workers & integrations (BullMQ, FCM)",
      ],
    },
  },
  {
    icon: "🛠️",
    title: { id: "DevOps & Infrastruktur", en: "DevOps & Infrastructure" },
    items: {
      id: [
        "Docker & Kubernetes (environment banking)",
        "Troubleshooting pod, proxy, VPN",
        "CI/CD: Jenkins, GitHub Actions",
      ],
      en: [
        "Docker & Kubernetes (banking environment)",
        "Pod, proxy & VPN troubleshooting",
        "CI/CD: Jenkins, GitHub Actions",
      ],
    },
  },
];

export const achievements = [
  {
    icon: "🏅",
    title: { id: "Sertifikasi BNSP", en: "BNSP Certification" },
    detail: {
      id: "Junior Mobile Programmer - trainee berkinerja terbaik VSGA 2022",
      en: "Junior Mobile Programmer - top-performing VSGA trainee 2022",
    },
  },
  {
    icon: "🚀",
    title: { id: "Bangkit Academy", en: "Bangkit Academy" },
    detail: {
      id: "Capstone project Top 20 & mendapat pendanaan startup",
      en: "Top 20 capstone project - secured startup funding",
    },
  },
  {
    icon: "✅",
    title: { id: "Bahasa", en: "Languages" },
    detail: {
      id: "Indonesia (Native) · English (Intermediate)",
      en: "Indonesian (Native) · English (Intermediate)",
    },
  },
];

export const education = {
  school: "Politeknik Negeri Lhokseumawe",
  degree: {
    id: "D4 Teknik Informatika",
    en: "Bachelor Degree in Informatics Engineering",
  },
  period: "Agu 2019 - Agu 2023",
  gpa: "3,75/4,00",
  courses: {
    id: "Pemrograman Dasar, Struktur Data & Algoritma, Basis Data, Pemrograman Berorientasi Objek, Pemrograman Mobile",
    en: "Programming Fundamentals, Data Structures & Algorithms, Databases, OOP, Mobile Programming",
  },
};
