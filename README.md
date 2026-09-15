# Portofolio - Rizaldo Setiawan

Personal portfolio: **Mobile & Backend Developer** - Kotlin, Jetpack Compose, Flutter, dan REST API (Bun, Hono, PostgreSQL).

## Stack

- [Astro 4](https://astro.build) - static site generator
- [Tailwind CSS](https://tailwindcss.com) + [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [MDX](https://mdxjs.com) via `@astrojs/mdx` - blog content collections
- [Lenis](https://lenis.darkroom.engineering) - smooth scroll
- Blueprint-style dark design: line-mask text reveal, fade-in-y sections, stack-to-scatter hero, mouse parallax

## Struktur

```
src/
  components/    Hero, Navbar, Services, About, Skills, Projects, Experience, Contact
  content/blog/  artikel MDX (frontmatter: title, description, pubDate, lang, tags)
  data/          profile.ts - semua konten (bio, skills, proyek, pengalaman, pendidikan)
  i18n/          id.json, en.json - string UI dua bahasa
  layouts/       Base.astro - tokens, reveal observers, Lenis, print grid
  pages/
    [lang]/            index, projects/[slug], blog/index, blog/[slug]
public/
  cv.pdf         tombol "Download CV"
  profile.png    foto profil
  projects/      screenshot proyek
```

## Develop

Butuh Node >= 18 (proyek ini dijalankan dengan Node 20):

```sh
export PATH="$HOME/.nvm/versions/node/v20.20.0/bin:$PATH"
npm install
npm run dev      # http://localhost:4321
npm run build    # output statis ke dist/
```

## Menulis blog

Tambah file `.mdx` di `src/content/blog/`:

```mdx
---
title: "Judul Artikel"
description: "Ringkasan 1-2 kalimat."
pubDate: 2025-09-15
lang: id # atau 'en'
tags: ["android"]
---

Isi artikel...
```

## Deploy

Output 100% statis - tinggal import repo ini ke [Vercel](https://vercel.com/new) / Netlify / Cloudflare Pages, tanpa konfigurasi tambahan.

## TODO

- [ ] Ganti endpoint Formspree di `src/components/Contact.astro` (`https://formspree.io/f/xxxxxx`)
