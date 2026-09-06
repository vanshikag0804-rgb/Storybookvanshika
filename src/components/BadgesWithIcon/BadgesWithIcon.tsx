import React from 'react';
import { Truck, Store } from 'lucide-react';
import './BadgesWithIcon.css';

export interface BadgesWithIconProps {
  /** Figma variant parameter: State */
  State?: 'self delivery' | 'myhub delivery';
  /** Optional custom text label */
  label?: string;
  /** Enable Dark Mode state */
  darkMode?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * **badges with icon** React Component
 * Exact 1-to-1 synchronized implementation from Figma Design System layer `badges with icon`.
 */
export const BadgesWithIcon: React.FC<BadgesWithIconProps> = ({
  State = 'self delivery',
  label,
  darkMode = false,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const isMyHub = String(State).toLowerCase() === 'myhub delivery';
  const stateClass = isMyHub ? 'myhub-delivery' : 'self-delivery';

  const defaultText = isMyHub ? 'My Hub delivery' : 'Self delivery';
  const displayLabel = label || defaultText;

  const IconComponent = isMyHub ? Store : Truck;
  const isInteractive = Boolean(onClick);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`uedp-badgeswithicon uedp-badgeswithicon--${stateClass} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={style}
      onClick={onClick}
      role={isInteractive ? 'button' : 'status'}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      aria-label={`Badge: ${displayLabel}`}
      {...props}
    >
      <IconComponent size={14} className="uedp-badgeswithicon-icon" aria-hidden="true" />
      <span className="uedp-badgeswithicon-text">{displayLabel}</span>
    </div>
  );
};
