import { SectionTitle } from "@/components/primitives/SectionTitle";
import { CertificationCard } from "@/components/cards/CertificationCard";
import { CodingProfileCard } from "@/components/cards/CodingProfileCard";
import { certifications, codingProfiles } from "@/data/achievements";

export default function AchievementsSection() {
  return (
    <div className="space-y-12">
      <div>
        <SectionTitle>ACHIEVEMENTS.</SectionTitle>
        <p className="max-w-2xl font-mono text-sm uppercase leading-relaxed tracking-widest text-terminal-soft">
          Continuous learning, competitive programming, and professional certifications
        </p>
      </div>

      <div className="space-y-12">
        {codingProfiles?.length > 0 && (
          <div>
            <h3 className="mb-6 font-mono text-lg font-bold tracking-widest text-terminal-text">
              <span className="text-terminal-signal mr-2">#</span>
              CODING_PROFILES
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {codingProfiles.map((profile) => (
                <CodingProfileCard key={profile.platform} {...profile} />
              ))}
            </div>
          </div>
        )}

        {certifications?.length > 0 && (
          <div>
            <h3 className="mb-6 font-mono text-lg font-bold tracking-widest text-terminal-text">
              <span className="text-terminal-signal mr-2">#</span>
              CERTIFICATIONS
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <CertificationCard key={cert.name} {...cert} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
