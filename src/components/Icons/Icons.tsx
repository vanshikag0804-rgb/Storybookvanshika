import React from 'react';
import { Search } from 'lucide-react';
import './Icons.css';

export interface IconsProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Disabled' | 'Pressed';
  /** Custom icon node override */
  icon?: React.ReactNode;
  /** Enable Dark Mode state */
  darkMode?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * **icons** React Component
 * Exact 1-to-1 synchronized implementation from Figma Design System layer `icons` (Node 82:38).
 */
export const Icons: React.FC<IconsProps> = ({
  State = 'Default',
  icon,
  darkMode = false,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const isDisabled = State.toLowerCase() === 'disabled';
  const stateClass = String(State).toLowerCase().replace(/\s+/g, '-');

  return (
    <button
      className={`uedp-icons uedp-icons--${stateClass} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={style}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={props['aria-label'] || props.ariaLabel || 'Search icon button'}
      onClick={onClick}
      {...props}
    >
      {icon || <Search size={24} strokeWidth={1.5} className="uedp-icons-icon" aria-hidden="true" />}
    </button>
  );
};


