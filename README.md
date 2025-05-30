# Ayman El Bachiri - Portfolio Website

A modern, responsive portfolio website for Ayman El Bachiri, a full-stack web developer and entrepreneur, built with React, Vite, Tailwind CSS, and Shadcn UI.

##  Features

- **Modern Design**: Dark theme with green accent colors
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with mobile menu
- **Contact Form**: Functional contact form with EmailJS integration
- **Framer Motion Animations**: Beautiful entrance animations, hover effects, and floating elements
- **Animated Elements**: Typing animation, fade-in effects, and interactive scroll indicators
- **Timeline Component**: Interactive work experience timeline
- **Project Showcase**: Grid layout with staggered animations for project cards
- **Social Integration**: Social media links and contact information
- **Performance Optimized**: Built with Vite for fast development and optimized builds

##  Tech Stack

- **Frontend**: React 19, Vite 6
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Email Service**: EmailJS for contact form
- **Styling**: Tailwind CSS 3
- **Icons**: React Icons, Lucide React
- **Routing**: React Router DOM
- **Fonts**: Custom Dizhitl font family
- **Development**: ESLint for code quality
- **Utilities**: Class Variance Authority, clsx, tailwind-merge

##  Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

##  Contact Form

The contact form is powered by EmailJS and is already configured and ready to use. It includes:

- Auto-reply functionality for users
- Admin notifications for new messages
- Form validation and error handling
- Beautiful animations and responsive design

##  Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

##  Project Structure

```
src/
├── components/          # Reusable components
│   ├── ContactForm.jsx  # EmailJS contact form
│   ├── Footer.jsx
│   ├── SocialLinks.jsx
│   └── ui/             # Shadcn UI components
│       ├── badge.jsx
│       ├── button.jsx
│       └── card.jsx
├── layouts/            # Layout components
│   └── Header.jsx
├── pages/              # Page components
│   └── home/
│       ├── home.jsx
│       └── partials/   # Page sections
│           ├── AboutSection.jsx
│           ├── ContactSection.jsx
│           ├── HeroSection.jsx
│           ├── ProjectsSection.jsx
│           └── ResumeSection.jsx
├── assets/             # Static assets
│   └── fonts/          # Custom fonts (4 font weights)
├── lib/                # Utility functions
│   └── utils.js        # Shadcn UI utilities
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

##  Customization

### Colors
The website uses a green color scheme. You can modify the colors in:
- `src/index.css` for global styles
- Tailwind classes throughout the components

### Content
Update the content in the respective section components:
- **Hero**: `src/pages/home/partials/HeroSection.jsx`
- **About**: `src/pages/home/partials/AboutSection.jsx`
- **Resume**: `src/pages/home/partials/ResumeSection.jsx`
- **Projects**: `src/pages/home/partials/ProjectsSection.jsx`
- **Contact**: `src/pages/home/partials/ContactSection.jsx`

### Social Links
Update social media links in `src/components/SocialLinks.jsx`

##  Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Responsive navigation with hamburger menu
- Flexible grid layouts
- Optimized typography for different screen sizes

##  Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project uses ESLint for maintaining code quality. Run `npm run lint` to check for issues.

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Credits

- Built with modern web technologies and best practices
- Designed and developed by Ayman El Bachiri
