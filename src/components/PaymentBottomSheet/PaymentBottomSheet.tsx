import React, { useState, useEffect } from 'react';
import './PaymentBottomSheet.css';

export interface PaymentBottomSheetProps {
  /** Variant parameter from Figma: State */
  State?: 'UPI' | 'Cash' | 'Card';
  mobileNumber?: string;
  customerName?: string;
  totalBill?: string;
  discount?: string;
  primaryAmount?: string;
  cashIfAny?: string;
  /** Enable Dark Mode state */
  darkMode?: boolean;
  onStateChange?: (state: 'UPI' | 'Cash' | 'Card') => void;
  onClose?: () => void;
  onProceed?: () => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * **Payment Bottom Sheet** React Component
 * Synchronized with Figma Design System (Node 94:8538).
 */
export const PaymentBottomSheet: React.FC<PaymentBottomSheetProps> = ({
  State = 'UPI',
  mobileNumber = '',
  customerName = '',
  totalBill = 'Rs.2498.00',
  discount = '',
  primaryAmount = '60.00',
  cashIfAny = '',
  darkMode = false,
  onStateChange,
  onClose,
  onProceed,
  className = '',
  style,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState<'UPI' | 'Cash' | 'Card'>(State);
  const [mobile, setMobile] = useState(mobileNumber);
  const [name, setName] = useState(customerName);
  const [bill, setBill] = useState(totalBill);
  const [disc, setDisc] = useState(discount);
  const [amount, setAmount] = useState(primaryAmount);
  const [cash, setCash] = useState(cashIfAny);

  useEffect(() => {
    setActiveTab(State);
  }, [State]);

  const handleTabClick = (tab: 'UPI' | 'Cash' | 'Card') => {
    setActiveTab(tab);
    if (onStateChange) {
      onStateChange(tab);
    }
  };

  const variantClasses = [
    'uedp-paymentbottomsheet',
    `uedp-paymentbottomsheet--${activeTab.toLowerCase()}`,
    darkMode ? 'uedp-dark' : ''
  ].filter(Boolean).join(' ');

  return (
    <div
      className={`${variantClasses} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={style}
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-sheet-title"
      {...props}
    >
      <div className="uedp-paymentbottomsheet-content">
        {/* Drag Handle Bar */}
        <div className="uedp-paymentbottomsheet-handle-wrapper" aria-hidden="true">
          <div className="uedp-paymentbottomsheet-handle" />
        </div>

        {/* Title */}
        <h2 id="payment-sheet-title" className="uedp-paymentbottomsheet-title">
          Select Payment method
        </h2>

        {/* Switching Tabs Segmented Bar */}
        <div className="uedp-paymentbottomsheet-tabs" role="radiogroup" aria-label="Payment Method">
          {(['UPI', 'Card', 'Cash'] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                className={`uedp-paymentbottomsheet-tab ${isActive ? 'uedp-paymentbottomsheet-tab--active' : ''}`}
                onClick={() => handleTabClick(tab)}
                role="radio"
                aria-checked={isActive}
                aria-label={`Pay with ${tab}`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Form Fields Container */}
        <div className="uedp-paymentbottomsheet-form">
          {/* Customer Mobile Number */}
          <div className="uedp-paymentbottomsheet-field">
            <label htmlFor="customer-mobile" className="uedp-paymentbottomsheet-label">Customer mobile number</label>
            <div className="uedp-paymentbottomsheet-input-wrapper">
              <input
                id="customer-mobile"
                type="text"
                className="uedp-paymentbottomsheet-input"
                placeholder="Enter Mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                aria-label="Customer mobile number"
              />
            </div>
          </div>

          {/* Customer Name */}
          <div className="uedp-paymentbottomsheet-field">
            <label htmlFor="customer-name" className="uedp-paymentbottomsheet-label">Customer name</label>
            <div className="uedp-paymentbottomsheet-input-wrapper">
              <input
                id="customer-name"
                type="text"
                className="uedp-paymentbottomsheet-input"
                placeholder="Enter Customer name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Customer name"
              />
            </div>
          </div>

          {/* Total Bill & Discount Row */}
          <div className="uedp-paymentbottomsheet-row">
            <div className="uedp-paymentbottomsheet-field uedp-paymentbottomsheet-field--bill">
              <label htmlFor="total-bill" className="uedp-paymentbottomsheet-label">Total Bill</label>
              <div className="uedp-paymentbottomsheet-input-wrapper">
                <input
                  id="total-bill"
                  type="text"
                  className="uedp-paymentbottomsheet-input uedp-paymentbottomsheet-input--bill"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  aria-label="Total bill amount"
                />
              </div>
            </div>

            <div className="uedp-paymentbottomsheet-field uedp-paymentbottomsheet-field--discount">
              <label htmlFor="discount-amt" className="uedp-paymentbottomsheet-label">Discount (in Rs)</label>
              <div className="uedp-paymentbottomsheet-input-wrapper">
                <input
                  id="discount-amt"
                  type="text"
                  className="uedp-paymentbottomsheet-input"
                  placeholder="Enter Discount (if any)..."
                  value={disc}
                  onChange={(e) => setDisc(e.target.value)}
                  aria-label="Discount in Rupees"
                />
              </div>
            </div>
          </div>

          {/* Method-Specific Payment Amount Row */}
          {activeTab === 'Cash' ? (
            <div className="uedp-paymentbottomsheet-field">
              <label htmlFor="amount-cash" className="uedp-paymentbottomsheet-label">Amount Received in Cash</label>
              <div className="uedp-paymentbottomsheet-input-wrapper uedp-paymentbottomsheet-input-wrapper--focused">
                <input
                  id="amount-cash"
                  type="text"
                  className="uedp-paymentbottomsheet-input uedp-paymentbottomsheet-input--highlighted"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  aria-label="Amount received in cash"
                />
              </div>
            </div>
          ) : (
            <div className="uedp-paymentbottomsheet-row uedp-paymentbottomsheet-row--split">
              <div className="uedp-paymentbottomsheet-field uedp-paymentbottomsheet-field--half">
                <label htmlFor="amount-digital" className="uedp-paymentbottomsheet-label">
                  {activeTab === 'UPI' ? 'Amount from UPI' : 'Amount from Card'}
                </label>
                <div className="uedp-paymentbottomsheet-input-wrapper uedp-paymentbottomsheet-input-wrapper--focused">
                  <input
                    id="amount-digital"
                    type="text"
                    className="uedp-paymentbottomsheet-input uedp-paymentbottomsheet-input--highlighted"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    aria-label={activeTab === 'UPI' ? 'Amount from UPI' : 'Amount from Card'}
                  />
                </div>
              </div>

              <div className="uedp-paymentbottomsheet-field uedp-paymentbottomsheet-field--half">
                <label htmlFor="cash-if-any" className="uedp-paymentbottomsheet-label">Cash if any</label>
                <div className="uedp-paymentbottomsheet-input-wrapper">
                  <input
                    id="cash-if-any"
                    type="text"
                    className="uedp-paymentbottomsheet-input"
                    placeholder=""
                    value={cash}
                    onChange={(e) => setCash(e.target.value)}
                    aria-label="Cash if any"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="uedp-paymentbottomsheet-footer">
          {/* Info Banner */}
          <div className="uedp-paymentbottomsheet-info">
            <svg
              className="uedp-paymentbottomsheet-info-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="6.5" stroke="#475569" strokeWidth="1.33" />
              <path d="M8 7.5V11" stroke="#475569" strokeWidth="1.33" strokeLinecap="round" />
              <circle cx="8" cy="5" r="0.75" fill="#475569" />
            </svg>
            <span className="uedp-paymentbottomsheet-info-text">
              Please select your suitable payment type to proceed billing
            </span>
          </div>

          {/* Button Group */}
          <div className="uedp-paymentbottomsheet-actions">
            <button
              type="button"
              className="uedp-paymentbottomsheet-btn uedp-paymentbottomsheet-btn--secondary"
              onClick={onClose}
              aria-label="Close payment modal"
            >
              Close
            </button>
            <button
              type="button"
              className="uedp-paymentbottomsheet-btn uedp-paymentbottomsheet-btn--primary"
              onClick={onProceed}
              aria-label="Proceed with payment"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
