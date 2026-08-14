import { ScanlineOverlay } from "@/components/primitives/ScanlineOverlay";

export function PageShell({ children, showScanlines = true }) {
  return (
    <div className="grid-overlay relative min-h-screen bg-terminal-bg">
      {showScanlines && <ScanlineOverlay />}
      <div className="relative z-10 mx-auto max-w-350">{children}</div>
    </div>
  );
}
