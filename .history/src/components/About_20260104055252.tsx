import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code, Zap, Brain } from 'lucide-react';

/**
 * About Component
 * Professional bio explaining the connection between Web, SaaS, and AI/ML skills
 * Emphasizes unified problem-solving mindset
 */
export function About() {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const strengths = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Creating intuitive, performant user experiences that people love to use'
    },
    {
      icon: Zap,
      title: 'SaaS Architecture',
      description: 'Building scalable systems that grow with business needs and user demands'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Deploying intelligent solutions that learn, adapt, and provide real value'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjcyMDYzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Alex Morgan - Professional Portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl -z-10 blur-xl"></div>
          </motion.div>

          {/* Bio and Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3 space-y-6"
          >
            <h3 className="text-white">About Me</h3>
            
            <p className="text-slate-300 leading-relaxed">
              <ul className="space-y-6">
                <li>
                  <h4 className="text-white">Credentials</h4>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Certified Investment Consultant</li>
                    <li>International Data Science Competition Winner</li>
                    <li>Master’s Degree in AI & Machine Learning Development</li>
                  </ul>
                </li>

                <li>
                  <span className="italic text-foreground">Awards & Recognition</span>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>Huawei Future Star — 3 Years Consecutive</li>
                    <li>Huawei Asia Pacific Best Data Analyst — 2 Years Consecutive</li>
                    <li>2025 World’s Most Impactful Telco Business Automation - Project Lead</li>
                  </ul>
                </li>

                <li>
                  <span className="italic text-foreground">Technical Experience</span>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    <li>1,000+ hours of hands-on coding experience</li>
                    <li>100+ automation tools built with Python</li>
                    <li>10+ websites developed using React, WordPress, and Tailwind CSS</li>
                  </ul>
                </li>
              </ul>


            </p>

            <p className="text-slate-300 leading-relaxed">
              Experienced in creating Digitalization solutions that drive efficiency and innovation.
            </p>
          </motion.div>
        </div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-center mb-8 text-white">Core Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 text-white rounded-full mb-4 shadow-lg shadow-cyan-500/50">
                  <strength.icon size={28} />
                </div>
                <h4 className="mb-3 text-white">{strength.title}</h4>
                <p className="text-slate-300 leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}