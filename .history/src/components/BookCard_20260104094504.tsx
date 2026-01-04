import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  summary: string;
  fullReview: string;
  keyTakeaways: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

export function BookCard({
  title,
  author,
  coverImage,
  summary,
  fullReview,
  keyTakeaways,
  isExpanded,
  onToggle
}: BookCardProps) {
  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col bg-slate-900/40 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 backdrop-blur-md hover:border-cyan-500/40"
    >
      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex gap-5 mb-4">
          <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden border border-slate-700">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-white mb-1">{title}</h3>
            <p className="text-slate-400 text-sm mb-3">by {author}</p>
            <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
              {summary}
            </p>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              layout="position"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-slate-700 space-y-5">
                <div>
                  <h4 className="text-white mb-2">Full Review</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {fullReview}
                  </p>
                </div>

                <div>
                  <h4 className="text-white mb-2">Key Takeaways</h4>
                  <ul className="space-y-2">
                    {keyTakeaways.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2" />
                        <span className="text-slate-300 text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <button
          onClick={onToggle}
          className="mt-auto pt-6 w-full flex items-center justify-center gap-2 py-3 bg-slate-700/50 rounded-lg border border-slate-600 text-white hover:bg-slate-700 transition"
        >
          <span>{isExpanded ? "Show Less" : "Read More"}</span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} />
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
}
