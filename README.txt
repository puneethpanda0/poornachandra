# Poornachandra Seva Trust — Website

## Folder Structure

Set up your folder exactly like this inside VS Code:

```
poornachandra/
│
├── index.html          ← Main website file (open this in browser)
├── style.css           ← All styling
├── main.js             ← Navigation, form, donate button
├── gallery.js          ← Gallery photo loader (EDIT THIS to add photos)
│
└── images/
    ├── logo.jpeg                  ← Your trust logo (poornalogo.jpeg)
    ├── rotary_letter.jpeg         ← Rotary International letter photo
    ├── trust_deed.jpeg            ← Trust deed document photo
    │
    ├── adult_literacy/            ← Put all 95 adult literacy photos here
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   └── ... (95 photos total)
    │
    ├── ellekeri/                  ← Put all 19 ellekeri book distribution photos here
    │   ├── photo1.jpg
    │   └── ... (19 photos)
    │
    ├── fevord_k/                  ← Put all 8 FEVORD-K meeting photos here
    │   ├── photo1.jpg
    │   └── ... (8 photos)
    │
    └── jeevan_care/               ← Put all 4 Jeevan Care photos here
        ├── photo1.jpg
        └── ... (4 photos)
```

---

## Step 1 — Rename your image files

Rename the files you already have:
- `poornalogo.jpeg`          → save as `images/logo.jpeg`
- `adult_literacy_proof_letter.jpeg` → save as `images/rotary_letter.jpeg`
- `WhatsApp_Image_2026-05-26_at_1_36_09_PM.jpeg` → save as `images/trust_deed.jpeg`

---

## Step 2 — Add your gallery photos

1. Copy all photos from each folder into the matching `images/` subfolder
2. Open `gallery.js` in VS Code
3. Find the section that says `files: [` for each program
4. Add your filenames. Example:

```js
adult: {
  folder: 'images/adult_literacy/',
  files: [
    'IMG_20241201_001.jpg',
    'IMG_20241201_002.jpg',
    'IMG_20241201_003.jpg',
    // ... add all 95 filenames here
  ]
},
```

**TIP:** To get all filenames quickly, open a terminal in VS Code, go into the folder and run:
- Windows: `dir /b` 
- Mac/Linux: `ls`

Then copy-paste the names into gallery.js.

---

## Step 3 — Open the website

Just double-click `index.html` — it opens in your browser.

For best results (especially gallery loading), use VS Code's **Live Server** extension:
1. Install "Live Server" from VS Code Extensions
2. Right-click `index.html` → "Open with Live Server"

---

## To go live on the internet

Upload the entire `poornachandra/` folder to any hosting service:
- **Free options:** Netlify (netlify.com), GitHub Pages, Vercel
- **Drag and drop** the folder onto netlify.com/drop — done in 30 seconds!

---

## Contact details already in the website
- Address: No.157, Shravanaiahna Thopu, Virupakshipura Hobli, Channapatna Taluk, Ramanagara District, Karnataka 562138
- Phone: 94823 64863 / 96204 60123
- Email: poornachandrasevatrust@gmail.com
- Reg No: CAN-4-00015-2026-27
