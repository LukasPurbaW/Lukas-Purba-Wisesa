import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

export function BookSummaries() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const el = document.getElementById("books");
    if (el) observer.observe(el);

    return () => el && observer.unobserve(el);
  }, []);

  const books = [/* SAME DATA YOU ALREADY HAVE */];

  return (
    <section id="books" className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Book Summaries</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
          <p className="text-slate-300 max-w-2xl mx-auto">
            Learn from people who already walked the path. Compounding knowledge
            compounds results.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          {books.map((book, index) => (
            <BookCard
              key={index}
              {...book}
              isExpanded={expandedIndex === index}
              onToggle={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
