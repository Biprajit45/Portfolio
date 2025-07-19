import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import './masonry.css';

const Projects = () => {
  const projects = [
    {
      title: 'OmniBOTix',
      description: 'A full-stack e-commerce solutionfor all your AI needs.Browse through our wide range of AI tools and services.',
      image: '/projects/omnibotix.png',
      tags: ['React', 'Typescript'],
      github: 'https://github.com/Biprajit45/OmniBOTix',
      live: 'https://omni-bo-tix-7uzg.vercel.app/',
      featured: true,
      inProgress: true,
    },
    {
      title: 'vanta.AI',
      description: 'Join the digital revolution. Create your vanta clone and step into the future of artificial consciousness.Your digital immortality awaits.',
      image: '/projects/vanta.png',
      tags: ['Python', 'Typescript', 'React', 'Django' , 'PostgreSQL'],
      github: 'https://github.com/Biprajit45/vanta.ai',
      live: 'https://vanta-ai-iu1g.vercel.app/',
      featured: true,
      inProgress: true,
    },
    {
      title: 'Social Media App',
      description: 'Real-time social platform with messaging, posts, and live notifications using WebSocket technology.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Socket.io', 'MongoDB', 'Redis'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Task Management Tool',
      description: 'Collaborative project management platform with team coordination, time tracking, and reporting features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tags: ['Vue.js', 'Express', 'MySQL', 'AWS'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React, Tailwind CSS, and Framer Motion to showcase my work and skills.',
      image: '/projects/portfolio.png',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Biprajit45/Portfolio',
      live: 'https://portfolio-gnp8.vercel.app/',
      featured: false,
      inProgress: true,
    },
    {
      title: 'Chatbot Assistant',
      description: 'Conversational AI chatbot for customer support, built with Python and integrated with Slack.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop',
      tags: ['Python', 'Slack API', 'AI'],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  // Modal state
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <Badge variant="secondary" className="bg-glass border-glass backdrop-blur-glass">
            <Sparkles className="w-4 h-4 mr-2" />
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="w-full">
          <div
            className="grid gap-8"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              justifyItems: 'center',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {projects.map((project, index) => (
              <Card
                key={project.title}
                tabIndex={0}
                role="button"
                aria-label={`Open details for ${project.title}`}
                onClick={() => setModalProject(project)}
                onKeyDown={e => { if (e.key === 'Enter') setModalProject(project); }}
                className="group bg-glass border-glass backdrop-blur-glass overflow-hidden hover:shadow-elegant hover:border-gradient transition-all duration-500 will-change-transform cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s`, width: '100%', maxWidth: 420 }}
              >
                <div className="relative overflow-hidden rounded-lg bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-contain p-2"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors relative after:block after:absolute after:left-0 after:-bottom-1 after:w-0 group-hover:after:w-full after:h-1 after:bg-gradient-to-r after:from-primary after:to-fuchsia-500 after:transition-all after:duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    )}
                    {project.inProgress && (
                      <Badge className="bg-green-100 text-green-700 border-green-300 flex items-center gap-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-blink"></span>
                        In Progress
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-glass border-glass backdrop-blur-glass text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Quirky line and GitHub button */}
          <div className="flex flex-col items-center mt-12">
            <span className="mb-4 text-lg text-muted-foreground italic">Curious for more? My code adventures continue on GitHub!</span>
            <a
              href="https://github.com/Biprajit12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
              aria-label="See more projects on GitHub"
            >
              <Github className="w-5 h-5" />
              See more on GitHub
            </a>
          </div>
        </div>

        {/* Modal Popup */}
        {modalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-up"
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
            onClick={() => setModalProject(null)}
          >
            <div
              className="relative bg-glass border-glass backdrop-blur-glass rounded-xl shadow-2xl max-w-lg w-full mx-4 animate-fade-up"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-primary/80 text-primary hover:text-white transition-colors"
                onClick={() => setModalProject(null)}
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-56 object-cover rounded-t-xl mb-4"
              />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">
                    {modalProject.title}
                  </h3>
                  <div className="flex gap-2">
                    {modalProject.featured && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    )}
                    {modalProject.inProgress && (
                      <Badge className="bg-green-100 text-green-700 border-green-300 flex items-center gap-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-blink"></span>
                        In Progress
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-base">{modalProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {modalProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-glass border-glass backdrop-blur-glass text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3 pt-2">
                  <Button size="sm" variant="outline" className="border-glass bg-glass backdrop-blur-glass hover:bg-primary/20 animate-icon" asChild>
                    <a href={modalProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow animate-icon" asChild>
                    <a href={modalProject.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
