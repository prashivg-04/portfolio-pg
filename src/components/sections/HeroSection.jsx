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
      className="relative flex min-h-svh flex-col justify-start overflow-hidden px-6 pb-0 pt-20 md:min-h-screen md:justify-end md:px-12 md:pt-24"
    >
      <ParticlesBackground />
      <div className="relative z-10 my-auto max-w-5xl pb-12 md:my-0 md:pb-16">
        <h1 className="font-mono text-[clamp(64px,12vw,160px)] font-bold leading-none text-terminal-text">
          <span className="block">{hero.greeting}</span>
          <span className="block">
            {"I'M "}
            <TerminalLine text={hero.name} cursor />
          </span>
        </h1>
        <p className="mt-8 max-w-xl whitespace-pre-line border-l-2 border-terminal-signal pl-4 text-sm leading-relaxed text-terminal-soft">
          {hero.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild>
            <a href={hero.resumeLink}>[ SEE MY RESUME ]</a>
          </Button>
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
        </div>
      </div>
    </section>
  );
}
