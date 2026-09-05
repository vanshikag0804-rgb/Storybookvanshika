import React from 'react';
import './RadioButton.css';

export interface RadioButtonProps {
  /** Variant parameter from Figma: State */
  State?: 'Unselected' | 'Selected';
  /** Controlled checked state override */
  checked?: boolean;
  /** Optional label text adjacent to radio button */
  label?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * **Radio Button** React Component
 * Synchronized with Figma Design System (Node 85:77).
 */
export const RadioButton: React.FC<RadioButtonProps> = ({
  State = 'Unselected',
  checked,
  label,
  disabled = false,
  onChange,
  onClick,
  className = '',
  style,
  ...props
}) => {
  const isSelected = checked !== undefined ? checked : State === 'Selected';

  const handleClick = () => {
    if (disabled) return;
    if (onClick) onClick();
    if (onChange) onChange(!isSelected);
  };

  const stateClass = isSelected ? 'uedp-radiobutton--selected' : 'uedp-radiobutton--unselected';

  return (
    <label
      className={`uedp-radiobutton-wrapper ${disabled ? 'uedp-radiobutton-wrapper--disabled' : ''} ${className}`}
      style={style}
    >
      <div
        className={`uedp-radiobutton ${stateClass}`}
        onClick={handleClick}
        role="radio"
        aria-checked={isSelected}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {isSelected && <div className="uedp-radiobutton-dot" />}
      </div>
      {label && <span className="uedp-radiobutton-label">{label}</span>}
    </label>
  );
};
