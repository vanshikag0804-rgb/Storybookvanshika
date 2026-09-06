import React, { useState, useEffect } from 'react';
import './ProductCard.css';

export interface ProductCardProps {
  /** Variant parameter from Figma: State */
  State?: 'Default' | 'Added' | 'Edit' | 'Low Stock' | 'Inactive';
  title?: string;
  description?: string;
  price?: string;
  originalPrice?: string;
  imageSrc?: string;
  quantity?: number;
  /** Enable Dark Mode state */
  darkMode?: boolean;
  onAdd?: () => void;
  onQuantityChange?: (newQty: number) => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * **Product Card** React Component
 * Synchronized with Figma Design System (Node 106:9050).
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  State = 'Default',
  title = 'Turmeric Powder',
  description = 'Enhance your dishes with our vibrant',
  price = '₹187',
  originalPrice = '₹220',
  imageSrc = '/assets/turmeric_powder.jpg',
  quantity = 1,
  darkMode = false,
  onAdd,
  onQuantityChange,
  className = '',
  style,
  ...props
}) => {
  const [internalQty, setInternalQty] = useState(
    State === 'Added' || State === 'Edit' ? Math.max(1, quantity) : 0
  );

  useEffect(() => {
    if (State === 'Added' || State === 'Edit') {
      setInternalQty(Math.max(1, quantity));
    } else {
      setInternalQty(0);
    }
  }, [State, quantity]);

  const handleAddClick = () => {
    if (State === 'Inactive') return;
    const newQty = 1;
    setInternalQty(newQty);
    if (onAdd) onAdd();
    if (onQuantityChange) onQuantityChange(newQty);
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (State === 'Inactive') return;
    const newQty = internalQty + 1;
    setInternalQty(newQty);
    if (onQuantityChange) onQuantityChange(newQty);
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (State === 'Inactive') return;
    const newQty = Math.max(0, internalQty - 1);
    setInternalQty(newQty);
    if (onQuantityChange) onQuantityChange(newQty);
  };

  const isInactive = State === 'Inactive';
  const isLowStock = State === 'Low Stock';
  const isEditMode = State === 'Edit';
  const showQuantityControls = (State === 'Added' || State === 'Edit' || internalQty > 0) && !isInactive;

  const variantClass = `uedp-productcard--${State.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div
      className={`uedp-productcard ${variantClass} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={style}
      {...props}
    >
      <div className="uedp-productcard-inner">
        {/* Product Image Frame 1984079131 (110px x 110px) */}
        <div className="uedp-productcard-img-container">
          <img
            src={imageSrc}
            alt={title}
            className="uedp-productcard-img"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {/* Low Stock Warning Banner Stacked at Bottom of Image */}
          {isLowStock && (
            <div className="uedp-productcard-lowstock-banner">
              <svg
                className="uedp-productcard-caution-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2L14.5 13H1.5L8 2Z"
                  stroke="#B45309"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8 6V9" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="11" r="0.75" fill="#B45309" />
              </svg>
              <span className="uedp-productcard-lowstock-text">Low Stock</span>
            </div>
          )}
        </div>

        {/* Product Info Section Frame 1984079135 (110px x 140px) */}
        <div className="uedp-productcard-info">
          <div className="uedp-productcard-text-block">
            {/* Frame 1984079133 (Title & Subtitle) */}
            <div className="uedp-productcard-title-group">
              <h3 className="uedp-productcard-title">{title}</h3>
              <p className="uedp-productcard-desc">{description}</p>
            </div>

            {/* Frame 1984079635 (Price Row) */}
            <div className="uedp-productcard-price-row">
              <span className="uedp-productcard-price">{price}</span>
              {originalPrice && (
                <span className="uedp-productcard-mrp">{originalPrice}</span>
              )}
            </div>
          </div>

          {/* Action / Quantity Control Pill Button */}
          {isInactive ? (
            <div className="uedp-productcard-pill uedp-productcard-pill--inactive" aria-disabled="true">
              <span className="uedp-productcard-pill-text">Inactive</span>
            </div>
          ) : showQuantityControls ? (
            <div
              className={`uedp-productcard-pill uedp-productcard-pill--active ${
                isEditMode ? 'uedp-productcard-pill--edit' : ''
              }`}
              role="group"
              aria-label={`Quantity selector for ${title}`}
            >
              {/* Minus Button */}
              <button
                type="button"
                className="uedp-productcard-qty-btn"
                onClick={handleDecrease}
                aria-label={`Decrease quantity of ${title}`}
              >
                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" aria-hidden="true">
                  <path
                    d="M1 1H11"
                    stroke={isEditMode ? '#256FB7' : '#2262A0'}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Quantity Value Box */}
              <div className="uedp-productcard-qty-val" aria-live="polite" aria-label={`Current quantity ${internalQty}`}>
                <span>{internalQty}</span>
              </div>

              {/* Plus Button */}
              <button
                type="button"
                className="uedp-productcard-qty-btn"
                onClick={handleIncrease}
                aria-label={`Increase quantity of ${title}`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M6 1V11M1 6H11"
                    stroke={isEditMode ? '#256FB7' : '#2262A0'}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="uedp-productcard-pill uedp-productcard-pill--add"
              onClick={handleAddClick}
              aria-label={`Add ${title} to cart`}
            >
              <span className="uedp-productcard-pill-text">Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
