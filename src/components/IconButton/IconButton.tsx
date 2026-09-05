import React from 'react';
import { Plus } from 'lucide-react';
import './IconButton.css';

export interface IconButtonProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Disabled' | 'Pressed';
  /** Optional icon override */
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * **Icon Button** React Component
 * Exact 1-to-1 synchronized implementation from Figma Design System layer `Icon Button`.
 */
export const IconButton: React.FC<IconButtonProps> = ({
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
      className={`uedp-iconbutton uedp-iconbutton--${stateClass} ${className}`}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {icon || <Plus size={24} strokeWidth={1.5} className="uedp-iconbutton-icon" />}
    </button>
  );
};
