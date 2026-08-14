import { Icon } from "@iconify/react";
import { ExternalLink } from "lucide-react";
import { BrutalCard } from "@/components/primitives/BrutalCard";

export function CodingProfileCard({ platform, iconifyTag, stat, profileLink }) {
  return (
    <BrutalCard className="flex h-full flex-col">
      <div className="mb-2 flex items-center gap-3">
        <Icon
          icon={iconifyTag}
          width={24}
          height={24}
          className="text-terminal-text"
          aria-hidden
        />
        <h3 className="font-mono text-xl font-bold text-terminal-text">
          {platform}
        </h3>
      </div>
      <div className="my-3 border-t border-terminal-border" />
      <p className="flex-1 text-sm leading-relaxed text-terminal-soft">
        <span className="text-terminal-signal">&gt; </span> {stat}
      </p>
      {profileLink ? (
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={profileLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-terminal-border px-3 py-1.5 font-mono text-xs text-terminal-dim transition-colors hover:border-terminal-signal hover:text-terminal-signal"
          >
            <ExternalLink size={14} aria-hidden />
            VISIT PROFILE
          </a>
        </div>
      ) : null}
    </BrutalCard>
  );
}
