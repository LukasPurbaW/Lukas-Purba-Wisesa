import { motion } from 'motion/react';

/**
 * AnimatedBackground Component
 * Futuristic background with animated circles and gradient effects
 * Creates depth and visual interest without compromising readability
 */
export function AnimatedBackground() {
  // Generate multiple animated circles with different properties
  const circles = [
    {
      size: 600,
      initialX: '10%',
      initialY: '20%',
      duration: 25,
      delay: 0,
      opacity: 0.15,
      color: 'from-blue-400/30 to-purple-600/30'
    },
    {
      size: 400,
      initialX: '70%',
      initialY: '60%',
      duration: 20,
      delay: 2,
      opacity: 0.1,
      color: 'from-cyan-400/20 to-blue-500/20'
    },
    {
      size: 500,
      initialX: '50%',
      initialY: '80%',
      duration: 30,
      delay: 5,
      opacity: 0.12,
      color: 'from-purple-400/25 to-pink-500/25'
    },
    {
      size: 350,
      initialX: '85%',
      initialY: '15%',
      duration: 22,
      delay: 3,
      opacity: 0.08,
      color: 'from-indigo-400/20 to-blue-600/20'
    },
    {
      size: 450,
      initialX: '30%',
      initialY: '50%',
      duration: 28,
      delay: 7,
      opacity: 0.1,
      color: 'from-teal-400/15 to-cyan-500/15'
    }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Grid overlay for futuristic effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated circles */}
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${circle.color} blur-xl`}
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.initialX,
            top: circle.initialY,
            opacity: circle.opacity
          }}
          animate={{
            x: [0, 50, -50, 50, 0],
            y: [0, -50, 50, -50, 0],
            scale: [1, 1.1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: circle.delay
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -60],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950/80"></div>
    </div>
  );
}