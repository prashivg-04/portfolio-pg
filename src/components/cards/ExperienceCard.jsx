import { BrutalCard } from "@/components/primitives/BrutalCard";
export function ExperienceCard({
	company,
	role,
	date,
	companyLogo,
	desc,
	descBullets,
}) {
	return (
		<BrutalCard>
			<div className="flex items-start gap-4">
				<div className="relative h-10 w-10 shrink-0 border border-terminal-border bg-terminal-bg p-1">
					<img
						src={companyLogo}
						alt={`${company} logo`}
						className="object-contain p-1 w-full h-full"
					/>
				</div>
				<div>
					<h3 className="font-mono text-lg font-bold uppercase text-terminal-text">
						{company}
					</h3>
					<p className="mt-1 text-xs uppercase tracking-widest text-terminal-signal">
						{role}
					</p>
					<p className="mt-2 font-mono text-xs text-terminal-amber">
						{date}
					</p>
				</div>
			</div>
			<div className="my-4 border-t border-terminal-border" />
			{desc && (
				<p className="text-sm leading-relaxed text-terminal-soft">
					<span className="text-terminal-signal">&gt; </span>
					{desc}
				</p>
			)}
			{descBullets?.length ? (
				<ul className="mt-3 space-y-1">
					{descBullets.map((bullet) => (
						<li
							key={bullet}
							className="flex gap-2 text-xs text-terminal-soft"
						>
							<span className="text-terminal-signal">-</span>
							<span>{bullet}</span>
						</li>
					))}
				</ul>
			) : null}
		</BrutalCard>
	);
}

