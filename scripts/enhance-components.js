import fs from 'fs';
import path from 'path';

console.log('🎨 Enhancing React Component Visuals and CSS Token Aliases...');

const compDir = path.join(process.cwd(), 'src', 'components');

// 1. CTA Component Enhancement
fs.writeFileSync(path.join(compDir, 'CTA', 'CTA.tsx'), `import React from 'react';
import { Loader2 } from 'lucide-react';
import './CTA.css';

export interface CTAProps {
  /** Figma variant parameter: State */
  State?: 'Default' | 'Loading' | 'Disabled' | 'Pressed';
  /** Figma variant parameter: type */
  type?: 'Primary' | 'Secondary';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CTA: React.FC<CTAProps> = ({
  State = 'Default',
  type = 'Primary',
  children = 'Add to Cart',
  className = '',
  onClick,
  ...props
}) => {
  const isSecondary = type.toLowerCase() === 'secondary';
  const isLoading = State.toLowerCase() === 'loading';
  const isDisabled = State.toLowerCase() === 'disabled';
  const isPressed = State.toLowerCase() === 'pressed';

  return (
    <button
      className={\`uedp-cta uedp-cta--\${type.toLowerCase()} uedp-cta--\${State.toLowerCase()} \${className}\`}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {isLoading && <Loader2 className="uedp-cta-spinner" size={16} />}
      <span>{children}</span>
    </button>
  );
};
`, 'utf8');

fs.writeFileSync(path.join(compDir, 'CTA', 'CTA.css'), `/* CTA Component Styles */
.uedp-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--uedp-gap-2, 8px);
  padding: 10px 16px;
  border-radius: var(--uedp-rounded-md, 10px);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.15s ease-in-out;
  outline: none;
}

.uedp-cta--primary {
  background-color: var(--uedp-blue-600, #2563EB);
  color: var(--uedp-base-white, #FFFFFF);
  border-color: var(--uedp-blue-600, #2563EB);
}

.uedp-cta--primary:hover:not(:disabled) {
  background-color: var(--uedp-blue-700, #1D4ED8);
}

.uedp-cta--secondary {
  background-color: var(--uedp-slate-100, #F1F5F9);
  color: var(--uedp-slate-800, #1E293B);
  border-color: var(--uedp-slate-300, #CBD5E1);
}

.uedp-cta--secondary:hover:not(:disabled) {
  background-color: var(--uedp-slate-200, #E2E8F0);
}

.uedp-cta--loading {
  opacity: 0.8;
  cursor: wait;
}

.uedp-cta--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--uedp-slate-200, #E2E8F0);
  color: var(--uedp-slate-400, #94A3B8);
  border-color: transparent;
}

.uedp-cta--pressed {
  transform: scale(0.98);
}

.uedp-cta-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`, 'utf8');

// 2. SearchField Component Enhancement
fs.writeFileSync(path.join(compDir, 'SearchField', 'SearchField.tsx'), `import React from 'react';
import { Search, X } from 'lucide-react';
import './SearchField.css';

export interface SearchFieldProps {
  State?: 'Default' | 'Disabled' | 'Filled' | 'Focused';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  State = 'Default',
  placeholder = 'Search items or products...',
  value = '',
  onChange,
}) => {
  const isFilled = State.toLowerCase() === 'filled';
  const isFocused = State.toLowerCase() === 'focused';
  const isDisabled = State.toLowerCase() === 'disabled';

  return (
    <div className={\`uedp-searchfield uedp-searchfield--\${State.toLowerCase()}\`}>
      <Search className="uedp-searchfield-icon" size={18} />
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={isFilled ? 'General Store Supplies' : value}
        disabled={isDisabled}
        onChange={onChange}
        className="uedp-searchfield-input"
      />
      {isFilled && <X className="uedp-searchfield-clear" size={16} />}
    </div>
  );
};
`, 'utf8');

fs.writeFileSync(path.join(compDir, 'SearchField', 'SearchField.css'), `
.uedp-searchfield {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background-color: var(--uedp-base-white, #FFFFFF);
  border: 1px solid var(--uedp-slate-300, #CBD5E1);
  border-radius: var(--uedp-rounded-xl, 12px);
  width: 100%;
  max-width: 400px;
  transition: all 0.2s ease;
}

.uedp-searchfield--focused {
  border-color: var(--uedp-blue-600, #2563EB);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.uedp-searchfield--disabled {
  background-color: var(--uedp-slate-100, #F1F5F9);
  opacity: 0.6;
  cursor: not-allowed;
}

.uedp-searchfield-icon {
  color: var(--uedp-slate-400, #94A3B8);
}

.uedp-searchfield-input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  color: var(--uedp-slate-900, #0F172A);
}

.uedp-searchfield-clear {
  color: var(--uedp-slate-400, #94A3B8);
  cursor: pointer;
}
`, 'utf8');

// 3. Navbar Component Enhancement
fs.writeFileSync(path.join(compDir, 'Navbar', 'Navbar.tsx'), `import React from 'react';
import { LayoutDashboard, ShoppingBag, Package, Store } from 'lucide-react';
import './Navbar.css';

export interface NavbarProps {
  Active?: 'POS' | 'Inventory' | 'Orders' | 'Dashboard';
  onSelect?: (item: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ Active = 'POS', onSelect }) => {
  const items = [
    { key: 'POS', label: 'POS', icon: Store },
    { key: 'Inventory', label: 'Inventory', icon: Package },
    { key: 'Orders', label: 'Orders', icon: ShoppingBag },
    { key: 'Dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];

  return (
    <nav className="uedp-navbar">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = Active.toLowerCase() === item.key.toLowerCase();
        return (
          <button
            key={item.key}
            onClick={() => onSelect?.(item.key)}
            className={\`uedp-navbar-item \${isActive ? 'uedp-navbar-item--active' : ''}\`}
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
`, 'utf8');

fs.writeFileSync(path.join(compDir, 'Navbar', 'Navbar.css'), `
.uedp-navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--uedp-base-white, #FFFFFF);
  border-top: 1px solid var(--uedp-slate-200, #E2E8F0);
  padding: 8px 16px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.uedp-navbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  color: var(--uedp-slate-500, #64748B);
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: var(--uedp-rounded-md, 8px);
  transition: all 0.2s ease;
}

.uedp-navbar-item--active {
  color: var(--uedp-blue-600, #2563EB);
  font-weight: 600;
}
`, 'utf8');

// 4. ProductCard Component Enhancement
fs.writeFileSync(path.join(compDir, 'ProductCard', 'ProductCard.tsx'), `import React from 'react';
import { Plus, Check, Edit2, AlertTriangle, XCircle } from 'lucide-react';
import './ProductCard.css';

export interface ProductCardProps {
  State?: 'Default' | 'Added' | 'Edit' | 'Low Stock' | 'Inactive';
  title?: string;
  price?: string;
  stock?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  State = 'Default',
  title = 'Organic Wheat Flour 5kg',
  price = '₹240',
  stock = 45,
}) => {
  const isAdded = State.toLowerCase() === 'added';
  const isLowStock = State.toLowerCase() === 'low stock';
  const isInactive = State.toLowerCase() === 'inactive';
  const isEdit = State.toLowerCase() === 'edit';

  return (
    <div className={\`uedp-productcard uedp-productcard--\${State.toLowerCase().replace(/\\s+/g, '-')}\`}>
      <div className="uedp-productcard-img placeholder-img">
        <span className="uedp-productcard-badge">{State}</span>
      </div>
      <div className="uedp-productcard-info">
        <h4 className="uedp-productcard-title">{title}</h4>
        <div className="uedp-productcard-meta">
          <span className="uedp-productcard-price">{price}</span>
          <span className="uedp-productcard-stock">
            {isLowStock ? <AlertTriangle size={12} color="#D97706" /> : null}
            Stock: {isLowStock ? 3 : stock}
          </span>
        </div>
      </div>
      <div className="uedp-productcard-action">
        {isAdded ? (
          <button className="uedp-productcard-btn uedp-productcard-btn--added">
            <Check size={16} /> Added
          </button>
        ) : isEdit ? (
          <button className="uedp-productcard-btn uedp-productcard-btn--edit">
            <Edit2 size={16} /> Edit
          </button>
        ) : isInactive ? (
          <button className="uedp-productcard-btn uedp-productcard-btn--disabled" disabled>
            <XCircle size={16} /> Unavailable
          </button>
        ) : (
          <button className="uedp-productcard-btn uedp-productcard-btn--add">
            <Plus size={16} /> Add
          </button>
        )}
      </div>
    </div>
  );
};
`, 'utf8');

fs.writeFileSync(path.join(compDir, 'ProductCard', 'ProductCard.css'), `
.uedp-productcard {
  display: flex;
  flex-direction: column;
  background: var(--uedp-base-white, #FFFFFF);
  border: 1px solid var(--uedp-slate-200, #E2E8F0);
  border-radius: var(--uedp-rounded-xl, 12px);
  padding: 12px;
  width: 220px;
  gap: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.uedp-productcard--inactive {
  opacity: 0.6;
}

.uedp-productcard-img {
  height: 110px;
  background-color: var(--uedp-slate-100, #F1F5F9);
  border-radius: var(--uedp-rounded-lg, 8px);
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 6px;
}

.uedp-productcard-badge {
  font-size: 10px;
  font-weight: 600;
  background: rgba(15, 23, 42, 0.7);
  color: #FFF;
  padding: 2px 6px;
  border-radius: 4px;
}

.uedp-productcard-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--uedp-slate-900, #0F172A);
}

.uedp-productcard-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--uedp-slate-600, #475569);
  margin-top: 4px;
}

.uedp-productcard-price {
  font-weight: 700;
  color: var(--uedp-blue-600, #2563EB);
  font-size: 14px;
}

.uedp-productcard-btn {
  width: 100%;
  padding: 8px;
  border-radius: var(--uedp-rounded-md, 8px);
  border: none;
  font-weight: 600;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
}

.uedp-productcard-btn--add {
  background-color: var(--uedp-blue-600, #2563EB);
  color: #FFF;
}

.uedp-productcard-btn--added {
  background-color: var(--uedp-emerald-600, #059669);
  color: #FFF;
}

.uedp-productcard-btn--edit {
  background-color: var(--uedp-amber-500, #F59E0B);
  color: #FFF;
}

.uedp-productcard-btn--disabled {
  background-color: var(--uedp-slate-200, #E2E8F0);
  color: var(--uedp-slate-500, #64748B);
  cursor: not-allowed;
}
`, 'utf8');

console.log('✅ Visual enhancements applied to core components.');
