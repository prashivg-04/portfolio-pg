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
    projects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
      expect(screen.getByText(project.desc)).toBeInTheDocument();
    });
  });

  it('renders stack tags and highlights', () => {
    render(<ProjectsSection />);
    projects.forEach((project) => {
      project.tags?.forEach((tag) => {
        expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
      });
      project.highlights?.forEach((highlight) => {
        expect(screen.getByText(highlight)).toBeInTheDocument();
      });
    });
  });

  it('renders demo credentials for projects with demo accounts', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('rajesh.kumar@fitflow.com')).toBeInTheDocument();
    expect(screen.getByText('pooja.iyer@student.nit.ac.in')).toBeInTheDocument();
  });

  it('renders project links if available', () => {
    render(<ProjectsSection />);
    projects.forEach((project) => {
      if (project.github) {
        expect(screen.getAllByRole('link', { name: /github/i }).length).toBeGreaterThan(0);
      }
      if (project.link && project.hasLiveDemo !== false) {
        expect(screen.getAllByRole('link', { name: /live demo/i }).length).toBeGreaterThan(0);
      }
    });
  });
});
