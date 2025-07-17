import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, TrendingUp, Award } from 'lucide-react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      id: 0,
      role: "Software Developer",
      company: "UKG (Ultimate Kronos Group)",
      location: "Noida, India",
      duration: "Sept 2024 - Present",
      description: "Working on enterprise-grade solutions with a focus on backend and automation. Collaborating with cross-functional teams to deliver robust and scalable products.",
      achievements: [
        "Built scalable microservices architecture",
        "Reduced loading times by 60%",
        "Led team of 5 developers"
      ],
      techStack: "Java, JavaScript, JSP/JSF, Selenium, Mockito",
      icon: TrendingUp
    },
    {
      id: 1,
      role: "Software Developer Intern (Backend)",
      company: "R'Dash",
      location: "Gurgaon, India",
      duration: "Jan 2024 - July 2024",
      description: "Developed and enhanced backend features for invoicing and payments using Django and DRF. Optimized API performance and collaborated with cross-functional teams for high-quality delivery.",
      achievements: [
        "Reduced query counts from 200+ to <10 using Grafana and DJDT",
        "Designed and deployed robust APIs using DRF",
        "Collaborated with cross-functional teams for high-quality delivery"
      ],
      techStack: "Python, Django, Django Rest Framework, Grafana",
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <Badge variant="secondary" className="bg-glass border-glass backdrop-blur-glass">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional growth and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Path */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 animate-pulse"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isActive = activeExperience === index;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={exp.id}
                    className={`relative flex items-center animate-fade-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onMouseEnter={() => setActiveExperience(index)}
                  >
                    {/* Timeline Node */}
                    <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                      isActive 
                        ? 'bg-primary border-primary shadow-glow scale-125' 
                        : 'bg-background border-primary/50 hover:border-primary hover:scale-110'
                    }`}>
                      <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
                        isActive ? 'animate-ping bg-primary/30' : ''
                      }`}></div>
                    </div>

                    {/* Experience Card */}
                    <div className={`w-full md:w-6/12 ml-20 md:ml-0 ${
                      isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}>
                      <Card className={`bg-glass border-glass backdrop-blur-glass transition-all duration-500 hover:shadow-elegant ${
                        isActive ? 'scale-105 border-primary/50' : 'hover:scale-102'
                      }`}>
                        <CardContent className="p-6 space-y-4">
                          {/* Header */}
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                              <p className="text-primary font-semibold">{exp.company}</p>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className={`p-3 rounded-lg bg-primary/10 transition-all duration-300 ${
                              isActive ? 'animate-pulse' : ''
                            }`}>
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Tech Stack */}
                          {exp.techStack && (
                            <div className="pt-2">
                              <span className="text-xs font-semibold text-primary">Tech Stack:</span>
                              <span className="ml-2 text-xs text-muted-foreground">{exp.techStack}</span>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
              {/* Timeline End Point: College Graduate */}
              <div className="relative flex items-center justify-end animate-fade-in" style={{ animationDelay: '0s' }}>
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 w-8 h-8 rounded-full bg-primary/40 border-4 border-primary flex items-center justify-center shadow-glow">
                  <span className="text-lg text-primary font-bold">🎓</span>
                </div>
                <div className="w-full md:w-6/12 ml-20 md:ml-0 md:ml-auto md:pl-8">
                  <div className="text-sm text-muted-foreground text-center md:text-left">College Graduate, 2024</div>
                </div>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 bottom-0 w-4 h-4 bg-gradient-primary rounded-full animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;