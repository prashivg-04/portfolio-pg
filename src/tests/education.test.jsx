import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EducationSection } from '../components/sections/EducationSection';
import { education } from '../data/education';

describe('EducationSection', () => {
  it('renders the section title', () => {
    render(<EducationSection />);
    expect(screen.getByText('EDUCATION.')).toBeInTheDocument();
  });

  it('renders education cards with correct data', () => {
    render(<EducationSection />);
    education.forEach(item => {
      expect(screen.getByText(item.schoolName)).toBeInTheDocument();
      expect(screen.getByText(item.subHeader)).toBeInTheDocument();
      expect(screen.getByText(item.duration)).toBeInTheDocument();
    });
  });
});
