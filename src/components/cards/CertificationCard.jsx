import { ExternalLink } from "lucide-react";
import { BrutalCard } from "@/components/primitives/BrutalCard";

export function CertificationCard({ name, organization, date, badgeLink }) {
  return (
    <BrutalCard className="flex h-full flex-col">
      <h3 className="mb-1 font-mono text-xl font-bold text-terminal-text">
        {name}
      </h3>
      <div className="my-3 border-t border-terminal-border" />
      <div className="flex-1 space-y-2 text-sm leading-relaxed text-terminal-soft">
        <p>
          <span className="text-terminal-signal">ORG_ </span> {organization}
        </p>
        <p>
          <span className="text-terminal-signal">DATE_ </span> {date}
        </p>
      </div>
      {badgeLink ? (
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={badgeLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-terminal-border px-3 py-1.5 font-mono text-xs text-terminal-dim transition-colors hover:border-terminal-signal hover:text-terminal-signal"
          >
            <ExternalLink size={14} aria-hidden />
            VIEW CERTIFICATE
          </a>
        </div>
      ) : null}
    </BrutalCard>
  );
}
