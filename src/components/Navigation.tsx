import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Biprajit12', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/biprajitsuklabaidya/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/___b.i.p.r.o.c.k___/profilecard/?igsh=MXc0N2hqZXNoZTB4Yg==', label: 'Instagram' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-glass backdrop-blur-glass border-b border-glass shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-primary text-white px-4 py-2 rounded z-50">Skip to main content</a>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2" aria-label="Site logo and name">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center animate-glow">
              <span className="text-white font-bold text-lg">BS</span>
            </div>
            <span className="text-xl font-bold text-foreground">Biprajit Suklabaidya</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                aria-label={item.label}
                aria-current={window.location.hash === item.href ? 'page' : undefined}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.filter(link => link.label !== 'Email').map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 rounded-full bg-glass border-glass backdrop-blur-glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={label}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              size="icon"
              className="p-2 rounded-full bg-glass border-glass backdrop-blur-glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 ml-4"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-glass backdrop-blur-glass border-b border-glass shadow-elegant animate-fade-in">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center space-x-4 pt-4 border-t border-glass">
                {socialLinks.filter(link => link.label !== 'Email').map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-2 rounded-full bg-glass border-glass backdrop-blur-glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={label}
                    title={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  size="icon"
                  className="p-2 rounded-full bg-glass border-glass backdrop-blur-glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  size="sm"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 ml-auto"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;