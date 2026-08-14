import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ContactSection } from '../components/sections/ContactSection';
import { socialLinks } from '../data/social';

describe('ContactSection', () => {
  const mockGithub = {
    avatar_url: 'https://example.com/avatar.jpg',
    login: 'testuser',
  };

  beforeEach(() => {
    // Mock fetch globally as requested
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockGithub),
    });
  });

  it('renders the contact heading and description', () => {
    render(<ContactSection github={mockGithub} />);
    expect(screen.getByText('REACH OUT TO ME!')).toBeInTheDocument();
    expect(screen.getByText(/Discuss a project or just want to say hi/i)).toBeInTheDocument();
  });

  it('renders the email link', () => {
    render(<ContactSection github={mockGithub} />);
    const emailLink = screen.getByText('prashivgoyal1504@gmail.com');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', socialLinks.email);
  });

  it('renders social links', () => {
    render(<ContactSection github={mockGithub} />);
    const githubLink = screen.getByText('GITHUB');
    const linkedinLink = screen.getByText('LINKEDIN');
    
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  it('renders github avatar', () => {
    render(<ContactSection github={mockGithub} />);
    const img = screen.getByRole('img', { name: /testuser avatar/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', mockGithub.avatar_url);
  });
});
