# Forces Academy Faisalabad — Website

A responsive, multi-page front-end website built for **Forces Academy Faisalabad**, a coaching institute that prepares students for Army, Air Force, and Navy written tests, physical training, and ISSB interviews. This project was built as part of the **Code Saviours SI-26** internship program (Frontend Track).

🔗 **Live Site:** [https://2024-bs-cs-189-jpg.github.io/forces-academy-HaramAtif-si26/](https://2024-bs-cs-189-jpg.github.io/forces-academy-HaramAtif-si26/)

---

## 📸 Screenshots

| Home | Results | Contact |
|---|---|---|
| ![Home page](screenshots/home.png) | ![Results page](screenshots/results.png) | ![Contact page](screenshots/contact.png) |

> Add your own screenshot images to a `screenshots/` folder in the repo root (e.g. `screenshots/home.png`, `screenshots/results.png`, `screenshots/contact.png`) so they render above. Feel free to add more than three.

---

## 🛠️ Tech Stack

- **HTML5** — semantic, 7-page multi-page site
- **CSS3** — custom stylesheet (`CSS/style.css`), CSS variables for theming, responsive breakpoints (1440px / 768px / 375px)
- **[Bootstrap 5.3.0](https://getbootstrap.com/)** — grid system, navbar, carousel, accordion, forms
- **[Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/)** — iconography throughout
- **Google Fonts** — Playfair Display (headings), Inter (body text)
- **Vanilla JavaScript** (`js/main.js`) — no frameworks, no build step
- **[GLightbox](https://biati-digital.github.io/glightbox/)** — lightbox for the gallery page
- **GitHub Pages** — static hosting / deployment

---

## ✨ Features

**Site-wide**
- Fully responsive 7-page site: Home, About, Courses, Admissions, Results, Gallery, Contact
- Sticky navbar with active-page highlighting and a visually distinct **Student Portal** button (gold outline pill) that shows a "Coming Soon" popup toast on click
- Scroll-reveal animations and page fade-in transitions
- Floating WhatsApp + Call buttons, and a Back-to-Top button
- Custom inline SVG favicon
- Consistent green/gold brand theme and typography across every page

**Home**
- Animated stats counters (students trained, years of excellence, courses, success rate)
- "Selection Process" step tracker and a scrolling course ticker
- Testimonials carousel with custom-styled navigation arrows and dots
- "Next Batch Starts In" live countdown timer

**About**
- Company history timeline, mission & vision cards, achievements, and leadership team

**Courses**
- Course comparison table and a "Which Batch Timing Suits You?" finder

**Admissions**
- Step-by-step "How to Apply" guide, live seat-availability progress bars
- Interactive required-documents checklist (progress saved via `localStorage`)
- Fee structure table and key admissions dates

**Results**
- Top position holders with photos and gold highlight for 1st place
- Year-over-year batch comparison chart
- Searchable / filterable results table (course, year, status), CSV export, and a print-friendly view

**Gallery**
- Category filters, live search, grid/list view toggle, like button, random-shuffle, and a lightbox powered by GLightbox

**Contact**
- Validated contact form with a success message
- Live "we're online / offline" status badge based on office hours
- FAQ accordion and a static "Open in Google Maps" card (kept lightweight — no embedded iframe, so the page loads in a single request)

---

## 📁 Project Structure

```
forces-academy/
├── index.html
├── about.html
├── courses.html
├── admissions.html
├── results.html
├── gallery.html
├── contact.html
├── CSS/
│   └── style.css
└── js/
    └── main.js
```

---

## 🚀 Running Locally

No build step required — it's a static site.

1. Clone the repo
2. Open `index.html` directly in a browser, or serve the folder with any static server (e.g. VS Code's Live Server extension)

---

**Built by:** Haram Atif | Code Saviours SI-26 | 2026