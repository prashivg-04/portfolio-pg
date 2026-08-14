import { cn } from "@/lib/utils";

export function BrutalCard({ children, className }) {
  return (
    <div
      className={cn(
        "border border-terminal-border bg-terminal-surface p-6 transition-[box-shadow,border-color,transform] duration-200 hover:border-terminal-signal hover:shadow-[6px_6px_0_rgba(255,61,0,0.45)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
