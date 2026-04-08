import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "Capabilities", href: "#studio", active: false },
  { label: "Profile", href: "#about", active: false },
  { label: "Work", href: "#journal", active: false },
  { label: "Contact", href: "#reach-us", active: false },
] as const;

export function SiteNav() {
  return (
    <nav className="liquid-glass relative z-10 mx-auto mt-5 flex w-[min(100%-1.5rem,78rem)] items-center justify-between rounded-full px-4 py-3.5 sm:px-6 lg:px-8">
      <a href="#home" className="flex min-w-0 flex-col leading-none text-foreground">
        <span
          className="truncate text-[1.45rem] tracking-[-0.04em] sm:text-[1.75rem]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Amitabh Mathur
        </span>
        <span className="mt-1 truncate text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          {portfolioData.title}
        </span>
      </a>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-[13px] tracking-[-0.01em] transition-colors hover:text-foreground",
                link.active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          className="h-10 px-5 text-[13px] text-foreground hover:scale-[1.02]"
        >
          <a href="/cv.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </Button>
      </div>
    </nav>
  );
}
