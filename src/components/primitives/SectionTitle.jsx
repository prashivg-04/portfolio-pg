import { cn } from "@/lib/utils";

export function SectionTitle({ children, className }) {
  return (
    <h2
      className={cn(
        "mb-12 font-mono text-[clamp(40px,7vw,96px)] font-bold leading-[0.9] text-terminal-text",
        className,
      )}
    >
      {children}
    </h2>
  );
}
