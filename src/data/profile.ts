export const profile = {
  name: 'Rizaldo Setiawan',
  role: { id: 'Mobile & Backend Developer', en: 'Mobile & Backend Developer' },
  tagline: {
    id: 'Spesialis Kotlin, Jetpack Compose, dan Flutter — dan juga membangun backend REST API dengan Bun, Hono, dan PostgreSQL.',
    en: 'Specializing in Kotlin, Jetpack Compose, and Flutter — and building REST APIs with Bun, Hono, and PostgreSQL.',
  },
  bio: {
    id: 'Lulusan Teknik Informatika yang berfokus pada pengembangan aplikasi Android dengan Kotlin, Jetpack Compose, dan Flutter. Berpengalaman membangun aplikasi dari konsep hingga rilis di Play Store, dengan keahlian dalam state management (MVVM & BloC), integrasi API, dan optimasi performa. Di pekerjaan sekarang juga membangun backend sales REST API production-grade (Bun, Hono, PostgreSQL, Redis). Alumni Bangkit Academy dengan capstone project top 20 dan tersertifikasi BNSP Junior Mobile Programmer.',
    en: 'Informatics Engineering graduate focused on Android development with Kotlin, Jetpack Compose, and Flutter. Experienced in shipping apps from conception to Play Store, with strong skills in state management (MVVM & BloC), API integration, and performance optimization. In my current role I also build production-grade sales REST APIs (Bun, Hono, PostgreSQL, Redis). Bangkit Academy alumnus with a top-20 capstone project and BNSP-certified Junior Mobile Programmer.',
  },
  email: 'rizaldo.setiawann@gmail.com',
  phone: '+62 822-4846-7955',
  location: { id: 'Bandung, Jawa Barat, Indonesia', en: 'Bandung, West Java, Indonesia' },
  links: {
    github: 'https://github.com/RZLDO',
    linkedin: 'https://linkedin.com/in/rizaldo-setiawan',
  },
  skills: [
    'Kotlin',
    'Jetpack Compose',
    'Flutter',
    'Dart',
    'TypeScript',
    'MVVM',
    'BloC',
    'Firebase',
    'REST API',
    'Retrofit',
    'Coroutines',
    'PostgreSQL',
    'Drizzle ORM',
    'Redis',
    'SQL',
    'Git',
    'Postman',
    'Jira',
    'Docker',
    'Kubernetes',
    'Espresso',
    'JUnit',
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
    slug: 'raja-derek',
    title: 'Raja Derek',
    role: { id: 'Mobile & Backend Developer', en: 'Mobile & Backend Developer' },
    summary: {
      id: 'Ekosistem towing real-time: aplikasi Flutter dengan live tracking & chat, plus backend sales REST API (Bun, Hono, PostgreSQL) untuk operasional lapangan.',
      en: 'Real-time towing ecosystem: Flutter app with live tracking & chat, plus a REST sales backend (Bun, Hono, PostgreSQL) for field operations.',
    },
    description: {
      id: 'Ekosistem lengkap layanan derek real-time. Sisi mobile: aplikasi Flutter terinspirasi ride-hailing seperti Gojek — pelanggan memesan derek, melacak lokasi pengemudi, dan chat langsung; pengemudi menerima permintaan instan dengan navigasi peta dan manajemen penghasilan. Sisi backend: REST API untuk operasional sales yang saya bangun dengan Bun, Hono, dan PostgreSQL (Drizzle ORM) — pipeline prospect & quotation lengkap dengan generator PDF, pelaporan visit, dashboard KPI, notifikasi push (FCM), background workers (BullMQ + Redis), serta integrasi Fleet API untuk geocoding dan harga layanan. Deploy via Docker dengan CI Jenkins.',
      en: 'A complete real-time towing service ecosystem. Mobile side: a Flutter app inspired by ride-hailing apps like Gojek — customers request tow trucks, track drivers, and chat in-app; drivers get instant requests with map navigation and earnings management. Backend side: a sales operations REST API I built with Bun, Hono, and PostgreSQL (Drizzle ORM) — full prospect & quotation pipeline with a PDF generator, visit reporting, KPI dashboards, push notifications (FCM), background workers (BullMQ + Redis), and Fleet API integration for geocoding and service pricing. Deployed with Docker and Jenkins CI.',
    },
    tech: ['Flutter', 'TypeScript', 'Bun', 'Hono', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'Docker'],
    image: '/projects/raja-derek.png',
    playStore: 'https://play.google.com/store/apps/details?id=com.rajaderek.driver.app&hl=id',
  },
  {
    slug: 'wisnu',
    title: 'Wisnu',
    role: { id: 'Lead Android Developer', en: 'Lead Android Developer' },
    summary: {
      id: 'Aplikasi travel dengan rekomendasi wisata, open trip, dan saran perjalanan personal di seluruh Indonesia.',
      en: 'Travel app with tourist recommendations, open trip planning, and personalized travel suggestions across Indonesia.',
    },
    description: {
      id: 'Aplikasi travel yang menyediakan rekomendasi wisata, perencanaan open trip, dan saran perjalanan personal di seluruh Indonesia. Dilengkapi peta interaktif, rekomendasi berbasis AI, dan update perjalanan real-time untuk meningkatkan pengalaman pengguna.',
      en: 'A travel app providing tourist recommendations, open trip planning, and personalized travel suggestions across Indonesia. Features interactive maps, AI-driven recommendations, and real-time trip updates to enhance the travel experience.',
    },
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'REST API', 'Google Maps API'],
    image: '/projects/wisnu.png',
  },
  {
    slug: 'sajan',
    title: 'Sajan — Aplikasi Pemerintah Aceh Jaya',
    role: { id: 'Lead Android Developer', en: 'Lead Android Developer' },
    summary: {
      id: 'Aplikasi resmi Pemerintah Aceh Jaya: pengumuman pemerintah, layanan publik, dan berita lokal dalam satu hub digital.',
      en: 'Official Aceh Jaya Government app: announcements, public services, and local news in one digital hub.',
    },
    description: {
      id: 'Aplikasi mobile resmi yang dikembangkan untuk Pemerintah Aceh Jaya untuk memberikan informasi andal dan terkini kepada publik. Berfungsi sebagai hub digital tempat warga mengakses pengumuman pemerintah, layanan publik, dan berita lokal secara efisien. Tersedia di App Store dan Google Play Store.',
      en: 'An official mobile application developed for the Aceh Jaya Government to provide the public with reliable, up-to-date information. It serves as a digital hub where residents can access government announcements, public services, and local news efficiently. Available on the App Store and Google Play Store.',
    },
    tech: ['Flutter', 'BloC', 'Firebase'],
    image: '/projects/sajan.png',
    playStore: 'https://play.google.com/store/apps/details?id=com.diskominsaajay.sajan&pcampaignid=web_share',
    appStore: 'https://apps.apple.com/id/app/sajan/id6746115416?l=id',
  },
  {
    slug: 'simpel',
    title: 'Simpel',
    role: { id: 'Mobile Engineer', en: 'Mobile Engineer' },
    summary: {
      id: 'Sistem Layanan Mahasiswa — pengajuan dan pelacakan surat administrasi universitas secara digital.',
      en: 'Student Service System — digital submission and tracking of official university letters.',
    },
    description: {
      id: 'Aplikasi yang memungkinkan mahasiswa mengajukan dan melacak surat administrasi resmi untuk urusan universitas dengan mudah. Menyederhanakan proses permintaan dokumen, persetujuan, dan layanan mahasiswa lainnya. Dikembangkan saat menjadi Mobile Developer di Politeknik Negeri Lhokseumawe, berkolaborasi langsung dengan rektorat.',
      en: 'An application that lets students easily submit and track official administrative letters for university matters. It simplifies requesting documents, approvals, and other student services. Built while working as Mobile Developer at Politeknik Negeri Lhokseumawe, collaborating directly with the rectorate.',
    },
    tech: ['Flutter', 'Laravel'],
    image: '/projects/simpel.png',
    playStore: 'https://play.google.com/store/apps/details?id=com.pnl.simpel&pcampaignid=web_share',
  },
  {
    slug: 'ky-mobile',
    title: 'KY Mobile',
    role: { id: 'Mobile Engineer', en: 'Mobile Engineer' },
    summary: {
      id: 'Aplikasi resmi Komisi Yudisial — pelaporan pelanggaran yudikatif dan akses informasi hukum publik.',
      en: 'Official Indonesian Judicial Commission app — judicial misconduct reporting and public legal information.',
    },
    description: {
      id: 'Aplikasi resmi Komisi Yudisial Republik Indonesia yang dirancang untuk meningkatkan akses publik terhadap pengawasan yudikatif dan informasi hukum. Pengguna dapat melaporkan pelanggaran perilaku hakim, melacak perkembangan kasus, dan mengikuti perkembangan hukum di Indonesia.',
      en: 'The official app of the Indonesian Judicial Commission (Komisi Yudisial), designed to enhance public access to judicial oversight and legal information. Users can report judicial misconduct, track case updates, and stay informed about legal affairs in Indonesia.',
    },
    tech: ['Flutter'],
    image: '/projects/ky-mobile.png',
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
    period: 'Okt 2025 — Sekarang',
    title: 'Mobile Engineer',
    org: 'PT Lintas Cakra Cipta',
    location: 'Bandung',
    points: {
      id: [
        'Mengembangkan aplikasi mobile Android (Raja Derek) sebagai Mobile Engineer purnawaktu.',
        'Membangun backend sales REST API (Raja Derek Salesforce) dengan Bun, Hono, PostgreSQL, dan Redis — pipeline prospect & quotation, generator PDF, notifikasi FCM, serta background workers BullMQ.',
        'Membangun fitur end-to-end dengan fokus pada kualitas kode, performa, dan pengalaman pengguna.',
      ],
      en: [
        'Developing the Raja Derek Android app as a full-time Mobile Engineer.',
        'Built the sales REST API backend (Raja Derek Salesforce) with Bun, Hono, PostgreSQL, and Redis — prospect & quotation pipeline, PDF generator, FCM notifications, and BullMQ background workers.',
        'Building features end-to-end with a focus on code quality, performance, and user experience.',
      ],
    },
  },
  {
    period: 'Des 2024 — Des 2025',
    title: 'Android Developer',
    org: 'Feedloop.ai',
    location: 'Remote',
    points: {
      id: [
        'Memimpin inisiatif resolusi bug untuk aplikasi Android existing, menyelesaikan masalah legacy menggunakan Kotlin dan arsitektur MVVM.',
        'Mengelola deployment dan Kubernetes platform Feedloop di environment banking — termasuk perbaikan konfigurasi proxy dan VPN agar layanan dapat diakses lintas server.',
        'Melakukan troubleshooting infrastruktur: memulihkan pod yang mati/tidak dapat diakses dari server tertentu, serta memperbaiki akses ke eksternal API (Gemini, Claude) yang terblokir jaringan.',
        'Menerapkan prinsip clean architecture dan komponen Jetpack (ViewModel, LiveData, Room) untuk meningkatkan maintainability.',
        'Mengintegrasikan REST API menggunakan Retrofit dan Coroutines untuk operasi jaringan yang efisien.',
      ],
      en: [
        'Led bug resolution initiatives for existing Android applications, fixing legacy issues using Kotlin and MVVM architecture.',
        'Managed deployment and Kubernetes for the Feedloop platform in a banking environment — including proxy and VPN configuration fixes so services are reachable across servers.',
        'Infrastructure troubleshooting: recovering dead/unreachable pods from specific servers and restoring access to external APIs (Gemini, Claude) blocked by the network.',
        'Implemented clean architecture principles and Jetpack components (ViewModel, LiveData, Room) to improve maintainability.',
        'Integrated REST APIs using Retrofit and Coroutines for efficient network operations.',
      ],
    },
  },
  {
    period: 'Jun 2024 — Des 2024',
    title: 'Mobile Developer',
    org: 'Diskominsa Aceh Jaya',
    location: 'Onsite',
    points: {
      id: [
        'Memimpin pengembangan aplikasi mobile dari konsep hingga rilis di Play Store menggunakan Flutter.',
        'Menerapkan arsitektur BloC untuk state management yang efisien serta menjamin skalabilitas kode.',
        'Mengintegrasikan RESTful API dan menangani sinkronisasi data kompleks via Http dan serialisasi JSON.',
        'Menerapkan dukungan multi-bahasa (lokalisasi) serta membuat custom widget dan animasi reusable.',
      ],
      en: [
        'Led end-to-end mobile app development from conception to Play Store release using Flutter.',
        'Implemented BloC architecture for efficient state management and code scalability.',
        'Integrated RESTful APIs and managed complex data synchronization via Http and JSON serialization.',
        'Implemented multi-language localization and built custom reusable widgets and animations.',
      ],
    },
  },
  {
    period: 'Sep 2023 — Jun 2024',
    title: 'Mobile Developer',
    org: 'Politeknik Negeri Lhokseumawe',
    location: 'Onsite',
    points: {
      id: [
        'Memimpin desain dan pengembangan aplikasi Sistem Layanan Mahasiswa (Simpel) dengan fokus UI/UX intuitif menggunakan Flutter.',
        'Menerapkan arsitektur BloC untuk state management yang efisien dan skalabilitas kode.',
        'Berkolaborasi langsung dengan rektorat untuk memahami kebutuhan pengguna dan menerjemahkannya menjadi fitur aplikasi.',
      ],
      en: [
        'Led design and development of a comprehensive Student Service System app with intuitive UI/UX using Flutter.',
        'Implemented BloC architecture for efficient state management and code scalability.',
        'Collaborated closely with the university rectorate to translate user needs into actionable app features.',
      ],
    },
  },
  {
    period: 'Jun 2023 — Jun 2024',
    title: 'Android Developer',
    org: 'Wisnu',
    location: 'Remote',
    points: {
      id: [
        'Memimpin pengembangan aplikasi Android end-to-end dari konsep hingga rilis di Play Store menggunakan Jetpack Compose.',
        'Menerapkan arsitektur MVVM dan mengoptimalkan workflow Git, menurunkan kompleksitas kode 35%.',
        'Berkolaborasi dengan tim lintas fungsi, mempercepat siklus rilis sebesar 10%.',
      ],
      en: [
        'Led end-to-end Android app development from conception to Play Store release using Jetpack Compose.',
        'Implemented MVVM architecture and optimized Git workflows, reducing code complexity by 35%.',
        'Collaborated with cross-functional teams, resulting in a 10% faster release cycle.',
      ],
    },
  },
  {
    period: 'Feb 2023 — Jul 2023',
    title: 'Mobile Development Student',
    org: 'Bangkit Academy',
    location: 'Indonesia',
    points: {
      id: [
        'Trainee Android Development dengan fokus penguasaan Kotlin untuk aplikasi mobile.',
        'Capstone project masuk top 20 dan mendapatkan pendanaan startup berbasis solusi inovatif.',
      ],
      en: [
        'Android Development Trainee focused on mastering Kotlin for mobile applications.',
        'Top 20-ranked capstone project that secured startup funding for its innovative solution.',
      ],
    },
  },
  {
    period: 'Jul 2022 — Okt 2022',
    title: 'Junior Mobile Programmer (BNSP)',
    org: 'VSGA',
    location: 'Indonesia',
    points: {
      id: [
        'Trainee Android berspesialisasi Kotlin, mahir membangun aplikasi, testing, dan design pattern MVVM/MVP.',
        'Trainee berkinerja terbaik dan meraih sertifikasi BNSP Junior Mobile Programmer.',
      ],
      en: [
        'Android Trainee specializing in Kotlin — proficient in app building, testing, and MVVM/MVP design patterns.',
        'Recognized as top-performing trainee, earning BNSP certification as Junior Mobile Programmer.',
      ],
    },
  },
  {
    period: 'Apr 2022 — Agu 2022',
    title: 'Internship',
    org: 'PT Bank Syariah Indonesia',
    location: 'Onsite',
    points: {
      id: [
        'Mengembangkan aplikasi Flutter dengan Dart, integrasi API eksternal via package HTTP.',
        'Merancang UI responsif dengan widget system Flutter dan state management BloC.',
        'Mengembangkan backend Laravel untuk integrasi mulus dengan frontend Flutter.',
      ],
      en: [
        'Developed Flutter apps with Dart, integrating external APIs via the HTTP package.',
        'Designed responsive UI with Flutter widgets and BloC state management.',
        'Developed Laravel backend solutions for seamless integration with the Flutter frontend.',
      ],
    },
  },
];

export const services = [
  {
    icon: '📱',
    title: { id: 'Mobile Development', en: 'Mobile Development' },
    items: {
      id: ['Android native: Kotlin, Jetpack Compose', 'Cross-platform: Flutter (BloC)', '5+ app rilis ke Play Store'],
      en: ['Native Android: Kotlin, Jetpack Compose', 'Cross-platform: Flutter (BloC)', '5+ apps shipped to Play Store'],
    },
  },
  {
    icon: '⚙️',
    title: { id: 'Backend Development', en: 'Backend Development' },
    items: {
      id: ['REST API: Bun, Hono, TypeScript', 'PostgreSQL + Drizzle ORM, Redis', 'Background workers & integrasi (BullMQ, FCM)'],
      en: ['REST APIs: Bun, Hono, TypeScript', 'PostgreSQL + Drizzle ORM, Redis', 'Background workers & integrations (BullMQ, FCM)'],
    },
  },
  {
    icon: '🛠️',
    title: { id: 'DevOps & Infrastruktur', en: 'DevOps & Infrastructure' },
    items: {
      id: ['Docker & Kubernetes (environment banking)', 'Troubleshooting pod, proxy, VPN', 'CI/CD: Jenkins, GitHub Actions'],
      en: ['Docker & Kubernetes (banking environment)', 'Pod, proxy & VPN troubleshooting', 'CI/CD: Jenkins, GitHub Actions'],
    },
  },
];

export const achievements = [
  {
    icon: '🏅',
    title: { id: 'Sertifikasi BNSP', en: 'BNSP Certification' },
    detail: { id: 'Junior Mobile Programmer — trainee berkinerja terbaik VSGA 2022', en: 'Junior Mobile Programmer — top-performing VSGA trainee 2022' },
  },
  {
    icon: '🚀',
    title: { id: 'Bangkit Academy', en: 'Bangkit Academy' },
    detail: { id: 'Capstone project Top 20 & mendapat pendanaan startup', en: 'Top 20 capstone project — secured startup funding' },
  },
  {
    icon: '✅',
    title: { id: 'Bahasa', en: 'Languages' },
    detail: { id: 'Indonesia (Native) · English (Intermediate)', en: 'Indonesian (Native) · English (Intermediate)' },
  },
];

export const education = {
  school: 'Politeknik Negeri Lhokseumawe',
  degree: { id: 'D4 Teknik Informatika', en: 'Bachelor Degree in Informatics Engineering' },
  period: 'Agu 2019 — Agu 2023',
  gpa: '3,75/4,00',
  courses: {
    id: 'Pemrograman Dasar, Struktur Data & Algoritma, Basis Data, Pemrograman Berorientasi Objek, Pemrograman Mobile',
    en: 'Programming Fundamentals, Data Structures & Algorithms, Databases, OOP, Mobile Programming',
  },
};
