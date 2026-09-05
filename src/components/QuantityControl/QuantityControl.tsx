import React, { useState, useEffect } from 'react';
import './QuantityControl.css';

export interface QuantityControlProps {
  /** Variant parameter from Figma: State */
  State?: 'Add' | 'Default' | 'Focused' | 'Ineactive' | 'Inactive';
  /** Quantity number value. Default is 1 per Figma spec */
  quantity?: number;
  onAdd?: () => void;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onQuantityChange?: (newQty: number) => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * **Quantity Control** React Component
 * Synchronized with Figma Design System (Node 106:9284).
 */
export const QuantityControl: React.FC<QuantityControlProps> = ({
  State = 'Add',
  quantity = 1,
  onAdd,
  onIncrease,
  onDecrease,
  onQuantityChange,
  className = '',
  style,
  ...props
}) => {
  const [currentQty, setCurrentQty] = useState(quantity);

  useEffect(() => {
    setCurrentQty(quantity);
  }, [quantity]);

  const isInactive = State === 'Ineactive' || State === 'Inactive';
  const isAddState = State === 'Add';
  const isFocusedState = State === 'Focused';

  const handleAddClick = () => {
    if (isInactive) return;
    const newQty = 1;
    setCurrentQty(newQty);
    if (onAdd) onAdd();
    if (onQuantityChange) onQuantityChange(newQty);
  };

  const handleDecreaseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInactive) return;
    const newQty = Math.max(0, currentQty - 1);
    setCurrentQty(newQty);
    if (onDecrease) onDecrease();
    if (onQuantityChange) onQuantityChange(newQty);
  };

  const handleIncreaseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInactive) return;
    const newQty = currentQty + 1;
    setCurrentQty(newQty);
    if (onIncrease) onIncrease();
    if (onQuantityChange) onQuantityChange(newQty);
  };

  const stateKey = State.toLowerCase().replace(/\s+/g, '-');
  const variantClass = `uedp-quantitycontrol--${stateKey}`;

  return (
    <div
      className={`uedp-quantitycontrol ${variantClass} ${className}`}
      style={style}
      {...props}
    >
      {isInactive ? (
        <span className="uedp-quantitycontrol-label">Inactive</span>
      ) : isAddState ? (
        <button
          type="button"
          className="uedp-quantitycontrol-add-btn"
          onClick={handleAddClick}
        >
          Add
        </button>
      ) : (
        <div className="uedp-quantitycontrol-counter-group">
          {/* Minus Button */}
          <button
            type="button"
            className="uedp-quantitycontrol-btn"
            onClick={handleDecreaseClick}
            aria-label="Decrease quantity"
          >
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
              <path d="M1 1H11" stroke="#256FB7" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Value Display Box */}
          <div
            className={`uedp-quantitycontrol-val-box ${
              isFocusedState ? 'uedp-quantitycontrol-val-box--focused' : ''
            }`}
          >
            <span>{currentQty}</span>
          </div>

          {/* Plus Button */}
          <button
            type="button"
            className="uedp-quantitycontrol-btn"
            onClick={handleIncreaseClick}
            aria-label="Increase quantity"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1V11M1 6H11" stroke="#256FB7" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
