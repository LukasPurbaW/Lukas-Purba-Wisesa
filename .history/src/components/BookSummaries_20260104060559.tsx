import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { BookCard } from './BookCard';

/**
 * BookSummaries Component
 * Card-based layout for book summaries
 * Features scroll-triggered animations
 */
export function BookSummaries() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('books');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Mock data for book summaries
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      coverImage: "https://images.unsplash.com/photo-1517090510947-30c819a56e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFyayUyMGJvb2t8ZW58MXx8fHwxNzY3NDU1NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      summary: "A groundbreaking exploration of how tiny changes can lead to remarkable results. Clear presents a proven framework for improving every day through the compound effect of marginal gains.",
      fullReview: "James Clear masterfully breaks down the science of habit formation into actionable steps. The book's core premise—that 1% improvements compound over time—is both simple and profound. What sets this apart is Clear's ability to make behavioral psychology accessible and immediately applicable. The four laws of behavior change provide a practical framework that anyone can implement, regardless of their goals. This isn't just theory; it's a systematic approach to personal transformation backed by research and real-world examples.",
      keyTakeaways: [
        "Focus on systems rather than goals to create lasting change",
        "Make habits obvious, attractive, easy, and satisfying",
        "The compound effect: small improvements add up to remarkable results over time",
        "Environment design is crucial—make good habits inevitable and bad habits impossible"
      ]
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      coverImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJvb2t8ZW58MXx8fHwxNzY3MTM2Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      summary: "Nobel laureate Daniel Kahneman takes us on a tour of the mind, exposing the extraordinary capabilities and the faults and biases of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behavior.",
      fullReview: "This seminal work fundamentally changed how we understand decision-making and cognitive processes. Kahneman introduces the concept of two systems: System 1 (fast, intuitive, emotional) and System 2 (slow, deliberate, logical). Through decades of research, he reveals how our minds are wired for efficiency at the cost of accuracy. The book is dense with insights about cognitive biases, heuristics, and the limitations of human judgment. While challenging to read, it's essential for anyone who wants to make better decisions and understand human behavior.",
      keyTakeaways: [
        "We have two thinking systems: fast intuitive thinking and slow rational thinking",
        "Cognitive biases systematically affect our judgment and decision-making",
        "Overconfidence in our intuitions often leads to predictable errors",
        "Understanding our mental limitations is the first step to making better decisions"
      ]
    },
    {
      title: "The Obstacle Is the Way",
      author: "Ryan Holiday",
      coverImage: "https://images.unsplash.com/photo-1643050079091-1d4a51e07ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsb3NvcGh5JTIwYm9va3xlbnwxfHx8fDE3NjcyNDQ1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      summary: "Drawing from ancient Stoic philosophy, Holiday shows how some of history's greatest figures turned adversity into advantage. The timeless art of turning trials into triumph.",
      fullReview: "Ryan Holiday brilliantly applies ancient Stoic wisdom to modern challenges. The book's central thesis—that obstacles are not impediments to action but opportunities to practice virtue—is transformative when truly internalized. Through compelling historical examples from Marcus Aurelius to Amelia Earhart, Holiday demonstrates that perception, action, and will are the tools we need to overcome any obstacle. The writing is crisp and accessible, making philosophy practical. It's particularly valuable for leaders and entrepreneurs facing seemingly insurmountable challenges.",
      keyTakeaways: [
        "Perception: how you see and understand what occurs around you determines your response",
        "Action: the energy and creativity with which you actively work to solve problems",
        "Will: the internal fortitude to handle adversity and maintain perspective",
        "Every obstacle presents an opportunity to practice these virtues and grow stronger"
      ]
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      coverImage: "https://images.unsplash.com/photo-1546913760-e23d946dd386?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwaGVscCUyMGJvb2t8ZW58MXx8fHwxNzY3MjQ0NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      summary: "In a world of constant distraction, the ability to focus without interruption has become a rare and valuable skill. Newport argues that deep work is the superpower of the 21st century.",
      fullReview: "Cal Newport makes a compelling case that the ability to perform deep work—focused, undistracted, cognitively demanding activity—is becoming increasingly rare and valuable. He provides both philosophical justification and practical strategies for cultivating this skill. The book challenges our addiction to shallow work and constant connectivity, offering specific techniques like time blocking and structured routines. Newport's academic background brings rigor to his arguments, while real-world examples make the concepts actionable. Essential reading for knowledge workers who want to produce their best work.",
      keyTakeaways: [
        "Deep work produces value, develops skills, and is hard to replicate—making it extremely valuable",
        "Shallow work (email, meetings, logistics) creates the illusion of productivity without meaningful output",
        "Develop rituals and routines that support sustained concentration",
        "Embrace boredom and resist the urge for constant stimulation to strengthen focus"
      ]
    }
  ];

  return (
    <section id="books" className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Book Summaries</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Easiest way to succeed is to learn from those who have walked the path before you. I believe in continuous learning and growth, and these summaries capture the essence of transformative ideas from influential books that have shaped my thinking and approach to problem-solving.
          </p>
        </motion.div>

        {/* Book Cards Grid */}
        <div className="grid gap-8">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}