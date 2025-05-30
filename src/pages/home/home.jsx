import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from './partials/HeroSection';
import AboutSection from './partials/AboutSection';
import ResumeSection from './partials/ResumeSection';
import ProjectsSection from './partials/ProjectsSection';
import ContactSection from './partials/ContactSection';
import { initMouseTracker, cleanupMouseTracker } from '../../utils/mouseTracker';

function HomePage() {
  useEffect(() => {
    // Initialize beautiful cursor-following background effects
    const cleanup = initMouseTracker();

    // Cleanup on unmount
    return () => {
      cleanup();
      cleanupMouseTracker();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
