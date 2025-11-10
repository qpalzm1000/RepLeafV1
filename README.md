# 🍂 RepLeaf V1

An **interactive fall-themed landing page** built with **React**, **TypeScript**, and **Vite**.  
The goal is to create a smooth, visually rich animation of falling leaves and a draggable leaf blower that reacts naturally to user input.

---

## 🧠 Overview

This project is part of a learning journey to understand:
- How modern web apps are structured
- How GitHub and Replit connect
- How to build clean, interactive user experiences using React + TypeScript

---

## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| Frontend | React + TypeScript | Interactive UI and components |
| Bundler | Vite | Fast development and build |
| Styling | Tailwind CSS | Utility-based responsive styling |
| 3D / Animation | Three.js (planned) | Leaf simulation and visuals |
| Version Control | Git + GitHub | Source control and collaboration |

---

## 🚀 Getting Started

### 1️⃣ Clone or open on Replit
If using Replit, it should already be connected to this repo.  
Otherwise, clone it locally with:
```bash
git clone https://github.com/qpalzm1000/RepLeafV1
cd RepLeafV1
### 2️⃣ Install dependencies
```bash
npm install
3️⃣ Start development server
bash
Copy code
npm run dev
Then open the link shown in your terminal (usually http://localhost:5173).

4️⃣ Build for production
bash
Copy code
npm run build
Preview the build with:

bash
Copy code
npm run preview
🗂 Folder Structure
php
Copy code
RepLeafV1/
├── public/               # Images and static assets
├── src/
│   ├── components/       # React components (e.g., FallingLeavesScene, LeafBlower)
│   ├── styles/           # Tailwind and global styles
│   ├── main.tsx          # Entry point
│   └── App.tsx           # Root component
├── package.json          # Scripts and dependencies
├── vite.config.ts        # Build configuration
├── tailwind.config.ts    # Tailwind setup
└── README.md             # You are here
🔄 GitHub + Replit Workflow
Make changes in Replit

Commit with a clear message (e.g., Fix leaf gravity)

Push to GitHub

(Optional) Pull if you changed files directly on GitHub

🧩 Next Steps
 Add project description, license, and repo topics

 Set up ESLint + Prettier for consistent formatting

 Create simple CI test (GitHub Actions)

 Begin refining animation physics

🧑‍💻 Author
Sid Noir
Learning frontend development through hands-on projects.

📜 License
MIT License — see LICENSE for details.
