import React from 'react';
import { Search } from 'lucide-react';
import './Icons.css';

export interface IconsProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Disabled' | 'Pressed';
  /** Custom icon node override */
  icon?: React.ReactNode;
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
  className = '',
  style,
  onClick,
  ...props
}) => {
  const isDisabled = State.toLowerCase() === 'disabled';
  const stateClass = String(State).toLowerCase().replace(/\s+/g, '-');

  return (
    <button
      className={`uedp-icons uedp-icons--${stateClass} ${className}`}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {icon || <Search size={24} strokeWidth={1.5} className="uedp-icons-icon" />}
    </button>
  );
};

