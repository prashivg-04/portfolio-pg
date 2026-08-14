import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from '../components/sections/HeroSection';
import { hero } from '../data/hero';

describe('HeroSection', () => {
  it('renders the greeting text', () => {
    render(<HeroSection />);
    expect(screen.getByText(hero.greeting)).toBeInTheDocument();
  });

  it('renders the hero description', () => {
    render(<HeroSection />);
    expect(screen.getByText(hero.description)).toBeInTheDocument();
  });

  it('renders the resume link', () => {
    render(<HeroSection />);
    const link = screen.getByRole('link', { name: /see my resume/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', hero.resumeLink);
  });

  it('renders the social links (GitHub and LinkedIn)', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });
});
