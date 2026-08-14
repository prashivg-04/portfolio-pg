import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock framer-motion to bypass animations in tests
vi.mock('framer-motion', () => {
  const React = require('react');
  const Dummy = React.forwardRef(({ children, ...props }, ref) => {
    // Remove motion-specific props
    const {
      initial, animate, exit, transition, variants, whileHover, whileTap,
      whileInView, viewport, onAnimationComplete, onViewportEnter,
      onViewportLeave, custom, layoutId, layout, 
      ...validProps
    } = props;
    return <div ref={ref} {...validProps}>{children}</div>;
  });
  Dummy.displayName = 'MotionDummy';

  return {
    motion: {
      div: Dummy,
      span: Dummy,
      p: Dummy,
      h1: Dummy,
      h2: Dummy,
      h3: Dummy,
      a: Dummy,
      button: Dummy,
      ul: Dummy,
      li: Dummy,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
    useInView: () => true,
    useAnimation: () => ({ start: vi.fn() }),
  };
});

// Mock Iconify
vi.mock('@iconify/react', () => {
  return {
    Icon: ({ icon, ...props }) => <span data-testid="iconify-icon" data-icon={icon} {...props} />
  };
});
