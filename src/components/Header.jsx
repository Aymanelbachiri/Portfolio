import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/70 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.svg"
              alt="Ayman El Bachiri Logo"
              className="w-8 h-8"
            />
            <span className="text-white font-semibold text-lg">Ayman El Bachiri</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-green-500 transition-colors font-mono"
            >
              .about()
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="text-gray-300 hover:text-green-500 transition-colors font-mono"
            >
              .resume()
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-green-500 transition-colors font-mono"
            >
              .projects()
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-green-500 transition-colors font-mono"
            >
              .contact()
            </button>
          </nav>

          {/* Contact Info & Social Links */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex">
              <SocialLinks />
            </div>
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-300 hover:text-green-500 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/80 backdrop-blur-md z-40">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-2xl text-gray-300 hover:text-green-500 transition-colors font-mono"
            >
              .about()
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="text-2xl text-gray-300 hover:text-green-500 transition-colors font-mono"
            >
              .resume()
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-2xl text-gray-300 hover:text-green-500 transition-colors font-mono"
            >
              .projects()
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-2xl text-gray-300 hover:text-green-500 transition-colors font-mono"
            >
              .contact()
            </button>

            <div className="pt-8">
              <SocialLinks />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
