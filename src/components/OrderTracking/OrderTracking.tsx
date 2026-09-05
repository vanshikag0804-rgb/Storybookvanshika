import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import './OrderTracking.css';

export interface TimelineStep {
  label: string;
  state: 'completed' | 'current' | 'pending';
}

export interface OrderTrackingProps {
  /** Figma variant parameter: Status */
  Status?: 'Default' | 'delivered' | 'cancelled' | 'opend';
  title?: string;
  steps?: TimelineStep[];
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

const DEFAULT_TIMELINE_STEPS: TimelineStep[] = [
  { label: 'Looking for a near by driver', state: 'completed' },
  { label: 'Driver on the way to pickup', state: 'current' },
  { label: 'Driver Arrived at Pick up', state: 'pending' },
  { label: 'Driver Dispatched to delivery', state: 'pending' },
  { label: 'Order Delivered', state: 'pending' },
];

/**
 * **Order Tracking.** React Component
 * Exact 1-to-1 synchronized implementation from Figma Design System layer `Order Tracking.` (Node 188:7933).
 */
export const OrderTracking: React.FC<OrderTrackingProps> = ({
  Status = 'Default',
  title,
  steps = DEFAULT_TIMELINE_STEPS,
  className = '',
  style,
  onClick,
  ...props
}) => {
  const initialOpen = Status.toLowerCase() === 'opend';
  const [isOpen, setIsOpen] = useState(initialOpen);

  const statusLower = Status.toLowerCase();
  const effectiveStatus = isOpen ? 'opend' : statusLower;
  const stateClass = effectiveStatus.replace(/\s+/g, '-');

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  const getCollapsedTitle = () => {
    if (title) return title;
    if (statusLower === 'delivered') return 'Order Delivered';
    if (statusLower === 'cancelled') return 'Order Cancelled';
    return 'Driver Assigned';
  };

  return (
    <div
      className={`uedp-ordertracking uedp-ordertracking--${stateClass} ${className}`}
      style={style}
      {...props}
    >
      {effectiveStatus === 'opend' ? (
        <div className="uedp-ordertracking-expanded">
          <div className="uedp-ordertracking-header" onClick={handleToggle}>
            <div className="uedp-ordertracking-timeline">
              {steps.map((step, idx) => {
                const isLast = idx === steps.length - 1;
                return (
                  <div key={idx} className={`uedp-ordertracking-step uedp-ordertracking-step--${step.state}`}>
                    <div className="uedp-ordertracking-step-indicator">
                      <div className="uedp-ordertracking-dot">
                        {step.state === 'completed' && <Check size={12} strokeWidth={3} className="uedp-ordertracking-check" />}
                        {step.state === 'current' && <div className="uedp-ordertracking-inner-dot" />}
                      </div>
                      {!isLast && <div className="uedp-ordertracking-line" />}
                    </div>
                    <span className="uedp-ordertracking-step-label">{step.label}</span>
                  </div>
                );
              })}
            </div>
            <button type="button" className="uedp-ordertracking-toggle-btn" aria-label="Collapse">
              <ChevronUp size={20} className="uedp-ordertracking-chevron" />
            </button>
          </div>
        </div>
      ) : (
        <div className="uedp-ordertracking-collapsed" onClick={handleToggle}>
          <div className="uedp-ordertracking-collapsed-left">
            <div className="uedp-ordertracking-indicator-circle">
              <div className="uedp-ordertracking-indicator-inner" />
            </div>
            <span className="uedp-ordertracking-collapsed-title">{getCollapsedTitle()}</span>
          </div>
          <button type="button" className="uedp-ordertracking-toggle-btn" aria-label="Expand">
            <ChevronDown size={20} className="uedp-ordertracking-chevron" />
          </button>
        </div>
      )}
    </div>
  );
};

