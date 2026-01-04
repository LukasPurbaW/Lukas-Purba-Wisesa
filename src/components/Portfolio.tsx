import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { PortfolioCard, Project } from './PortfolioCard';

/**
 * Portfolio Component
 * Unified skills showcase with filterable projects
 * Categorized by Web, SaaS, and AI/ML
 */
export function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web' | 'SaaS' | 'AI/ML'>('All');

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Portfolio projects data
  const projects: Project[] = [
    {
      title: 'Namae.dev',
      category: 'SaaS',
      description: 'A complete SaaS solution for company name brainstorming, validation, and domain acquisition.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS','Node.js'],
      image: './media/namae.png',
      liveLink: 'https://namae.dev/',
      githubLink: 'https://github.com/uetchy/namae'
    },
    {
      title: 'ai-text-snapper.vercel.app',
      category: 'SaaS',
      description: 'Text snapping automation to create short video containing text snippets from your chosen words',
      techStack: ['Node.js', 'React', 'Python', 'WebSockets', 'Docker'],
      image: './media/ai-text-snapper.png',
      liveLink: 'https://ai-text-snapper.vercel.app/',
      githubLink: 'https://github.com/LukasPurbaW/text_snapper'
    },
    {
      title: 'music.holodex.net',
      category: 'SaaS',
      description: 'Music player and recommendation system for Hololive fanbase to discover and enjoy music from their favorite VTubers.',
      techStack: ['Node.js', 'React', 'Python', 'WebSockets', 'Docker'],
      image: './media/musicdex.png',
      liveLink: 'https://music.holodex.net/org/Hololive',
      githubLink: 'https://github.com/HolodexNet/Musicdex'
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters: Array<'All' | 'Web' | 'SaaS' | 'AI/ML'> = ['All', 'Web', 'SaaS', 'AI/ML'];

  return (
    <section id="portfolio" className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-white">What I Build</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every project is an opportunity to solve real problems. Here's a selection of work that 
            demonstrates how web development, SaaS architecture, and machine learning come together 
            to create meaningful impact.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}