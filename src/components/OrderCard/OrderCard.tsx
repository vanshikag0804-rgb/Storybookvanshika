import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BadgesWithIcon } from '../BadgesWithIcon/BadgesWithIcon';
import { OrderTracking } from '../OrderTracking/OrderTracking';
import { CTA } from '../CTA/CTA';
import './OrderCard.css';

export interface OrderCardProps {
  /** Figma variant parameter: State */
  State?: 'new' | 'active' | 'completed' | 'cancelled';
  orderId?: string;
  itemsCount?: string;
  amount?: string;
  address?: string;
  deliveryType?: 'myhub' | 'self';
  /** Enable Dark Mode state */
  darkMode?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

/**
 * **Order card** React Component
 * Exact 1-to-1 synchronized implementation from Figma Design System layer `Order card` (Node 216:8191).
 */
export const OrderCard: React.FC<OrderCardProps> = ({
  State = 'new',
  orderId = 'Order #123456',
  itemsCount = '3 Items',
  amount = '₹1,250',
  address = 'Flat No. 203, Sri Venkateswara Residency, Madhapur, Hyderabad, Telangana – 500081',
  deliveryType = 'myhub',
  darkMode = false,
  onPrimaryClick,
  onSecondaryClick,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const stateClass = String(State).toLowerCase().replace(/\s+/g, '-');

  const getPrimaryButtonLabel = () => {
    switch (stateClass) {
      case 'new':
        return 'Accept';
      case 'active':
        return 'Track Order';
      case 'completed':
        return 'Reorder';
      case 'cancelled':
        return 'Contact Support';
      default:
        return 'Accept';
    }
  };

  const getTrackingStatus = (): 'Default' | 'delivered' | 'cancelled' | 'opend' => {
    switch (stateClass) {
      case 'new':
        return 'Default';
      case 'active':
        return 'opend';
      case 'completed':
        return 'delivered';
      case 'cancelled':
        return 'cancelled';
      default:
        return 'Default';
    }
  };

  const isInteractive = Boolean(onClick);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`uedp-ordercard uedp-ordercard--${stateClass} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={style}
      onClick={onClick}
      role={isInteractive ? 'button' : 'region'}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      aria-label={`Order summary ${orderId}, ${itemsCount}, total ${amount}`}
      {...props}
    >
      <div className="uedp-ordercard-header">
        <div className="uedp-ordercard-header-top">
          <span className="uedp-ordercard-id">{orderId}</span>
          <span className="uedp-ordercard-amount">{amount}</span>
        </div>
        <div className="uedp-ordercard-header-sub">
          <span className="uedp-ordercard-items">{itemsCount}</span>
          <button
            type="button"
            className="uedp-ordercard-icon-btn"
            aria-label={`Call customer for ${orderId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Phone size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="uedp-ordercard-address-block">
        <span className="uedp-ordercard-address">{address}</span>
        <button
          type="button"
          className="uedp-ordercard-map-btn"
          aria-label={`View delivery map for ${orderId}`}
          onClick={(e) => e.stopPropagation()}
        >
          <MapPin size={20} className="uedp-ordercard-map-icon" aria-hidden="true" />
        </button>
      </div>

      <div className="uedp-ordercard-badge-row">
        <BadgesWithIcon darkMode={darkMode} State={deliveryType === 'myhub' ? 'myhub delivery' : 'self delivery'} />
      </div>

      <div className="uedp-ordercard-tracking-row">
        <OrderTracking darkMode={darkMode} Status={getTrackingStatus()} />
      </div>

      <div className="uedp-ordercard-actions">
        <CTA
          type="Secondary"
          darkMode={darkMode}
          onClick={onSecondaryClick}
          className="uedp-ordercard-secondary-btn"
        >
          View Details
        </CTA>
        <CTA
          type="Primary"
          darkMode={darkMode}
          onClick={onPrimaryClick}
          className="uedp-ordercard-primary-btn"
        >
          {getPrimaryButtonLabel()}
        </CTA>
      </div>
    </div>
  );
};


