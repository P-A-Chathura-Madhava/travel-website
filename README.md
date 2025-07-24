# Travel Website - Next.js & Tailwind CSS

A modern, responsive travel website built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases beautiful beaches and travel destinations with smooth animations and a clean, professional design.

## Features

- ✨ **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- 🎨 **Responsive Design**: Fully responsive across all devices
- 🌙 **Dark/Light Mode**: Toggle between themes with persistent storage
- 🎭 **Smooth Animations**: Scroll-triggered animations and transitions
- 📱 **Mobile-First**: Designed with mobile-first approach
- 🖼️ **Image Optimization**: Next.js Image component for optimal performance
- 🎢 **Interactive Carousel**: Swiper.js integration for destination showcase
- 📹 **Video Integration**: Custom video player with controls
- 🎯 **Active Navigation**: Dynamic navigation highlighting
- ⬆️ **Scroll to Top**: Smooth scroll-to-top functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Remix Icons
- **Carousel**: Swiper.js
- **Images**: Next.js Image Optimization
- **Animations**: CSS Transitions + Intersection Observer

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd travel-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Discover.tsx    # Destinations carousel
│   ├── Experience.tsx  # Experience section
│   ├── Video.tsx       # Video section
│   ├── Places.tsx      # Places grid
│   ├── Subscribe.tsx   # Newsletter subscription
│   ├── Sponsors.tsx    # Sponsors section
│   ├── Footer.tsx      # Footer
│   └── ScrollUp.tsx    # Scroll to top button
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
└── hooks/              # Custom hooks
    ├── useActiveSection.ts # Active navigation tracking
    └── useScrollReveal.ts  # Scroll animations
```

## Key Features Explained

### Theme Management
- Persistent dark/light mode toggle
- System preference detection
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Optimized for all screen sizes

### Performance Optimizations
- Next.js Image optimization
- Lazy loading
- Efficient re-renders with proper React patterns

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## Customization

### Colors
Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: 'hsl(190, 64%, 22%)',
    // ... other variants
  },
  // ... other colors
}
```

### Content
Update content in the respective component files:
- Hero content: `src/components/Hero.tsx`
- Destinations: `src/components/Discover.tsx`
- Places: `src/components/Places.tsx`

### Images
Replace placeholder images with your own:
- Use high-quality images from Pexels or your own assets
- Maintain aspect ratios for best results
- Consider using Next.js Image component for optimization

## Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify

Simply connect your repository and deploy!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).