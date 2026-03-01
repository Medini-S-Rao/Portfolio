# Portfolio Website - Build & Deployment Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Experience.tsx       # Experience timeline
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Skills.tsx          # Skills section
│   │   ├── Contact.tsx         # Contact section
│   │   └── Footer.tsx          # Footer
│   └── resume_data.json        # Resume data
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

---

## 🎨 Features

- ✨ **Smooth Animations** - Framer Motion for page transitions and hover effects
- 🌙 **Dark Theme** - Modern dark UI with blue accents
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **Fast Performance** - Next.js 14 with server-side rendering
- 🎯 **SEO Optimized** - Metadata and semantic HTML
- 🔍 **Smooth Scrolling** - Built-in scroll behavior

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js and configures everything
   - Click "Deploy"
   - Your site will be live at `your-portfolio.vercel.app`

### Option 2: Netlify

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder, or
   - Connect GitHub and let Netlify auto-deploy on push

### Option 3: Docker & Cloud Run / AWS

1. **Create Dockerfile**

   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build Docker image**
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

---

## 🔧 Customization

### Update Resume Data

Edit `resume_data.json` with your own information. The portfolio automatically reads from this file.

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'accent': '#your-color',
  'accent-light': '#your-light-color',
}
```

### Modify Text

Edit individual component files in `src/components/` to customize content.

---

## 📊 Performance Tips

- Images are optimized automatically by Next.js
- CSS is minified and purged during build
- Code-splitting for faster initial load
- Caching headers set for assets

---

## ✅ Checklist Before Deployment

- [ ] Update `resume_data.json` with your information
- [ ] Add links to LinkedIn, GitHub, LeetCode in Contact component
- [ ] Test on mobile devices
- [ ] Check all links work correctly
- [ ] Verify project descriptions and achievements
- [ ] Set up custom domain (optional)
- [ ] Add Google Analytics (optional)

---

## 🚀 Next Steps

1. **Setup Development**: Run `npm install && npm run dev`
2. **Customize**: Edit components and resume_data.json
3. **Test Locally**: Open http://localhost:3000
4. **Push to GitHub**: Create a repository and push
5. **Deploy**: Use Vercel for one-click deployment

---

## 📞 Support

For issues or questions, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

## 📄 License

This portfolio template is open source and available for personal use.

---

**Happy deploying! 🎉**
