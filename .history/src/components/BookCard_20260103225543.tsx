import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  summary: string;
  fullReview: string;
  keyTakeaways: string[];
}

/**
 * BookCard Component
 * Individual book card with expand/collapse functionality
 * Features smooth animations and hover effects
 */
export function BookCard({ title, author, coverImage, summary, fullReview, keyTakeaways }: BookCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-md hover:border-cyan-500/40"
    >
      <div className="p-6">
        {/* Book Header with Cover and Info */}
        <div className="flex gap-6 items-start">
          {/* Book Cover */}
          <div className="flex-shrink-0 w-24 h-32 rounded-lg overflow-hidden shadow-lg border border-slate-700">
            <img 
              src={coverImage} 
              alt={`${title} cover`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Book Info */}
          <div className="flex-1">
            <h3 className="mb-2 text-white">{title}</h3>
            <p className="text-slate-400 mb-4">by {author}</p>
            <p className="text-slate-300 leading-relaxed line-clamp-3">
              {summary}
            </p>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 border-t border-slate-700 space-y-6">
                {/* Full Review */}
                <div>
                  <h4 className="mb-3 text-white">Full Review</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {fullReview}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div>
                  <h4 className="mb-3 text-white">Key Takeaways</h4>
                  <ul className="space-y-2">
                    {keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
                        <span className="text-slate-300 leading-relaxed">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-6 bg-slate-700/50 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-600"
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}