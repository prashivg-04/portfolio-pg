import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/primitives/ParticlesBackground";
import { SocialLink } from "@/components/primitives/SocialLink";
import { TerminalLine } from "@/components/primitives/TerminalLine";
import { hero } from "@/data/hero";
import { socialLinks } from "@/data/social";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden px-6 py-8 md:min-h-[calc(100vh-4rem)] md:px-12 md:py-12"
    >
      <ParticlesBackground />
      <div className="relative z-10 max-w-5xl">
        <h1>
          <span className="font-mono text-[clamp(24px,4vw,52px)] font-semibold leading-none text-terminal-text">
            {hero.greeting}
          </span>
          <span className="font-mono text-[clamp(24px,4vw,52px)] font-semibold leading-none text-terminal-text">
            {" I'M "}
          </span>
          <span className="mt-1 block font-mono text-[clamp(52px,9vw,112px)] font-bold leading-none tracking-tight text-terminal-text">
            <TerminalLine text={hero.name} cursor />
          </span>
        </h1>

        <p className="mt-3 font-mono text-base font-medium tracking-tight text-terminal-signal sm:text-lg md:text-xl">
          {hero.role}
        </p>

        <p className="mt-5 max-w-xl whitespace-pre-line border-l-2 border-terminal-signal pl-4 font-mono text-xs leading-relaxed text-terminal-soft sm:text-sm">
          {hero.description}
        </p>

        <div className="mt-5 flex items-center gap-2.5 font-mono text-xs text-terminal-soft sm:text-sm">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terminal-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-terminal-green" />
          </span>
          <span>{hero.availability}</span>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Button asChild variant="outline">
            <a href="#projects">[ VIEW PROJECTS ]</a>
          </Button>
          <Button asChild variant="ghost">
            <a href={hero.resumeLink} target="_blank" rel="noreferrer">
              [ RESUME ]
            </a>
          </Button>
          <div className="flex items-center gap-2.5">
            <SocialLink
              href={socialLinks.github}
              icon="mdi:github"
              label="GitHub"
            />
            <SocialLink
              href={socialLinks.linkedin}
              icon="mdi:linkedin"
              label="LinkedIn"
            />
            <SocialLink
              href={`mailto:${socialLinks.email}`}
              icon="mdi:email"
              label="Email"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
