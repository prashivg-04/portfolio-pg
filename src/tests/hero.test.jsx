import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from '../components/sections/HeroSection';
import { hero } from '../data/hero';

describe('HeroSection', () => {
  it('renders the greeting text', () => {
    render(<HeroSection />);
    expect(screen.getByText(hero.greeting)).toBeInTheDocument();
  });

  it('renders the role and availability text', () => {
    render(<HeroSection />);
    expect(screen.getByText(hero.role)).toBeInTheDocument();
    expect(screen.getByText(hero.availability)).toBeInTheDocument();
  });

  it('renders the hero description', () => {
    render(<HeroSection />);
    expect(
      screen.getByText((_, el) =>
        el?.tagName?.toLowerCase() === 'p' &&
        el?.textContent?.includes(hero.tagline1) &&
        el?.textContent?.includes(hero.tagline2)
      )
    ).toBeInTheDocument();
  });

  it('renders the view projects link', () => {
    render(<HeroSection />);
    const link = screen.getByRole('link', { name: /view projects/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('renders the resume link', () => {
    render(<HeroSection />);
    const link = screen.getByRole('link', { name: /resume/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', hero.resumeLink);
  });

  it('renders the social links (GitHub, LinkedIn, and Email)', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument();
  });
});
