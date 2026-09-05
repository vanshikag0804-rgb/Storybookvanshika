import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Success' | 'Error';
  /** Text content for badge */
  label?: string;
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
  children,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const stateClass = String(State).toLowerCase().replace(/\s+/g, '-');
  
  // Default label matching Figma variant names if label or children are omitted
  const displayContent = children || label || (State === 'Success' ? 'Sucess' : State === 'Default' ? 'Badge' : State);

  return (
    <span
      className={`uedp-badge uedp-badge--${stateClass} ${className}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      {displayContent}
    </span>
  );
};
