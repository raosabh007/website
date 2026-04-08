import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  return (
    <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-24 pt-20 text-center sm:pt-24 md:py-[88px]">
      <div className="mx-auto max-w-5xl">
        <p className="animate-fade-rise text-[11px] uppercase tracking-[0.34em] text-white/72 sm:text-xs">
          {portfolioData.location} / AI Systems / Product Thinking
        </p>

        <h1
          className="animate-fade-rise mt-6 text-balance text-[3rem] font-normal leading-[0.94] tracking-[-0.06em] text-foreground sm:text-[4.75rem] md:text-[6.8rem]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-white/60">dreams</em> rise{" "}
          <em className="not-italic text-white/60">through the silence.</em>
        </h1>

        <p className="animate-fade-rise-delay mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-white/72 sm:text-lg">
          {portfolioData.tagline} I build polished, intelligent products across
          generative AI, trading automation, and applied machine learning.
        </p>

        <div className="animate-fade-rise-delay-2 mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-white px-8 text-[15px] text-slate-950 hover:scale-[1.01] hover:bg-white/94"
          >
            <a href="#journal">View Selected Work</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-white/12 bg-white/6 px-8 text-[15px] text-white hover:scale-[1.01] hover:bg-white/10"
          >
            <a href="#reach-us">Contact Me</a>
          </Button>
        </div>
      </div>

      <div className="animate-fade-rise-delay-2 mx-auto mt-16 grid w-full max-w-5xl gap-4 text-left md:grid-cols-[1.35fr_0.85fr]">
        <div className="lens-panel rounded-[32px] px-7 py-7 sm:px-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/56">
            Current Focus
          </p>
          <p
            className="mt-4 max-w-2xl text-[1.75rem] leading-[1.1] text-white sm:text-[2.15rem]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Shipping thoughtful AI products with the clarity, restraint, and
            technical depth expected from modern product engineering.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/72 sm:text-[15px]">
            {portfolioData.availability}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {portfolioData.highlights.slice(0, 2).map((highlight) => (
            <div key={highlight.label} className="lens-panel rounded-[32px] px-6 py-6">
              <p
                className="text-[2.3rem] leading-none text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {highlight.value}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/56">
                {highlight.label}
              </p>
              <p className="mt-4 text-sm leading-6 text-white/68">{highlight.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
