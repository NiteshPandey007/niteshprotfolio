# 🚀 Nitesh Pandey — Personal Portfolio

<div align="center">

![Portfolio Preview](images/nitesh.jpg)

**Data Analyst · Web Developer · B.Tech CSE 2025**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-00d4ff?style=for-the-badge)](https://protfolionitesh-github-io.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-NiteshPandey007-181717?style=for-the-badge&logo=github)](https://github.com/NiteshPandey007)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-niteshpandey007-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/niteshpandey007)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Setup & Usage](#-setup--usage)
- [Sections](#-sections)
- [Customization Guide](#-customization-guide)
- [EmailJS Setup](#-emailjs-setup)
- [Contact](#-contact)

---

## 👤 About

This is my personal portfolio website showcasing my skills, projects, certifications and achievements as a **Data Analyst** and **Web Developer**. Built with pure HTML, CSS and JavaScript — no frameworks, no dependencies — just clean, fast, responsive code.

---

## ✨ Features

- 🌙 **Dark / Light Mode Toggle** — persists across sessions via localStorage
- 📱 **Fully Responsive** — works on mobile, tablet and desktop
- ⚡ **Smooth Animations** — fade-up on scroll using Intersection Observer API
- 📊 **Animated Skill Bars** — animate when scrolled into view
- 🚀 **Live Project Cards** — direct links to Vercel deployed projects
- 📬 **EmailJS Contact Form** — sends email directly without a backend
- 📄 **CV Download** — one-click resume download
- 🧭 **Active Nav Highlight** — highlights current section while scrolling
- 💡 **Zero dependencies** — no jQuery, no Bootstrap, no React

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Email | EmailJS |
| Fonts | Google Fonts — Space Grotesk + Syne |
| Deployment | Vercel / GitHub Pages |

---

## 📁 Project Structure

```
portfolio/
│
├── index.html          ← Main HTML file (all sections)
├── style.css           ← All styles + dark/light theme variables
├── main.js             ← Theme toggle, animations, EmailJS, hamburger menu
│
├── images/
│   └── nitesh.jpg      ← Your profile photo (used in nav + about section)
│
├── documents/
│   └── Nitesh_CV.pdf   ← Your CV / Resume (for download button)
│
└── README.md           ← This file
```

---

## ⚙️ Setup & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/NiteshPandey007/protfolionitesh.github.io.git
cd protfolionitesh.github.io
```

### 2. Add Your Files

```
images/nitesh.jpg       ← Add your profile photo here
documents/Nitesh_CV.pdf ← Add your CV PDF here
```

### 3. Open Locally

Just open `index.html` in any browser — no build step required.

```bash
# Or use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### 4. Deploy to Vercel / GitHub Pages

**Vercel (Recommended):**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Framework: `Other` → Deploy ✅

**GitHub Pages:**
1. Go to repo Settings → Pages
2. Source: `main` branch → `/root`
3. Save → your site is live at `https://username.github.io/repo-name`

---

## 📑 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, role, stats, CTA buttons |
| **About** | Photo, bio, personal info, chips |
| **Skills** | 4 skill cards with animated progress bars |
| **Projects** | 8 project cards (2 with live Vercel links) |
| **Certifications** | Timeline of education + certs + achievements |
| **Contact** | Social links + EmailJS contact form |
| **Download CV** | One-click CV download |

---

## 🎨 Customization Guide

### Change Your Info
Open `index.html` and search for these placeholders:

```html
<!-- Social media — replace YOUR_*_USERNAME with your actual handles -->
https://instagram.com/YOUR_INSTAGRAM_USERNAME
https://twitter.com/YOUR_TWITTER_USERNAME
https://facebook.com/YOUR_FB_USERNAME
https://threads.net/@YOUR_THREADS_USERNAME
```

### Change Theme Colors
Open `style.css` and edit the CSS variables at the top:

```css
:root[data-theme="dark"] {
  --accent: #00d4ff;   /* ← Change this to your preferred accent color */
  --bg: #080b10;       /* ← Main background */
}
```

---

## 📧 EmailJS Setup

To make the contact form send real emails:

1. Go to [emailjs.com](https://emailjs.com) → Sign Up (free)
2. **Add Email Service** → Connect Gmail → copy `SERVICE_ID`
3. **Create Email Template** → Use these variables in your template:
   ```
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   Message: {{message}}
   ```
   Copy `TEMPLATE_ID`
4. **Account** → copy `PUBLIC_KEY`
5. Open `main.js` and replace:

```js
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← paste here
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← paste here
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← paste here
```

---

## 🏆 Featured Live Projects

| Project | Live | GitHub |
|---------|------|--------|
| **JobNest** — Full Stack Job Portal | [job-nest-final.vercel.app](https://job-nest-final.vercel.app/) | [Repo](https://github.com/NiteshPandey007/JobNest-Final) |
| **AI Resume Analyzer** — Claude AI Powered | [ai-resume-analyzer-psi-rouge.vercel.app](https://ai-resume-analyzer-psi-rouge.vercel.app/) | [Repo](https://github.com/NiteshPandey007/ai-resume-analyzer) |

---

## 📬 Contact

| Platform | Link |
|----------|------|
| 📧 Email | [pandeynitesh762@gmail.com](mailto:pandeynitesh762@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/niteshpandey007](https://linkedin.com/in/niteshpandey007) |
| 🐙 GitHub | [github.com/NiteshPandey007](https://github.com/NiteshPandey007) |
| 📱 WhatsApp | [+91 8887629955](https://wa.me/918887629955) |

---

<div align="center">

Made with ❤️ by **Nitesh Pandey** · Gorakhpur, U.P.

⭐ Star this repo if you found it helpful!

</div>
