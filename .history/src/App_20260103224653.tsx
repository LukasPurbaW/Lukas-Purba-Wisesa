import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { BookSummaries } from './components/BookSummaries';
import { Footer } from './components/Footer';

/**
 * Main Application Component
 * Personal branding website unifying Web, SaaS, and AI/ML skills
 * 
 * Design Philosophy:
 * - Minimalist, clean layout with neutral color palette
 * - Professional typography and readable content
 * - Smooth animations and transitions for polished UX
 * - Fully responsive across all devices
 * - Emphasis on outcomes and problem-solving mindset
 * 
 * Sections:
 * 1. Home: Hero section with unified value proposition and CTAs
 * 2. About Me: Biography explaining skill connections and problem-solving approach
 * 3. Portfolio: Filterable showcase of Web, SaaS, and AI/ML projects
 * 4. Book Summaries: Curated insights from influential books
 * 5. Footer: Social links and contact information
 * 
 * Key Features:
 * - Sticky navigation with active section tracking
 * - Smooth scroll behavior between sections
 * - Scroll-triggered fade-in and slide-up animations
 * - Portfolio filtering by category (Web, SaaS, AI/ML)
 * - Expandable book cards with detailed summaries
 * - Accessible design with proper ARIA labels and keyboard navigation
 * - Performance optimized with lazy loading and intersection observers
 */
export default function App() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Futuristic animated background */}
      <div className="futuristic-bg">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* App content */}
      <div className="relative z-10">
        {/* Sticky Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <main>
          {/* Hero Section - Home */}
          <Hero />

          {/* About Me Section */}
          <About />

          {/* Portfolio Section - Unified Skills Showcase */}
          <Portfolio />

          {/* Book Summaries Section */}
          <BookSummaries />
        </main>

        {/* Footer with Social Links */}
        <Footer />
      </div>
    </div>
  );
}
