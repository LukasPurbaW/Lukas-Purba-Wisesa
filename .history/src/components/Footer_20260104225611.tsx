import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

/**
 * Footer Component
 * Minimal footer with copyright and social links
 * Provides additional navigation and contact options
 */
export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourusername',
      ariaLabel: 'Connect with me on LinkedIn'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/yourusername',
      ariaLabel: 'Follow me on Twitter'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:lukaspurbaw@gmail.com',
      ariaLabel: 'Send me an email'
    }
  ];

  return (
    <footer className="bg-slate-950/80 border-t border-slate-800 text-slate-300 py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={link.ariaLabel}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-900 transition-colors"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Copyright and Credits */}
        <div className="text-center space-y-2">
          <p className="mb-2 text-white">© 2026 Alex Morgan. All rights reserved.</p>
          <p className="text-slate-400">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-slate-400">
            Designed for clarity, optimized for impact
          </p>
        </div>

        {/* Back to top button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}