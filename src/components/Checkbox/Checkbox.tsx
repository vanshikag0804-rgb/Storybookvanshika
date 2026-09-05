import React, { useState, useEffect } from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  /** Figma variant parameter: State */
  State?: 'Unchecked' | 'Disabled' | 'Checked';
  /** Optional label text accompanying the checkbox */
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * **Checkbox** React Component
 * Exact 1-to-1 synchronized implementation from Figma Design System layer `Checkbox`.
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  State = 'Unchecked',
  label,
  checked: controlledChecked,
  onChange,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const isDisabled = State.toLowerCase() === 'disabled';
  const isInitiallyChecked = State.toLowerCase() === 'checked';

  const [isChecked, setIsChecked] = useState<boolean>(
    controlledChecked !== undefined ? controlledChecked : isInitiallyChecked
  );

  useEffect(() => {
    if (controlledChecked !== undefined) {
      setIsChecked(controlledChecked);
    }
  }, [controlledChecked]);

  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled) return;
    const nextState = !isChecked;
    setIsChecked(nextState);
    onChange?.(nextState);
    onClick?.();
  };

  const currentState = isDisabled ? 'disabled' : isChecked ? 'checked' : 'unchecked';

  return (
    <label
      className={`uedp-checkbox uedp-checkbox--${currentState} ${className}`}
      style={style}
      onClick={handleClick}
      {...props}
    >
      <div className="uedp-checkbox-box">
        {isChecked && (
          <svg
            className="uedp-checkbox-check"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 3.5 8 L 6.5 11 L 12.5 4.5"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && <span className="uedp-checkbox-label">{label}</span>}
    </label>
  );
};
