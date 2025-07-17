import { useState, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import CountUp from 'react-countup';
import useInView from '@/hooks/use-in-view';

const skills = [
  { name: 'React/Next.js', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },

  { name: 'Java', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'Rust', category: 'Language' },
  { name: 'Python', category: 'Language' },

  { name: 'Django', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'REST', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },

  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },

  { name: 'GCP', category: 'Cloud' },

  { name: 'Jest', category: 'Testing' },
  { name: 'Mockito', category: 'Testing' },
  { name: 'Selenium', category: 'Testing' },
  { name: 'RestAssured', category: 'Testing' },

  // Developer Tools
  { name: 'VS Code', category: 'Developer Tools' },
  { name: 'Eclipse', category: 'Developer Tools' },
  { name: 'IntelliJ', category: 'Developer Tools' },
  { name: 'PyCharm', category: 'Developer Tools' },
  { name: 'Git', category: 'Developer Tools' },
  { name: 'Postman', category: 'Developer Tools' },
  { name: 'Jupyter Notebook', category: 'Developer Tools' },
  { name: 'Grafana', category: 'Developer Tools' },

  // AI and Automation Tools
  { name: 'Cursor', category: 'AI and Automation Tools' },
  { name: 'Lovable', category: 'AI and Automation Tools' },
  { name: 'n8n', category: 'AI and Automation Tools' },
  { name: 'Copilot', category: 'AI and Automation Tools' },
  { name: 'ChatGPT', category: 'AI and Automation Tools' },
  { name: 'Gemini', category: 'AI and Automation Tools' },
  { name: 'Windsurf', category: 'AI and Automation Tools' },
  { name: 'Warp', category: 'AI and Automation Tools' },

  // AI
  { name: 'LangChain', category: 'AI' },
  { name: 'PyTorch', category: 'AI' },
  { name: 'TensorFlow', category: 'AI' },
  { name: 'RAG', category: 'AI' },
  { name: 'Generative AI', category: 'AI' },
];

// Custom order for categories
const customCategoryOrder = [
  'AI',
  'AI and Automation Tools',
  'Language',
];
const otherCategories = Array.from(new Set(skills.map(s => s.category))).filter(
  c => !customCategoryOrder.includes(c)
);
const categories = ['All', ...customCategoryOrder, ...otherCategories];

// Add icon imports (using Heroicons as example, or inline SVGs)
const categoryIcons = {
  'AI': (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9 9h6v6H9z" /></svg>
  ),
  'AI and Automation Tools': (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 12h8" /></svg>
  ),
  'Language': (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" /><circle cx="12" cy="7" r="4" /></svg>
  ),
  'Frontend': (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18" /></svg>
  ),
  'Backend': (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M8 4v16" /></svg>
  ),
  'Database': (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="8" ry="3" /><path d="M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7" /></svg>
  ),
  'Cloud': (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16a4 4 0 0 0 0-8 5.978 5.978 0 0 0-5-2.9A6 6 0 1 0 7 16h10z" /></svg>
  ),
  'Testing': (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>
  ),
  'Developer Tools': (
    <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" /><circle cx="12" cy="7" r="4" /></svg>
  ),
};

// Color map for categories
const categoryColors = {
  'All': 'bg-gradient-to-r from-gray-400 to-gray-600 text-white',
  'AI': 'bg-gradient-to-r from-blue-400 to-purple-500 text-white',
  'AI and Automation Tools': 'bg-gradient-to-r from-pink-400 to-yellow-400 text-white',
  'Language': 'bg-gradient-to-r from-green-400 to-blue-400 text-white',
  'Frontend': 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white',
  'Backend': 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
  'Database': 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white',
  'Cloud': 'bg-gradient-to-r from-indigo-400 to-blue-700 text-white',
  'Testing': 'bg-gradient-to-r from-pink-500 to-red-400 text-white',
  'Developer Tools': 'bg-gradient-to-r from-gray-500 to-gray-800 text-white',
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState('All');
  const inView = useInView(sectionRef);

  const filteredSkills = selected === 'All' ? skills : skills.filter(s => s.category === selected);

  // Light gradient for all category buttons
  const filterBarClass = 'bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white';

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <Badge variant="secondary" className="bg-glass border-glass backdrop-blur-glass">
            Skills & Technologies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            What I work with
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm constantly learning and evolving with the latest technologies to deliver cutting-edge solutions
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 focus:outline-none flex items-center gap-1 shadow-md ${filterBarClass} ${selected === cat ? 'ring-2 ring-white border-white scale-105' : 'opacity-90 hover:opacity-100 hover:scale-105'}`}
            >
              {categoryIcons[cat]}
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filteredSkills.map((skill) => (
            <span
              key={skill.name}
              tabIndex={0}
              className={`px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 hover:scale-105 hover:shadow-lg relative overflow-hidden ${categoryColors[skill.category] || 'bg-glass text-foreground'}`}
              onClick={e => {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = e.nativeEvent.offsetX + 'px';
                ripple.style.top = e.nativeEvent.offsetY + 'px';
                e.currentTarget.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up delay-500">
          {[
            { label: 'DSA Problem solved', value: 1500 },
            { label: 'Technologies used', value: 20 },
            { label: 'AI agents built', value: 5 },
            { label: 'Projects completed', value: 10 },
          ].map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-lg bg-glass border-glass backdrop-blur-glass hover:bg-primary/10 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                <CountUp
                  end={stat.value}
                  duration={1.5}
                  suffix={
                    stat.label === 'DSA Problem solved' ? '+' :
                    stat.label === 'Technologies used' ? '+' :
                    stat.label === 'AI agents built' ? '+' :
                    stat.label === 'Projects completed' ? '+' : ''
                  }
                  start={inView ? undefined : stat.value}
                  redraw={true}
                  enableScrollSpy={false}
                  preserveValue={true}
                />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        background-color: rgba(59,130,246,0.3);
        pointer-events: none;
        width: 100px;
        height: 100px;
        left: 50%;
        top: 50%;
        margin-left: -50px;
        margin-top: -50px;
        z-index: 1;
      }
      @keyframes ripple {
        to {
          transform: scale(2.5);
          opacity: 0;
        }
      }
      .skills-bg {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        z-index: 0;
        pointer-events: none;
        background: linear-gradient(120deg, rgba(59,130,246,0.08) 0%, rgba(236,72,153,0.08) 100%);
        animation: bgmove 8s linear infinite alternate;
      }
      @keyframes bgmove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      .skills-divider {
        display: block;
        width: 100%;
        height: 48px;
        margin-bottom: -24px;
        z-index: 2;
      }
    `}</style>
    <svg className="skills-divider" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#f3f4f6" d="M0,32L48,26.7C96,21,192,11,288,10.7C384,11,480,21,576,32C672,43,768,53,864,53.3C960,53,1056,43,1152,32C1248,21,1344,11,1392,5.3L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V32Z"></path></svg>
    <div className="skills-bg"></div>
    </section>
  );
};

export default Skills;