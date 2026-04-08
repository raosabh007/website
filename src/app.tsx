import { HeroSection } from "@/components/hero-section";
import { PortfolioStory } from "@/components/portfolio-story";
import { SiteNav } from "@/components/site-nav";

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section
        id="home"
        className="relative isolate flex min-h-screen flex-col overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(4,11,19,0.18),rgba(4,11,19,0.28)_34%,rgba(4,11,19,0.58)_100%)]" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteNav />
          <HeroSection />
        </div>
      </section>

      <PortfolioStory />
    </div>
  );
}
