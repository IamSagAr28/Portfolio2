# Professional Resume with Dotted Surface Theme

A modern, interactive resume built with Next.js, TypeScript, Tailwind CSS, and Three.js featuring an animated dotted surface background.

## ✨ Features

- 🎨 **Interactive 3D Background** - Animated dotted surface using Three.js WebGL
- 🌓 **Dark/Light Mode** - Seamless theme switching with next-themes
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Performance Optimized** - Built with Next.js 15 and React 19
- 🎯 **TypeScript** - Full type safety
- 💅 **Tailwind CSS** - Modern utility-first styling
- 🎭 **shadcn/ui Structure** - Component organization following shadcn conventions

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Theme Management**: next-themes
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
resume-app/
├── src/
│   ├── app/
│   │   ├── demo/
│   │   │   └── page.tsx          # Demo page for dotted surface
│   │   ├── layout.tsx             # Root layout with theme provider
│   │   ├── page.tsx               # Main resume page
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   ├── ui/
│   │   │   ├── dotted-surface.tsx # 3D animated background component
│   │   │   └── demo.tsx           # Demo component
│   │   ├── providers.tsx          # Theme provider wrapper
│   │   └── theme-toggle.tsx       # Dark/light mode toggle
│   └── lib/
│       └── utils.ts               # Utility functions (cn helper)
├── public/                        # Static assets
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🎨 Components

### DottedSurface
The main animated background component using Three.js:
- Creates a grid of animated particles
- Responds to theme changes (dark/light)
- Fully responsive with window resize handling
- Optimized cleanup to prevent memory leaks

### ThemeToggle
A floating button to switch between dark and light modes:
- Fixed position in top-right corner
- Smooth transitions
- Persists theme preference

## 🛠️ Customization

### Update Resume Content
Edit `src/app/page.tsx` to customize:
- Personal information
- Skills
- Experience
- Projects
- Education
- Certifications

### Modify Theme Colors
Update `src/app/globals.css` to change color scheme:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

### Adjust Dotted Surface Animation
Modify parameters in `src/components/ui/dotted-surface.tsx`:
- `SEPARATION`: Distance between particles
- `AMOUNTX`: Number of particles horizontally
- `AMOUNTY`: Number of particles vertically
- Animation speed: Adjust `count += 0.1` value

## 📝 Key Dependencies

```json
{
  "three": "^0.x.x",           // 3D graphics library
  "next-themes": "^0.x.x",     // Theme management
  "lucide-react": "^0.x.x",    // Icon library
  "clsx": "^2.x.x",            // Conditional classNames
  "tailwind-merge": "^2.x.x"   // Merge Tailwind classes
}
```

## 🎯 Why `/components/ui` Folder?

The `/components/ui` folder follows shadcn/ui conventions:
- **Consistency**: Aligns with shadcn CLI and documentation
- **Organization**: Separates primitive UI components from feature components
- **Discoverability**: Easy to locate and import UI components
- **Scalability**: Clean structure for growing component libraries

## 🌐 Routes

- `/` - Main resume page
- `/demo` - Dotted surface demo page

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📸 Screenshots

The resume includes:
- Hero section with profile image
- Contact information and social links
- Skills organized by category
- Work experience with achievements
- Featured projects with images
- Education history
- Professional certifications

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to customize this resume template for your own use!

## 📧 Contact

Update the contact information in `src/app/page.tsx` with your details.

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Three.js
