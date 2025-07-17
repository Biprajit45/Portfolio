import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  const [showSocialLinks, setShowSocialLinks] = useState(true);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const descriptions = [
    {
      title: "Software Developer",
      description: "I craft exceptional digital experiences through innovative design and cutting-edge development"
    },
    {
      title: "AI Enthusiast", 
      description: "Leveraging artificial intelligence to build smarter, more intuitive applications"
    },
    {
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, efficient solutions"
    },
    {
      title: "Code Debugger",
      description: "Hunting down bugs and optimizing performance with precision"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescriptionIndex((prev) => (prev + 1) % descriptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [descriptions.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setShowSocialLinks(rect.bottom > 80); // Hide if scrolled past 80px from top
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero" role="main" aria-label="Hero section">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 2 === 0 ? 'hsl(258 100% 70%)' : 'hsl(193 100% 60%)',
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Glow */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-30 pointer-events-none blur-3xl bg-primary"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease-out',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-up">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight" aria-live="polite">
              {descriptions[currentDescriptionIndex].title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto transition-all duration-500 ease-in-out" aria-live="polite">
              {descriptions[currentDescriptionIndex].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              aria-label="View My Work"
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-glass bg-glass backdrop-blur-glass hover:bg-primary/10"
              aria-label="Get In Touch"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links - only show if showSocialLinks is true */}
          <div
            className={`flex justify-center space-x-6 pt-8 transition-opacity duration-500 ${showSocialLinks ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Social Links"
          >
            {[
              { icon: Github, href: 'https://github.com/Biprajit12', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/biprajitsuklabaidya/', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://www.instagram.com/___b.i.p.r.o.c.k___/profilecard/?igsh=MXc0N2hqZXNoZTB4Yg==', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-glass border-glass backdrop-blur-glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-accent focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={label}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={showSocialLinks ? 0 : -1}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="p-3 rounded-full bg-glass border-glass backdrop-blur-glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-accent focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Email"
              title="Email"
              tabIndex={showSocialLinks ? 0 : -1}
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        aria-label="Scroll to About section"
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-primary group"
        tabIndex={0}
      >
        <div className="w-6 h-10 border-2 border-glass rounded-full flex justify-center items-start group-hover:bg-primary/10 transition-colors">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-slow" />
        </div>
      </button>
      {/* Add skip-to-content anchor target */}
      <div id="main-content" tabIndex={-1} />
    </section>
  );
};

export default Hero;