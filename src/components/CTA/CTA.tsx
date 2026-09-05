import React from 'react';
import { Loader2 } from 'lucide-react';
import './CTA.css';

export interface CTAProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Loading' | 'Disabled' | 'Pressed';
  /** Figma variant parameter: type */
  type?: 'Primary' | 'Secondary';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CTA: React.FC<CTAProps> = ({
  State = 'Default',
  type = 'Primary',
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
      className={`uedp-cta uedp-cta--${type.toLowerCase()} uedp-cta--${State.toLowerCase()} ${className}`}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {isLoading && <Loader2 className="uedp-cta-spinner" size={16} />}
      <span>{children}</span>
    </button>
  );
};
