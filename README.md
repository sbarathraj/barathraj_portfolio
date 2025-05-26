<<<<<<< HEAD
# Animated Portfolio

A modern, interactive portfolio website built with React, Three.js, and Framer Motion. This portfolio showcases your work with stunning animations and 3D elements, featuring a custom cursor, smooth page transitions, and responsive design.

## 🚀 Features

- Interactive 3D elements using Three.js and React Three Fiber
- Smooth animations powered by Framer Motion
- Custom cursor implementation for desktop users
- Responsive design with Tailwind CSS
- Particle effects using TSParticles
- Contact form integration with EmailJS
- TypeScript for type safety
- Modern development setup with Vite
- Dynamic section tracking and navigation
- Mobile-optimized experience
- Animated gradient backgrounds and floating elements
- Social media integration with dynamic icons
- Smooth scroll navigation
- Interactive 3D image card with hover effects
- Typed text animations using react-typed
- Intersection Observer for scroll animations
- Dark mode support with custom color scheme
- Custom animations and transitions
- Neon glow effects and shadows
- 3D transform effects
- Responsive typography with custom fonts
- Reusable animated components
- Progress tracking and loading states
- Interactive navigation with smooth transitions
- Project showcase with 3D card effects
- Skills visualization with progress bars
- Interactive timeline for experience
- Social media integration
- Blog/Articles section
- Coding profiles integration
- Custom scroll animations
- Staggered reveal effects

## 🛠️ Technologies Used

- React 18
- TypeScript
- Three.js
- Framer Motion
- Tailwind CSS
- Vite
- EmailJS
- TSParticles
- React Three Fiber
- ESLint
- React Intersection Observer
- React Typed
- Lucide React Icons
- Inter & JetBrains Mono fonts

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/barathraj/barathraj-portfolio.git
cd barathraj-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── assets/        # Static assets like images and fonts
├── components/    # Reusable React components
│   ├── AnimatedButton.tsx  # Custom animated button component
│   ├── AnimatedText.tsx    # Text animation component
│   ├── Cursor.tsx         # Custom cursor implementation
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── ParticleBackground.tsx # Interactive particle effects
│   └── ProgressBar.tsx    # Progress tracking component
├── context/       # React context providers
│   └── SectionContext.tsx  # Section tracking context
├── hooks/         # Custom React hooks
│   └── useScrollAnimation.tsx # Scroll-based animation hook
├── sections/      # Main page sections
│   ├── HeroSection.tsx     # Hero section with 3D elements
│   ├── AboutSection.tsx    # About me section
│   ├── ExperienceSection.tsx # Work experience
│   ├── ProjectsSection.tsx # Project showcase
│   ├── SkillsSection.tsx   # Technical skills
│   ├── ArticlesSection.tsx # Blog/Articles
│   ├── CodingProfilesSection.tsx # Coding profiles
│   ├── EducationSection.tsx # Educational background
│   └── ContactSection.tsx  # Contact form
├── styles/        # Global styles and Tailwind configurations
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## 🎨 Theme Configuration

The project uses a custom Tailwind CSS configuration with:

### Colors
- Primary: Teal (#14b8a6)
- Secondary: Coral (#FF6B6B)
- Accent: Purple (#a259f7)
- Light/Dark mode variants for all colors

### Typography
- Primary Font: Inter (sans-serif)
- Code Font: JetBrains Mono (monospace)

### Animations
- Gradient animations
- Floating animations
- Pulse effects
- Slow spin animations
- Slide up/down transitions
- Fade in/out effects
- Scale animations
- 3D transform effects

### Custom Effects
- Neon glow shadows
- 3D perspective transforms
- Gradient text effects
- Interactive hover states

## 🧩 Reusable Components

### AnimatedButton
- Multiple variants (primary, secondary, outline, text)
- Different sizes (small, medium, large)
- Icon support (left/right positioning)
- Hover and tap animations
- Disabled state handling
- Customizable through props

### AnimatedText
- Text animation effects
- Typing animations
- Fade-in effects
- Customizable timing

### ProgressBar
- Animated progress tracking
- Customizable colors
- Smooth transitions
- Responsive design

### ParticleBackground
- Interactive particle effects
- Customizable particle properties
- Performance optimized
- Responsive to user interaction

### Cursor
- Custom cursor design
- Smooth movement
- Interactive states
- Mobile detection

## 📑 Section Features

### Hero Section
- 3D animated profile card
- Particle background effects
- Social media links
- Animated gradient text
- Smooth scroll navigation
- Responsive design

### Projects Section
- 3D project cards with hover effects
- Image hover animations
- Technology tags
- Live demo and repository links
- Glass morphism effects
- Staggered animations

### Skills Section
- Progress bar visualization
- Category grouping
- Animated skill cards
- Interactive hover states
- Responsive grid layout

### Experience Section
- Interactive timeline
- Company logos
- Role descriptions
- Date ranges
- Achievement highlights
- Smooth animations

### Contact Section
- EmailJS integration
- Form validation
- Success/error states
- Social media links
- Location information
- Animated form elements

### Articles Section
- Blog post cards
- Category filtering
- Reading time estimates
- Publication dates
- Preview images
- External links

### Coding Profiles Section
- Platform statistics
- Achievement badges
- Activity graphs
- Profile links
- Contribution metrics
- Real-time updates

## 🎭 Animation System

### Custom Hooks

#### useScrollAnimation
- Scroll-triggered animations
- Multiple animation variants:
  - Fade in up
  - Fade in
  - Scale in
  - Slide in left
  - Slide in right
- Configurable threshold
- Trigger once option
- Custom delay support
- Smooth easing functions

### Animation Variants
- Fade In Up: Elements fade in while moving up
- Fade In: Simple opacity transition
- Scale In: Elements scale up while fading in
- Slide In Left: Elements slide in from the left
- Slide In Right: Elements slide in from the right

### Animation Properties
- Duration: 0.6s for smooth transitions
- Easing: Custom cubic-bezier curve for natural movement
- Delay: Configurable per element
- Threshold: Customizable viewport trigger point
- Trigger Once: Option to animate only on first view

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

1. Update personal information in the respective section components
2. Modify the 3D models in the components directory
3. Customize colors and styles in the Tailwind configuration
4. Update particle effects in the TSParticles configuration
5. Adjust the custom cursor behavior in `Cursor.tsx`
6. Modify section transitions in `App.tsx`
7. Update social media links in `HeroSection.tsx`
8. Customize the particle background in `ParticleBackground.tsx`
9. Modify the contact form configuration in `ContactSection.tsx`
10. Adjust animation timings in `tailwind.config.js`
11. Customize color scheme in `tailwind.config.js`
12. Modify typography settings in `tailwind.config.js`
13. Customize button variants in `AnimatedButton.tsx`
14. Adjust text animations in `AnimatedText.tsx`
15. Modify progress bar styles in `ProgressBar.tsx`
16. Update project cards in `ProjectsSection.tsx`
17. Customize timeline in `ExperienceSection.tsx`
18. Modify skills visualization in `SkillsSection.tsx`
19. Adjust scroll animation parameters in `useScrollAnimation.tsx`
20. Customize animation variants in `useScrollAnimation.tsx`

## 📝 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Barathraj S

## 🙏 Acknowledgments

- Three.js for 3D graphics
- Framer Motion for animations
- TSParticles for particle effects
- EmailJS for contact form functionality
- React Three Fiber for 3D React components
- Tailwind CSS for styling
- React Intersection Observer for scroll animations
- React Typed for text animations
- Lucide React for beautiful icons
- Inter & JetBrains Mono for typography 
=======
# barathraj_portfolio
>>>>>>> ba6466e0434ba13eb6fc921e13a38010d4634ac9
