import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { projects } from '../data/projects';

describe('ProjectsSection', () => {
  it('renders the section title', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('PROJECTS.')).toBeInTheDocument();
  });

  it('renders project names and descriptions', () => {
    render(<ProjectsSection />);
    projects.forEach(project => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
      expect(screen.getByText(project.desc)).toBeInTheDocument();
    });
  });

  it('renders project links if available', () => {
    render(<ProjectsSection />);
    projects.forEach(project => {
      if (project.github) {
        expect(screen.getAllByRole('link', { name: /github/i }).length).toBeGreaterThan(0);
      }
      if (project.link) {
        expect(screen.getAllByRole('link', { name: /live demo/i }).length).toBeGreaterThan(0);
      }
    });
  });
});
