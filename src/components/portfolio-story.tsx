import {
  portfolioData,
  type ExperienceEntry,
  type Highlight,
  type ProjectEntry,
  type SkillGroup,
} from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2
        className="mt-4 text-4xl leading-[1.02] tracking-[-0.05em] text-foreground sm:text-5xl md:text-6xl"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <Card className="soft-panel h-full rounded-[28px] bg-white/[0.025]">
      <CardHeader className="pb-4">
        <CardTitle
          className="text-[1.55rem] tracking-[-0.04em] text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {group.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2.5">
          {group.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-[13px] text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function HighlightCard({ highlight }: { highlight: Highlight }) {
  return (
    <Card className="soft-panel h-full rounded-[30px] bg-white/[0.03]">
      <CardHeader className="pb-2">
        <CardTitle
          className="text-[3.35rem] tracking-[-0.05em] text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {highlight.value}
        </CardTitle>
        <CardDescription className="text-[11px] uppercase tracking-[0.22em] text-foreground/84">
          {highlight.label}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{highlight.note}</p>
      </CardContent>
    </Card>
  );
}

function ExperienceCard({ experience }: { experience: ExperienceEntry }) {
  return (
    <Card className="soft-panel rounded-[30px] bg-white/[0.025]">
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <CardTitle
              className="text-[2rem] tracking-[-0.04em] text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {experience.role}
            </CardTitle>
            <CardDescription className="mt-1 text-[15px] text-foreground/82">
              {experience.company}
            </CardDescription>
          </div>
          <p className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {experience.period}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-[15px] leading-7 text-muted-foreground">
          {experience.summary}
        </p>
        <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
          {experience.bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-[20px] border border-white/8 bg-white/[0.025] px-4 py-3"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <Card className="soft-panel rounded-[30px] bg-white/[0.025]">
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <CardTitle
                className="text-[2rem] tracking-[-0.04em] text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {project.name}
              </CardTitle>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/82">
                {project.status}
              </span>
            </div>
            <CardDescription className="mt-3 text-[15px] leading-7 text-muted-foreground">
              {project.summary}
            </CardDescription>
          </div>
          <p className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {project.period}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
        <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-[20px] border border-white/8 bg-white/[0.025] px-4 py-3"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function PortfolioStory() {
  return (
    <main className="relative bg-background">
      <section id="studio" className="section-divider">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <Card className="liquid-glass rounded-[36px] bg-[var(--glass-fill-strong)]">
              <CardHeader className="gap-4 p-8 sm:p-10">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/58">
                  Capabilities
                </p>
                <h2
                  className="max-w-3xl text-4xl leading-[1.02] tracking-[-0.05em] text-foreground sm:text-5xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Calm interfaces, disciplined engineering, and AI work that ships cleanly.
                </h2>
                <p className="max-w-2xl text-[15px] leading-7 text-white/72 sm:text-lg">
                  {portfolioData.summary}
                </p>
              </CardHeader>
              <CardContent className="grid gap-4 px-8 pb-8 sm:grid-cols-2 sm:px-10 sm:pb-10">
                {portfolioData.specialties.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/8 bg-white/[0.035] px-5 py-5"
                  >
                    <p className="text-[15px] leading-7 text-white/72">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {portfolioData.highlights.map((highlight) => (
                <HighlightCard key={highlight.label} highlight={highlight} />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <SectionHeader
              eyebrow="Tools & Stack"
              title="Core technologies I use to move from idea to production."
              description="A practical toolkit across model development, orchestration, product delivery, and modern web implementation."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {portfolioData.skillGroups.map((group) => (
                <SkillCard key={group.title} group={group} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-divider">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8">
              <SectionHeader
                eyebrow="Profile"
                title="A product-minded engineer with an applied AI foundation."
                description={portfolioData.about}
              />

              <Card className="soft-panel rounded-[30px] bg-white/[0.025]">
                <CardContent className="p-7">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    Current Direction
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                    {portfolioData.availability}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Card className="soft-panel rounded-[30px] bg-white/[0.025]">
                <CardHeader>
                  <CardTitle
                    className="text-[1.85rem] tracking-[-0.04em] text-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[15px] leading-7 text-foreground">
                    {portfolioData.education.degree}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {portfolioData.education.period}
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                    {portfolioData.education.school}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {portfolioData.education.detail}
                  </p>
                </CardContent>
              </Card>

              <Card className="soft-panel rounded-[30px] bg-white/[0.025]">
                <CardHeader>
                  <CardTitle
                    className="text-[1.85rem] tracking-[-0.04em] text-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-[15px] leading-7 text-muted-foreground">
                  <p>{portfolioData.location}</p>
                  <p>{portfolioData.phone}</p>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="block text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {portfolioData.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="soft-panel rounded-[30px] bg-white/[0.025]">
                <CardHeader>
                  <CardTitle
                    className="text-[1.85rem] tracking-[-0.04em] text-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {portfolioData.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="rounded-[20px] border border-white/8 bg-white/[0.025] px-4 py-3"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="soft-panel rounded-[30px] bg-white/[0.025]">
                <CardHeader>
                  <CardTitle
                    className="text-[1.85rem] tracking-[-0.04em] text-foreground"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {portfolioData.certifications.map((certification) => (
                      <li
                        key={certification}
                        className="rounded-[20px] border border-white/8 bg-white/[0.025] px-4 py-3"
                      >
                        {certification}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="journal" className="section-divider">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Selected Work"
            title="Professional work shaped by real constraints, measurable outcomes, and clean execution."
            description="A snapshot of the systems, platforms, and prototypes I have built across healthcare, finance, and applied machine learning."
          />

          <div className="mt-12 grid gap-8 xl:grid-cols-2">
            <div className="space-y-8">
              {portfolioData.experience.map((experience) => (
                <ExperienceCard
                  key={`${experience.company}-${experience.role}`}
                  experience={experience}
                />
              ))}
            </div>
            <div className="space-y-8">
              {portfolioData.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reach-us" className="section-divider">
        <div className="section-shell">
          <Card className="liquid-glass rounded-[38px] bg-[var(--glass-fill-strong)]">
            <CardHeader className="gap-5 p-8 sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/58">
                Contact
              </p>
              <CardTitle
                className="max-w-4xl text-4xl leading-[1.02] tracking-[-0.05em] text-foreground sm:text-5xl md:text-6xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Let&apos;s build something precise, ambitious, and genuinely useful.
              </CardTitle>
              <CardDescription className="max-w-2xl text-[15px] leading-7 text-white/72 sm:text-lg">
                {portfolioData.contactCta}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-8 px-8 pb-8 sm:px-10 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="grid gap-3 text-[15px] leading-7 text-white/72">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {portfolioData.email}
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-white px-8 text-[15px] text-slate-950 hover:scale-[1.01] hover:bg-white/94"
                >
                  <a href={`mailto:${portfolioData.email}`}>Start a Conversation</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-white/12 bg-white/6 px-8 text-[15px] text-white hover:scale-[1.01] hover:bg-white/10"
                >
                  <a href="/cv.pdf" target="_blank" rel="noreferrer">
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>{portfolioData.name}</p>
            <p>{portfolioData.title}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
