import React, { useState } from 'react';
import './OTPCell.css';

export interface OTPCellProps {
  /** Figma variant parameter: State */
  State?: 'Empty' | 'Error' | 'Focused' | 'Filled';
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (val: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * **OTP Cell** React Component
 * Exact 1-to-1 synchronized implementation from Figma Design System layer `OTP Cell` (Node 94:120).
 */
export const OTPCell: React.FC<OTPCellProps> = ({
  State = 'Empty',
  value = '',
  placeholder = '',
  disabled = false,
  onChange,
  onFocus,
  onBlur,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const [isFocusedState, setIsFocusedState] = useState(false);

  // Compute effective state
  let computedState = State;
  if (isFocusedState && State !== 'Error') {
    computedState = 'Focused';
  } else if (value && State !== 'Error' && State !== 'Focused') {
    computedState = 'Filled';
  }

  const stateClass = String(computedState).toLowerCase().replace(/\s+/g, '-');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (onChange) {
      onChange(val.slice(-1));
    }
  };

  return (
    <div
      className={`uedp-otpcell uedp-otpcell--${stateClass} ${disabled ? 'uedp-otpcell--disabled' : ''} ${className}`}
      style={style}
      onClick={onClick}
    >
      <input
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className="uedp-otpcell-input"
        onChange={handleChange}
        onFocus={() => {
          setIsFocusedState(true);
          if (onFocus) onFocus();
        }}
        onBlur={() => {
          setIsFocusedState(false);
          if (onBlur) onBlur();
        }}
        {...props}
      />
    </div>
  );
};

