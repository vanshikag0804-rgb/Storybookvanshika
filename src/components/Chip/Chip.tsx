import React, { useState } from 'react';
import './Chip.css';

export interface ChipProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Selected' | 'Disabled';
  /** Text label content for the chip */
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
 * **Chip** React Component
 * Exact 1-to-1 synchronized implementation from Figma Design System layer `Chip`.
 */
export const Chip: React.FC<ChipProps> = ({
  State = 'Default',
  label = 'Grocery',
  darkMode = false,
  children,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const isDisabled = State.toLowerCase() === 'disabled';
  const stateClass = String(State).toLowerCase().replace(/\s+/g, '-');
  const displayLabel = children || label;

  const isSelected = State.toLowerCase() === 'selected';

  return (
    <button
      className={`uedp-chip uedp-chip--${stateClass} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={style}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-pressed={isSelected}
      aria-label={typeof displayLabel === 'string' ? displayLabel : undefined}
      onClick={onClick}
      {...props}
    >
      <span className="uedp-chip-label">{displayLabel}</span>
    </button>
  );
};

