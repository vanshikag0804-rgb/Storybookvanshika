import React, { useState } from 'react';
import './Chip.css';

export interface ChipProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Selected' | 'Disabled';
  /** Text label content for the chip */
  label?: string;
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
  children,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const isDisabled = State.toLowerCase() === 'disabled';
  const stateClass = String(State).toLowerCase().replace(/\s+/g, '-');
  const displayLabel = children || label;

  return (
    <button
      className={`uedp-chip uedp-chip--${stateClass} ${className}`}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      <span className="uedp-chip-label">{displayLabel}</span>
    </button>
  );
};
