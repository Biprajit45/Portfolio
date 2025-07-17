import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Coffee, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';

const funFacts = [
  "I can solve a Rubik's cube in under a minute!",
  "I once built a robot that makes coffee.",
  "My favorite code editor theme is Dracula.",
  "I have contributed to open source projects on 3 continents.",
  "I can type over 120 words per minute!"
];

const animatedTitles = [
  'Software Developer',
  'AI Enthusiast',
  'Tech Explorer',
];

const About = () => {
  const [randomFact, setRandomFact] = useState(() => funFacts[Math.floor(Math.random() * funFacts.length)]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [eggCracked, setEggCracked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % animatedTitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Remove localStorage logic for eggCracked
  }, [eggCracked]);

  const handleEggClick = () => {
    if (eggCracked) return;
    setEggCracked(true);
    setRandomFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1200);
  };

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable applications with modern technologies',
    },
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Experimenting with neural networks, LLMs, and smart algorithms',
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Automating workflows to save time and reduce errors',
    },
    {
      icon: Coffee,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-glass border-glass backdrop-blur-glass">
                About Me
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Engineering a little magic into software.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A software engineer with a curious mind and a year of hands-on experience turning ideas into working code.
                I’ve dabbled in AI, built full-stack projects, and debugged my way through more “why is this broken?” moments than I can count.
                I love collaborating with teams that turn chaos into creativity — and coffee into commits.
                Let’s build something smart, scalable, and maybe even a little bit magical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div 
                  key={title}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-glass border-glass backdrop-blur-glass hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="animate-fade-up delay-300">
            <Card className="bg-glass border-glass backdrop-blur-glass overflow-hidden hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 animate-glow">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-4xl font-bold text-foreground">BS</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Biprajit Suklabaidya</h3>
                    <p className="text-sm text-muted-foreground">B.Tech, Computer Science @ NIT Agartala, 2024</p>
                    <p className="text-primary font-medium min-h-[2.5rem] transition-all duration-500 ease-in-out">
                      <span className="inline-block animate-slide-in">{animatedTitles[currentTitleIndex]}</span>
                    </p>
                    <p className="text-muted-foreground">India, IN</p>
                    {/* Download Resume Button */}
                    <a
                      href="https://drive.google.com/your-resume-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors duration-300"
                    >
                      Download Resume
                    </a>
                  </div>

                  {/* Fun Fact / Easter Egg */}
                  <div className="pt-4 flex flex-col items-center min-h-[60px]">
                    {!eggCracked && (
                      <button
                        type="button"
                        aria-label="Reveal fun fact"
                        onClick={handleEggClick}
                        className="focus:outline-none relative"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <span
                          className={`inline-block transition-transform duration-700 ${showConfetti ? 'animate-egg-crack' : 'animate-egg-dance-heavy'}`}
                          style={{ fontSize: 48, zIndex: 2 }}
                        >
                          🥚
                        </span>
                        {showConfetti && (
                          <>
                            {Array.from({ length: 16 }).map((_, i) => (
                              <span
                                key={i}
                                className="absolute animate-confetti pointer-events-none"
                                style={{
                                  left: `${30 + 28 * Math.cos((i / 16) * 2 * Math.PI)}px`,
                                  top: `${30 + 28 * Math.sin((i / 16) * 2 * Math.PI)}px`,
                                  fontSize: 24 + Math.random() * 12,
                                  zIndex: 1,
                                }}
                              >
                                {['🎉', '✨', '🥳', '🎊'][i % 4]}
                              </span>
                            ))}
                          </>
                        )}
                      </button>
                    )}
                    {eggCracked && (
                      <div className="pt-4">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm animate-pulse">
                          🥚 Fun Fact: {randomFact}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">1+</div>
                        <div>Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;