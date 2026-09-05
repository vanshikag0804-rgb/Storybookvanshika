import React, { useState, useEffect } from 'react';
import './SearchField.css';

export interface SearchFieldProps {
  /** Variant parameter from Figma: State */
  State?: 'Default' | 'Disabled' | 'Filled' | 'Focused';
  placeholder?: string;
  value?: string;
  onScanClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * **Search Field** React Component
 * Synchronized with Figma Design System (Node 81:11296).
 */
export const SearchField: React.FC<SearchFieldProps> = ({
  State = 'Default',
  placeholder = 'Search or Scan',
  value = '',
  onScanClick,
  onChange,
  className = '',
  style,
  ...props
}) => {
  const [internalVal, setInternalVal] = useState(
    State === 'Filled' ? (value || 'General Store Supplies') : value
  );
  const [isFocused, setIsFocused] = useState(State === 'Focused');

  useEffect(() => {
    if (State === 'Filled') {
      setInternalVal(value || 'General Store Supplies');
    } else {
      setInternalVal(value);
    }
    setIsFocused(State === 'Focused');
  }, [State, value]);

  const isDisabled = State === 'Disabled';
  const effectiveState = isDisabled
    ? 'disabled'
    : isFocused
    ? 'focused'
    : internalVal
    ? 'filled'
    : 'default';

  const iconStroke = isDisabled
    ? '#94A3B8'
    : effectiveState === 'focused'
    ? '#3488DC'
    : '#475569';

  const scanIconStroke = isDisabled ? '#94A3B8' : '#475569';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    setInternalVal(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div
      className={`uedp-searchfield uedp-searchfield--${effectiveState} ${className}`}
      style={style}
      {...props}
    >
      {/* Search Magnifying Glass Icon (24px x 24px) */}
      <svg
        className="uedp-searchfield-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="7" stroke={iconStroke} strokeWidth="1.5" />
        <path d="M16 16L20 20" stroke={iconStroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Input Field */}
      <input
        type="text"
        className="uedp-searchfield-input"
        placeholder={placeholder}
        value={internalVal}
        disabled={isDisabled}
        onChange={handleChange}
        onFocus={() => !isDisabled && setIsFocused(true)}
        onBlur={() => !isDisabled && setIsFocused(State === 'Focused')}
      />

      {/* Scan / Barcode Viewfinder Icon (24px x 24px) */}
      <button
        type="button"
        className="uedp-searchfield-scan-btn"
        onClick={onScanClick}
        disabled={isDisabled}
        aria-label="Scan item"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 8V6C4 4.89543 4.89543 4 6 4H8"
            stroke={scanIconStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 4H18C19.1046 4 20 4.89543 20 6V8"
            stroke={scanIconStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M20 16V18C20 19.1046 19.1046 20 18 20H16"
            stroke={scanIconStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 20H6C4.89543 20 4 19.1046 4 18V16"
            stroke={scanIconStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};
