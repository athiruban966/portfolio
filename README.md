# Athiruban S — Portfolio

Personal portfolio website built with React.

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm start
```
Opens at [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
```

## 🌐 Deploy to GitHub Pages

### Step 1 — Add homepage to package.json
Open `package.json` and add this line (replace `YOUR_USERNAME` with your GitHub username):
```json
"homepage": "https://YOUR_USERNAME.github.io/athiruban-portfolio"
```

### Step 2 — Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 3 — Add deploy scripts to package.json
In the `"scripts"` section, add:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

### Step 4 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/athiruban-portfolio.git
git push -u origin main
```

### Step 5 — Deploy
```bash
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/athiruban-portfolio`

---
Built by Athiruban S · 2025
