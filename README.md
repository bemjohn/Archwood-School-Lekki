# Archwood School Lekki — Web Application

Official website and digital portal for **Archwood School Lekki**, an elite nursery and primary educational institution located at **Plot 17 Road 1 Ikota Villa, Lekki Country Homes Road, Lagos**.

---

## 🚀 Getting Started in VS Code (Localhost)

Follow these simple steps to run this project locally on your machine:

### 1. Prerequisites
Make sure you have **Node.js** (version 18 or higher recommended) and **npm** installed on your computer.
- You can check by running in your terminal:
  ```bash
  node -v
  npm -v
  ```

### 2. Open Project in VS Code
1. Open **Visual Studio Code**.
2. Go to **File → Open Folder...** and select this project directory.
3. Open the built-in terminal in VS Code using the shortcut:
   - **Mac**: `Cmd + ~`
   - **Windows/Linux**: `Ctrl + ~`

### 3. Install Dependencies
Run the following command in the VS Code terminal to install all required packages:
```bash
npm install
```

### 4. Start the Localhost Dev Server
Run:
```bash
npm run dev
```

Your server will start immediately! Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🛠 Available NPM Scripts

- `npm run dev`: Starts the local Vite development server with Hot Module Replacement (HMR) enabled on port `3000`.
- `npm run build`: Type-checks and bundles the application for production inside the `dist/` directory.
- `npm run preview`: Locally previews the production build created by `npm run build`.
- `npm run lint`: Runs TypeScript compiler (`tsc --noEmit`) to verify zero type or syntax errors.

---

## 📁 Project Architecture & Components

```
├── index.html                   # HTML entry point with metadata & web fonts
├── package.json                 # Project dependencies & run scripts
├── vite.config.ts               # Vite configuration (React + Tailwind v4)
├── tsconfig.json                # TypeScript settings
└── src/
    ├── main.tsx                 # React application mounting point
    ├── App.tsx                  # Main App component with section assembly & modal states
    ├── index.css                # Global stylesheet & Tailwind CSS import
    ├── types.ts                 # TypeScript interfaces for stories, reviews & grades
    ├── data/
    │   └── mockData.ts          # Curated data (reviews, ratings, tuition plans, stories)
    ├── assets/
    │   └── images/              # High-definition school photography & reel assets
    └── components/
        ├── Navbar.tsx           # Burgundy navbar matching Bishop's College screenshot
        ├── CrestLogo.tsx        # Official circular Archwood School logo emblem
        ├── HeroCarousel.tsx     # Full-bleed photographic hero slider with CTAs
        ├── OperationalBar.tsx   # Contact bar (5.0 rating, hours, address, phone)
        ├── WelcomeSection.tsx   # Welcome message & 9:16 vertical campus tour reel
        ├── ArchwoodGlance.tsx   # Royal purple split stat section ("At a Glance")
        ├── ArchwoodStories.tsx  # Editorial stories, news, and campus life updates
        ├── AcademicPrograms.tsx # Crèche, Nursery (EYFS) & Primary curriculum
        ├── GallerySection.tsx   # Full photo gallery with category filters & lightbox
        ├── TuitionAndFinance.tsx# Tuition estimator & ₦0.00 admission fee calculator
        ├── SchoolSearchFilter.tsx# Search filter (Lagos, Nursery/Primary, Day Only)
        ├── ParentReviewsSection.tsx# 5.0 ★ rating with 7 criteria sliders & live form
        ├── LocationAndMap.tsx   # Interactive map graphic of Plot 17 Ikota Villa
        ├── Footer.tsx           # Royal purple footer with accreditation ribbon
        └── Modals.tsx           # Application, Inquiry, Finance, Portal & Lightbox modals
```

---

## 🏫 Key Features Included
- **Official Crest & Motto**: Authentic circular seal with *"I Can Do All Things"*.
- **9:16 Vertical Video Player**: Smartphone-style vertical campus reel with auto-hide text on play.
- **Dedicated Gallery**: Categorized photo grid (Classrooms & Labs, Sports & Athletics, Creative Arts, Early Years, Events & Graduation) with fullscreen lightbox viewer.
- **₦0.00 Admission Enrolment**: Free registration modal generating unique reference numbers (e.g. `ASL-2026-XXXX`).
- **Tuition Finance Support**: Zero-interest 3-month termly installment planner.
- **5.0 Star Parent Reviews**: Verified reviews across Academic Excellence, Facilities, Security, Discipline, and Curriculum with live submission support.
