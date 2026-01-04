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
