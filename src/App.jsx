import React, { useState, useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { NavBar } from "@/components/navigation/NavBar";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProficiencySection } from "@/components/sections/ProficiencySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";

const fallbackGithub = {
  avatar_url: "https://avatars.githubusercontent.com/u/177395392?v=4",
  bio: "Builder & Engineer",
  location: "Malout, India",
  html_url: "https://github.com/prashivg-04",
  login: "prashivg-04",
};

export default function App() {
  const [github, setGithub] = useState(fallbackGithub);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const res = await fetch("https://api.github.com/users/prashivg-04", {
          headers: { Accept: "application/vnd.github.v3+json" },
        });

        if (res.ok) {
          const data = await res.json();
          setGithub({
            avatar_url: data.avatar_url || fallbackGithub.avatar_url,
            bio: data.bio ?? fallbackGithub.bio,
            location: data.location ?? fallbackGithub.location,
            html_url: data.html_url || fallbackGithub.html_url,
            login: data.login || fallbackGithub.login,
          });
        }
      } catch (error) {
        console.error("Error fetching github profile", error);
      }
    };
    fetchGithub();
  }, []);

  return (
    <PageShell>
      <NavBar />
      <HeroSection />
      <SectionWrapper id="skills" num="02">
        <SkillsSection />
      </SectionWrapper>
      <SectionWrapper id="proficiency" num="03">
        <ProficiencySection />
      </SectionWrapper>
      <SectionWrapper id="education" num="04">
        <EducationSection />
      </SectionWrapper>
      <SectionWrapper id="experience" num="05">
        <ExperienceSection />
      </SectionWrapper>
      <SectionWrapper id="projects" num="06">
        <ProjectsSection />
      </SectionWrapper>
      <SectionWrapper id="achievements" num="07">
        <AchievementsSection />
      </SectionWrapper>
      <SectionWrapper id="contact" num="08">
        <ContactSection github={github} />
      </SectionWrapper>
    </PageShell>
  );
}
