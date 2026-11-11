import { useState } from "react";
import { Icon } from "@iconify/react";
import { ExternalLink } from "lucide-react";

import { BrutalCard } from "@/components/primitives/BrutalCard";
import { GlitchText } from "@/components/primitives/GlitchText";
import { cn } from "@/lib/utils";

export function ProjectCard({
  name,
  summary,
  desc,
  tags = [],
  highlights = [],
  github,
  link,
  hasLiveDemo = true,
  demoCredentials = [],
  index,
}) {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [copiedKey, setCopiedKey] = useState(null);

  const projectId = `[PROJ_${String(index + 1).padStart(3, "0")}]`;
  const activeCred = demoCredentials[activeRoleIndex] || null;

  const handleCopy = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <BrutalCard className="flex h-full flex-col">
      {/* Project ID */}
      <p className="mb-2 font-mono text-xs text-terminal-signal">
        {projectId}
      </p>

      {/* Project Name */}
      <h3 className="font-mono text-xl font-bold text-terminal-text">
        <GlitchText>{name}</GlitchText>
      </h3>

      {/* 1. One-line summary */}
      <p className="mt-2 text-sm text-terminal-soft font-mono leading-relaxed">
        {summary || desc}
      </p>

      {/* 2. Stack tags */}
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-terminal-border bg-terminal-elevated/60 px-2 py-0.5 font-mono text-[11px] text-terminal-dim transition-colors hover:border-terminal-signal/60 hover:text-terminal-signal"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="my-3.5 border-t border-terminal-border" />

      {/* 3. Highlights */}
      {highlights.length > 0 && (
        <ul className="space-y-1.5 border-l-2 border-terminal-border pl-3 font-mono text-xs leading-relaxed text-terminal-soft">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-terminal-signal shrink-0">&gt;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Demo Credentials Block (if available) */}
      {demoCredentials.length > 0 && activeCred && (
        <div className="mt-4 border border-terminal-border bg-terminal-bg/80 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-terminal-border">
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-terminal-dim">
              // DEMO LOGIN
            </span>
            {demoCredentials.length > 1 && (
              <div className="flex flex-wrap gap-1">
                {demoCredentials.map((cred, idx) => (
                  <button
                    key={cred.role}
                    type="button"
                    onClick={() => setActiveRoleIndex(idx)}
                    className={cn(
                      "px-1.5 py-0.5 font-mono text-[10px] uppercase border transition-colors",
                      activeRoleIndex === idx
                        ? "border-terminal-signal text-terminal-signal bg-terminal-signal/10"
                        : "border-terminal-border text-terminal-dim hover:text-terminal-text",
                    )}
                  >
                    {cred.role}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-2.5 space-y-1.5 font-mono text-xs">
            {/* Email */}
            <div className="flex items-center justify-between gap-2 min-w-0">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase text-terminal-dim shrink-0 w-12">
                  EMAIL:
                </span>
                <span
                  className="text-terminal-text text-xs truncate select-all"
                  title={activeCred.email}
                >
                  {activeCred.email}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(activeCred.email, `email-${index}`)}
                className="shrink-0 border border-terminal-border px-2 py-0.5 text-[10px] uppercase text-terminal-dim hover:border-terminal-signal hover:text-terminal-signal transition-colors"
              >
                {copiedKey === `email-${index}` ? "[COPIED]" : "[COPY]"}
              </button>
            </div>

            {/* Password */}
            <div className="flex items-center justify-between gap-2 min-w-0">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="text-[10px] font-bold uppercase text-terminal-dim shrink-0 w-12">
                  PASS:
                </span>
                <span className="text-terminal-text text-xs truncate select-all">
                  {activeCred.password}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(activeCred.password, `pass-${index}`)}
                className="shrink-0 border border-terminal-border px-2 py-0.5 text-[10px] uppercase text-terminal-dim hover:border-terminal-signal hover:text-terminal-signal transition-colors"
              >
                {copiedKey === `pass-${index}` ? "[COPIED]" : "[COPY]"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons: Live Demo is Primary, GitHub is Secondary */}
      <div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
        {hasLiveDemo && link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-terminal-signal bg-terminal-signal px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-terminal-bg transition-colors duration-200 hover:bg-transparent hover:text-terminal-signal"
          >
            <ExternalLink size={14} aria-hidden />
            LIVE DEMO
          </a>
        ) : null}

        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-terminal-border px-3 py-1.5 font-mono text-xs text-terminal-dim transition-colors duration-200 hover:border-terminal-signal hover:text-terminal-signal"
          >
            <Icon icon="mdi:github" width={14} height={14} aria-hidden />
            GITHUB
          </a>
        ) : null}
      </div>
    </BrutalCard>
  );
}
