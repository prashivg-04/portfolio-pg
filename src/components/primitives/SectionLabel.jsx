export function SectionLabel({ num, label }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-terminal-signal">
      <span className="text-terminal-dim">{"//"}</span>
      <span>SECTION_{num}</span>
      {label ? <span className="text-terminal-dim">{label}</span> : null}
    </p>
  );
}
