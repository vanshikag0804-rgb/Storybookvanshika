import React, { useState, useEffect } from 'react';
import './StoreHeader.css';

export interface StoreHeaderProps {
  /** Variant parameter from Figma: State */
  State?: 'Offline' | 'online' | 'Online';
  storeName?: string;
  onSwitchStore?: () => void;
  onToggleState?: (isOnline: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * **Store Header** React Component
 * Synchronized with Figma Design System (Node 106:9394).
 */
export const StoreHeader: React.FC<StoreHeaderProps> = ({
  State = 'Offline',
  storeName = 'Store Name',
  onSwitchStore,
  onToggleState,
  className = '',
  style,
  ...props
}) => {
  const [isOnline, setIsOnline] = useState(
    State.toLowerCase() === 'online'
  );

  useEffect(() => {
    setIsOnline(State.toLowerCase() === 'online');
  }, [State]);

  const handleToggle = () => {
    const nextState = !isOnline;
    setIsOnline(nextState);
    if (onToggleState) onToggleState(nextState);
  };

  const stateClass = isOnline ? 'uedp-storeheader--online' : 'uedp-storeheader--offline';

  return (
    <div
      className={`uedp-storeheader ${stateClass} ${className}`}
      style={style}
      {...props}
    >
      {/* Left Store Info Section Frame 2147223622 (172px x 48px) */}
      <div className="uedp-storeheader-left">
        {/* Store QR Avatar Icon (48px x 48px) */}
        <div className="uedp-storeheader-avatar">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* QR / Store Scanner Vector */}
            <path
              d="M4 8V6C4 4.89543 4.89543 4 6 4H8"
              stroke="#2470B8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 4H18C19.1046 4 20 4.89543 20 6V8"
              stroke="#2470B8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M20 16V18C20 19.1046 19.1046 20 18 20H16"
              stroke="#2470B8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8 20H6C4.89543 20 4 19.1046 4 18V16"
              stroke="#2470B8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect x="9" y="9" width="6" height="6" rx="1" fill="#2470B8" />
          </svg>
        </div>

        {/* Store Title & Switch Store Action Frame 1984079289 */}
        <div className="uedp-storeheader-info">
          <h3 className="uedp-storeheader-title">{storeName}</h3>
          
          {/* Switch Store Frame 1984079302 */}
          <button
            type="button"
            className="uedp-storeheader-switch-btn"
            onClick={onSwitchStore}
          >
            <span>Switch Store</span>
            <svg
              className="uedp-storeheader-chevron"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6L8 11L13 6"
                stroke="#2470B8"
                strokeWidth="1.44"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Toggle Switch Section Frame 2147223621 (60px x 32px) */}
      <div className="uedp-storeheader-right">
        <button
          type="button"
          className={`uedp-storeheader-toggle ${
            isOnline ? 'uedp-storeheader-toggle--active' : ''
          }`}
          onClick={handleToggle}
          role="switch"
          aria-checked={isOnline}
          aria-label="Toggle Online/Offline state"
        >
          <div className="uedp-storeheader-toggle-knob" />
        </button>
      </div>
    </div>
  );
};
