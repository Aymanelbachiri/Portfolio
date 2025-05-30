const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src="/logo.svg"
              alt="Ayman El Bachiri Logo"
              className="w-6 h-6"
            />
            <span className="text-foreground font-semibold">Ayman El Bachiri</span>
          </div>

          {/* Tagline */}
          <div className="text-center mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              Crafting digital experiences that make an impact
            </p>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © 2018-{new Date().getFullYear()} | <span className="text-primary">Ayman El Bachiri</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
