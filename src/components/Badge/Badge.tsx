import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Success' | 'Error';
  /** Text content for badge */
  label?: string;
  /** Enable Dark Mode state */
  darkMode?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * **Badge** React Component
 * Synchronized with Figma Design System layer `Badge`.
 */
export const Badge: React.FC<BadgeProps> = ({
  State = 'Default',
  label,
  darkMode = false,
  children,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const stateClass = String(State).toLowerCase().replace(/\s+/g, '-');
  
  // Default label matching Figma variant names if label or children are omitted
  const displayContent = children || label || (State === 'Success' ? 'Sucess' : State === 'Default' ? 'Badge' : State);

  const isInteractive = Boolean(onClick);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <span
      className={`uedp-badge uedp-badge--${stateClass} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={style}
      onClick={onClick}
      role={isInteractive ? 'button' : 'status'}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      aria-label={typeof displayContent === 'string' ? `Badge: ${displayContent}` : undefined}
      {...props}
    >
      {displayContent}
    </span>
  );
};

