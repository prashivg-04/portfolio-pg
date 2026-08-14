import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AchievementsSection from '../components/sections/AchievementsSection';
import { certifications, codingProfiles } from '../data/achievements';

describe('AchievementsSection', () => {
  it('renders the section title and description', () => {
    render(<AchievementsSection />);
    expect(screen.getByText('ACHIEVEMENTS.')).toBeInTheDocument();
    expect(screen.getByText(/Continuous learning, competitive programming, and professional certifications/i)).toBeInTheDocument();
  });

  it('renders coding profiles if available', () => {
    render(<AchievementsSection />);
    if (codingProfiles?.length > 0) {
      expect(screen.getByText(/CODING_PROFILES/i)).toBeInTheDocument();
      codingProfiles.forEach(profile => {
        expect(screen.getByText(profile.platform)).toBeInTheDocument();
        expect(screen.getByText(profile.stat, { exact: false })).toBeInTheDocument();
      });
    }
  });

  it('renders certifications if available', () => {
    render(<AchievementsSection />);
    if (certifications?.length > 0) {
      expect(screen.getAllByText(/CERTIFICATIONS/i)[0]).toBeInTheDocument();
      certifications.forEach(cert => {
        expect(screen.getByText(cert.name)).toBeInTheDocument();
        expect(screen.getByText(cert.organization, { exact: false })).toBeInTheDocument();
        expect(screen.getAllByText(cert.date)[0]).toBeInTheDocument();
      });
    }
  });
});
