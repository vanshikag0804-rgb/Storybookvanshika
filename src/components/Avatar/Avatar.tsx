import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  /** Figma variant parameter: State */
  State?: 'Default';
  /** Avatar diameter in pixels (default: 40) */
  size?: number;
  /** Image URL for avatar picture */
  src?: string;
  /** Alt text if image is used */
  alt?: string;
  /** Enable Dark Mode state */
  darkMode?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * **Avatar** React Component
 * Exact 1-to-1 pixel synchronized implementation from Figma node 85:101 with color #3488DC.
 */
export const Avatar: React.FC<AvatarProps> = ({
  State = 'Default',
  size = 40,
  src,
  alt = 'User Avatar',
  darkMode = false,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const customStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    aspectRatio: '1 / 1',
    ...style,
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  const isInteractive = Boolean(onClick);

  return (
    <div
      className={`uedp-avatar uedp-avatar--${String(State).toLowerCase()} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={customStyle}
      onClick={onClick}
      role={isInteractive ? 'button' : 'img'}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      aria-label={alt || 'User Avatar'}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="uedp-avatar-img" />
      ) : (
        <svg
          className="uedp-avatar-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Head Vector - Figma Node 85:93 */}
          <circle cx="12" cy="7" r="4" fill="#3488DC" stroke="#3488DC" strokeWidth="1.5" />
          {/* Shoulder Arc Vector - Figma Node 85:92 */}
          <path
            d="M 5 21 C 5 15, 19 15, 19 21"
            stroke="#3488DC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
};
