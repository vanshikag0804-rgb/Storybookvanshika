import React from 'react';
import { MoreVertical } from 'lucide-react';
import './InventoryListItem.css';

export interface InventoryListItemProps {
  /** Figma variant parameter: Status */
  Status?: 'Default' | 'Low Stock' | 'Out of Stock' | 'Inactive';
  title?: string;
  brand?: string;
  category?: string;
  variantText?: string;
  stock?: number;
  maxStock?: number;
  price?: string;
  originalPrice?: string;
  image?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

const DEFAULT_PERFUME_IMAGE = '/assets/perfume_coco_chanel.jpg';

/**
 * **Inventory List Item** React Component
 * Exact 1-to-1 synchronized implementation from Figma Design System layer `Inventory List Item` (Node 106:9640).
 */
export const InventoryListItem: React.FC<InventoryListItemProps> = ({
  Status = 'Default',
  title = 'CoCo Chanel',
  brand = 'Boss',
  category = 'Electronics',
  variantText = '50 ml',
  stock = 87,
  maxStock = 100,
  price = '₹8,500',
  originalPrice = '₹21,000',
  image = DEFAULT_PERFUME_IMAGE,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const stateClass = String(Status).toLowerCase().replace(/\s+/g, '-');
  const fillPercent = Status === 'Out of Stock' ? 0 : Math.min(100, Math.max(0, (stock / maxStock) * 100));

  return (
    <div
      className={`uedp-inventorylistitem uedp-inventorylistitem--${stateClass} ${className}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      <div className="uedp-inventorylistitem-image-container">
        <img
          src={image}
          alt={title}
          className="uedp-inventorylistitem-img"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=300&q=80';
          }}
        />
        {variantText && (
          <div className="uedp-inventorylistitem-badge-overlay">
            <span>{variantText}</span>
          </div>
        )}
      </div>

      <div className="uedp-inventorylistitem-content">
        <div className="uedp-inventorylistitem-top">
          <span className="uedp-inventorylistitem-title">{title}</span>
          <button type="button" className="uedp-inventorylistitem-more-btn" aria-label="More options">
            <MoreVertical size={16} className="uedp-inventorylistitem-more-icon" />
          </button>
        </div>

        <div className="uedp-inventorylistitem-middle">
          <span className="uedp-inventorylistitem-brand">{brand}</span>
          <span className="uedp-inventorylistitem-dot">•</span>
          <span className="uedp-inventorylistitem-category">{category}</span>
        </div>

        <div className="uedp-inventorylistitem-bottom">
          <div className="uedp-inventorylistitem-stock">
            <div className="uedp-inventorylistitem-stock-bar-track">
              <div
                className="uedp-inventorylistitem-stock-bar-fill"
                style={{ width: `${fillPercent}%` }}
              />
            </div>
            <span className="uedp-inventorylistitem-stock-text">Stock: {stock}</span>
          </div>

          <div className="uedp-inventorylistitem-price-block">
            <span className="uedp-inventorylistitem-price">{price}</span>
            {originalPrice && (
              <span className="uedp-inventorylistitem-original-price">{originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


