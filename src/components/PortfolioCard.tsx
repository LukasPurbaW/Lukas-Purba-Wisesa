import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  title: string;
  category: 'Web' | 'SaaS' | 'AI/ML';
  description: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}

interface PortfolioCardProps {
  project: Project;
  index: number;
}

/**
 * PortfolioCard Component
 * Individual project card with problem → solution → impact narrative
 * Emphasizes outcomes and thinking over just tools
 */
export function PortfolioCard({ project, index }: PortfolioCardProps) {
  // Category color mapping
  const categoryColors = {
    'Web': 'bg-blue-100 text-blue-800',
    'SaaS': 'bg-green-100 text-green-800',
    'AI/ML': 'bg-purple-100 text-purple-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-slate-900/40 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur-md hover:border-cyan-500/40"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-slate-800/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category badge overlay */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm backdrop-blur-md ${categoryColors[project.category]}`}>
            {project.category}
          </span>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-white">{project.title}</h3>

        {/* Description */}
        <p className="text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="pt-4">
          <h4 className="mb-3 text-white">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-md border border-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.liveLink || project.githubLink) && (
          <div className="flex gap-3 pt-4 border-t border-slate-700">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-900 rounded-lg hover:bg-cyan-400 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors border border-slate-600"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}