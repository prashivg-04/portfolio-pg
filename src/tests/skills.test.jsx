import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkillsSection } from '../components/sections/SkillsSection';
import { skillGroups } from '../data/skills';

describe('SkillsSection', () => {
  it('renders the section title', () => {
    render(<SkillsSection />);
    expect(screen.getByText('WHAT I DO.')).toBeInTheDocument();
  });

  it('renders the intro paragraph', () => {
    render(<SkillsSection />);
    const introText = screen.getByText(/Final-year B.Tech \(CSE\) student/i);
    expect(introText).toBeInTheDocument();
  });

  it('renders all skill groups', () => {
    render(<SkillsSection />);
    skillGroups.forEach(group => {
      // Look for the group title
      expect(screen.getByText(group.title)).toBeInTheDocument();
      // Look for at least one capability from the group
      expect(screen.getByText(group.capabilities[0])).toBeInTheDocument();
    });
  });

  it('renders software skill badges', () => {
    render(<SkillsSection />);
    // Just verify the first skill of the first group
    const firstSkill = skillGroups[0].softwareSkills[0].skillName;
    expect(screen.getByText(firstSkill)).toBeInTheDocument();
  });
});
