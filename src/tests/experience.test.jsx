import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExperienceSection from '../components/sections/ExperienceSection';

describe('ExperienceSection', () => {
  it('renders the section title', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('EXPERIENCE.')).toBeInTheDocument();
  });

  it('renders the creative heading', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('No Internship. No Problem.')).toBeInTheDocument();
    expect(screen.getByText(/While others were interning, I was shipping./i)).toBeInTheDocument();
  });

  it('renders the stats grid items', () => {
    render(<ExperienceSection />);
    expect(screen.getByText(/3 products built from scratch/i)).toBeInTheDocument();
    expect(screen.getByText(/700\+ LeetCode problems/i)).toBeInTheDocument();
    expect(screen.getByText(/Learned Docker, Kubernetes, AWS/i)).toBeInTheDocument();
  });

  it('renders the closing statements', () => {
    render(<ExperienceSection />);
    expect(screen.getByText(/The résumé says no experience./i)).toBeInTheDocument();
    expect(screen.getByText(/The GitHub says otherwise./i)).toBeInTheDocument();
    expect(screen.getByText(/I'm not looking for someone to teach me the job./i)).toBeInTheDocument();
    expect(screen.getByText(/I'm looking for a problem worth solving./i)).toBeInTheDocument();
  });

  it('renders the contact button', () => {
    render(<ExperienceSection />);
    const link = screen.getByRole('link', { name: /Got one\? → Let's talk/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'mailto:prashivgoyal1504@gmail.com');
  });
});
