import React from 'react';
import { LayoutDashboard, ShoppingBag, Package, Store } from 'lucide-react';
import './Navbar.css';

export interface NavbarProps {
  Active?: 'POS' | 'Inventory' | 'Orders' | 'Dashboard';
  /** Enable Dark Mode state */
  darkMode?: boolean;
  onSelect?: (item: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ Active = 'POS', darkMode = false, onSelect }) => {
  const items = [
    { key: 'POS', label: 'POS', icon: Store },
    { key: 'Inventory', label: 'Inventory', icon: Package },
    { key: 'Orders', label: 'Orders', icon: ShoppingBag },
    { key: 'Dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];

  return (
    <nav className={`uedp-navbar ${darkMode ? 'uedp-dark' : ''}`} data-theme={darkMode ? 'dark' : undefined} aria-label="Main navigation" role="tablist">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = Active.toLowerCase() === item.key.toLowerCase();
        return (
          <button
            key={item.key}
            onClick={() => onSelect?.(item.key)}
            className={`uedp-navbar-item ${isActive ? 'uedp-navbar-item--active' : ''}`}
            role="tab"
            aria-selected={isActive}
            aria-label={`${item.label} tab`}
          >
            <Icon size={20} aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

