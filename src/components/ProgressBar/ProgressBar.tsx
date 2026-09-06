import React from 'react';
import './ProgressBar.css';

export interface ProgressBarProps {
  /** Variant parameter from Figma: State */
  State?: 'Default' | 'Error' | 'Success';
  /** Progress percentage (0 to 100). Default is 50 per Figma spec */
  progress?: number;
  /** Enable Dark Mode state */
  darkMode?: boolean;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * **Progress Bar** React Component
 * Synchronized with Figma Design System (Node 94:165).
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  State = 'Default',
  progress = 50,
  darkMode = false,
  className = '',
  style,
  ...props
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  const variantClass = `uedp-progressbar--${State.toLowerCase()}`;

  return (
    <div
      className={`uedp-progressbar ${variantClass} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={style}
      role="progressbar"
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={props['aria-label'] || props.ariaLabel || `Progress: ${clampedProgress}%`}
      {...props}
    >
      <div
        className="uedp-progressbar-fill"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};
