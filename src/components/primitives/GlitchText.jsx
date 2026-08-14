import { cn } from "@/lib/utils";

export function GlitchText({
  children,
  as: Tag = "span",
  className,
}) {
  return (
    <Tag className={cn("glitch", className)} data-text={children}>
      {children}
    </Tag>
  );
}
