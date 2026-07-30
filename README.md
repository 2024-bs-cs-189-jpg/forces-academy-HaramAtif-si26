# 🛡️ Forces Academy Faisalabad — Website

A complete, responsive multi-page website built for **Forces Academy Faisalabad**, a defence forces preparation academy offering Army, Air Force & Navy entry-test coaching, ISSB interview grooming, and academic (Matric/FSc) programs in Faisalabad, Pakistan.

This project was built as part of the **Code Saviours** internship program, covering real-world frontend development: multi-page architecture, responsive design, interactive UI components, and client-side data handling — all without a backend, using static HTML/CSS/JS + Bootstrap 5.

---

## 🔗 Live Site

**[View Live Website →](https://YOUR-GITHUB-USERNAME.github.io/forces-academy-HaramAtif-si26/)**

> Replace `YOUR-GITHUB-USERNAME` above with your actual GitHub Pages username before publishing this README.

---

## 📸 Screenshots

| Home Page | Courses Page | Admissions Page |
|---|---|---|
| ![Home Page](./screenshots/home.png) | ![Courses Page](./screenshots/courses.png) | ![Admissions Page](./screenshots/admissions.png) |

| Results Page | Gallery Page |
|---|---|
| ![Results Page](./screenshots/results.png) | ![Gallery Page](./screenshots/gallery.png) |

> 📁 Add your actual screenshots to a `/screenshots` folder in the repo root, named `home.png`, `courses.png`, `admissions.png`, `results.png`, `gallery.png` (or update the filenames above to match yours). At minimum 3 pages are required — Home, Courses, and Admissions are shown by default.

---

## 🧰 Tech Stack

- **HTML5** — semantic, multi-page structure (7 pages)
- **CSS3** — custom stylesheet (`CSS/style.css`) with CSS variables, responsive breakpoints, and animations
- **Bootstrap 5.3** — grid system, components (navbar, accordion, carousel, forms)
- **Bootstrap Icons** — iconography throughout the site
- **JavaScript (Vanilla)** — no frameworks; all interactivity hand-written
- **Google Fonts** — Playfair Display (headings) + Inter (body text)
- **GLightbox** — lightbox gallery viewer (Gallery page)
- **GitHub Pages** — static site hosting

---

## ✨ Features

**Site-wide**
- Fully responsive design (mobile, tablet, desktop)
- Sticky navbar with active-page highlighting
- Floating WhatsApp & Call quick-contact buttons
- Smooth scroll behavior + floating "Back to Top" button
- Page fade-in and scroll-reveal animations on all sections

**Home**
- Hero section with CTA buttons
- Animated stats counter (students, years, courses, success rate)
- Scrolling course ticker
- Testimonials carousel
- Selection process timeline

**About**
- Academy history timeline (2011–2026)
- Mission & Vision cards
- Achievements/awards grid
- Leadership team profiles

**Courses**
- Course cards grid with tags
- Side-by-side course comparison table
- Batch timing selector (Morning/Evening/Weekend) with live result panel

**Admissions**
- Step-by-step "How to Apply" guide
- Eligibility criteria cards
- Live seat availability progress bars
- Interactive document checklist tracker (saves progress via localStorage)
- Full fee structure table
- Important dates timeline

**Results**
- Summary stat cards (total, selected, qualified, success rate)
- Top position holders showcase
- Year-on-year batch comparison bars
- Searchable & filterable results table (by name, course, year, status)
- Export to CSV + Print-friendly view
- Pagination-ready structure

**Gallery**
- Category filter tabs (Events / Sports / Academic) with live counts
- Live caption search
- Grid/List view toggle
- "Surprise Me" random photo shuffle
- Like button per photo
- Lightbox full-size photo viewer (GLightbox)

**Contact**
- Contact info cards
- Live "We're Online/Offline" status badge (based on office hours)
- Validated contact form with success confirmation
- Embedded Google Map
- Office hours table
- Contact-specific FAQ accordion

---

## 📁 Project Structure

```
forces-academy-HaramAtif-si26/
├── index.html
├── about.html
├── courses.html
├── admissions.html
├── results.html
├── gallery.html
├── contact.html
├── CSS/
│   └── style.css
├── js/
│   └── main.js
├── screenshots/
│   ├── home.png
│   ├── courses.png
│   ├── admissions.png
│   ├── results.png
│   └── gallery.png
└── README.md
```

---

## 🚀 Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR-GITHUB-USERNAME/forces-academy-HaramAtif-si26.git
   ```
2. Open `index.html` directly in your browser, **or** serve it with a local server (recommended, avoids CORS/localStorage quirks):
   ```bash
   npx serve .
   ```
3. Navigate between pages using the navbar.

---

## 👤 Built By

**Built by:** Hezline | **Code Saviours SI-26** | **2026**