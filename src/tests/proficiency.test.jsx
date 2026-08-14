import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProficiencySection } from '../components/sections/ProficiencySection';
import { proficiency } from '../data/proficiency';

describe('ProficiencySection', () => {
  it('renders the section title', () => {
    render(<ProficiencySection />);
    expect(screen.getByText('PROFICIENCY.')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<ProficiencySection />);
    expect(screen.getByText(/Balanced across product-facing interfaces/i)).toBeInTheDocument();
  });

  it('renders proficiency categories and percentages', () => {
    render(<ProficiencySection />);
    proficiency.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getAllByText(`${item.percentage}%`)[0]).toBeInTheDocument();
    });
  });
});
