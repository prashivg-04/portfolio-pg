import { SectionTitle } from "@/components/primitives/SectionTitle";

export default function ExperienceSection() {
  return (
    <div className="space-y-12">
      <SectionTitle>EXPERIENCE.</SectionTitle>
      
      {/* Wrapper for gradient border effect */}
      <div className="relative group p-px">
        {/* Subtle gradient border that glows on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-terminal-signal/40 via-terminal-border to-terminal-signal/40 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Main Card Content */}
        <div className="relative h-full w-full bg-terminal-bg p-8 sm:p-12 transition-all duration-500">
          
          <div className="text-center">
            {/* Heading */}
            <h3 className="font-mono text-3xl sm:text-5xl font-bold text-terminal-text uppercase tracking-wider mb-3">
              No Internship. No Problem.
            </h3>
            
            {/* Subheading */}
            <p className="font-mono text-sm sm:text-base text-terminal-soft italic mb-12">
              &quot;While others were interning, I was shipping.&quot;
            </p>

            {/* Stats Grid */}
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 text-left mb-16">
              {[
                { icon: "🚀", text: "3 products built from scratch — deployed, live, real users" },
                { icon: "💻", text: "700+ LeetCode problems — daily, no days off since Jan 2026" },
                { icon: "⚡", text: "Learned Docker, Kubernetes, AWS, Terraform — then actually used them" },
                { icon: "🌙", text: "Most productive hours: 2am (the world gets quiet, the code gets written)" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 p-5 border border-terminal-border/50 bg-terminal-surface/30 transition-all duration-300 hover:-translate-y-1 hover:bg-terminal-surface hover:border-terminal-signal hover:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.5)] group/stat"
                >
                  <span className="text-2xl transition-transform duration-300 group-hover/stat:scale-110">{stat.icon}</span>
                  <p className="font-mono text-sm text-terminal-soft leading-relaxed group-hover/stat:text-terminal-text transition-colors duration-300">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Centered Text */}
            <div className="space-y-2 mb-16">
              <p className="font-mono text-lg sm:text-xl text-terminal-dim">
                The résumé says no experience.
              </p>
              <p className="font-mono text-lg sm:text-xl text-terminal-signal">
                The GitHub says otherwise.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="mb-12">
              <p className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-terminal-text uppercase leading-tight">
                I&apos;m not looking for someone to teach me the job.
              </p>
              <p className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-terminal-text uppercase leading-tight mt-2">
                I&apos;m looking for a problem worth solving.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:prashivgoyal1504@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-terminal-signal px-8 py-4 font-mono text-sm md:text-base font-bold uppercase tracking-widest text-terminal-signal transition-all hover:bg-terminal-signal hover:text-terminal-bg hover:scale-105 active:scale-95"
            >
              Got one? &rarr; Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
