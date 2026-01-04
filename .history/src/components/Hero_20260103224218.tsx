import { motion } from 'motion/react';

/**
 * Hero Component
 * Full-width hero section with name, tagline, and intro
 * Features call-to-action buttons for portfolio and book summaries
 */
export function Hero() {
  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/20">
      <div className="futuristic-bg">
      <div className="max-w-5xl mx-auto text-center">
        {/* Name - Large animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          Lukas Purba Wisesa
        </motion.h1>

        {/* Professional Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-muted-foreground">
            I Bring Digitalization to Every Businesses <br />
            - Web, SaaS, and AI/ML Solutions -
          </h2>
        </motion.div>

        {/* Intro Text - Unified narrative */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4"
        >
          I help businesses transform through digital solutions that bridge strategy, engineering, and intelligence.
          From building intuitive web platforms to scaling SaaS systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Real value lies in understanding user needs, 
          building systems that scale, and creating intelligent solutions that adapt and learn.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-3 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-all hover:scale-105"
          >
            View Portfolio
          </button>
          <button
            onClick={() => scrollToSection('books')}
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-all hover:scale-105 border border-border"
          >
            Read Book Summaries
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-2 bg-muted-foreground/30 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
