import React from 'react';
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
            className={`uedp-navbar-item ${isActive ? 'uedp-navbar-item--active' : ''}`}
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
