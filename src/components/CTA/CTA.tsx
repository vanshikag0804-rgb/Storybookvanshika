import React from 'react';
import { Loader2 } from 'lucide-react';
import './CTA.css';

export interface CTAProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Loading' | 'Disabled' | 'Pressed';
  /** Figma variant parameter: type */
  type?: 'Primary' | 'Secondary';
  /** Enable Dark Mode state */
  darkMode?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CTA: React.FC<CTAProps> = ({
  State = 'Default',
  type = 'Primary',
  darkMode = false,
  children = 'Add to Cart',
  className = '',
  onClick,
  ...props
}) => {
  const isSecondary = type.toLowerCase() === 'secondary';
  const isLoading = State.toLowerCase() === 'loading';
  const isDisabled = State.toLowerCase() === 'disabled';
  const isPressed = State.toLowerCase() === 'pressed';

  return (
    <button
      className={`uedp-cta uedp-cta--${type.toLowerCase()} uedp-cta--${State.toLowerCase()} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && <Loader2 className="uedp-cta-spinner" size={16} aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
};
