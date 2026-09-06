import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InventoryListItem } from './InventoryListItem';

const meta: Meta<typeof InventoryListItem> = {
  title: 'Components/InventoryListItem',
  component: InventoryListItem,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **Inventory List Item**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Inventory List Item` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **Status Variants** | `Default`, `Low Stock`, `Out of Stock`, `Inactive` |\n' +
          '| **Dimensions** | `398px` × `92px` (Card Container) |\n' +
          '| **Corner Radius** | `14px` |\n' +
          '| **Bound Tokens** | `--uedp-slate-50` fill (`#F8FAFC`), `--uedp-slate-100` stroke (`#F1F5F9`) |\n',
      },
    },
  },
  argTypes: {
    Status: {
      control: 'select',
      options: ['Default', 'Low Stock', 'Out of Stock', 'Inactive'],
      description: 'Figma Variant Property: Status',
    },
    title: { control: 'text', description: 'Product Title' },
    brand: { control: 'text', description: 'Brand Name' },
    category: { control: 'text', description: 'Category' },
    variantText: { control: 'text', description: 'Variant Badge Text' },
    stock: { control: 'number', description: 'Available Stock Quantity' },
    price: { control: 'text', description: 'Selling Price' },
    originalPrice: { control: 'text', description: 'Original MRP' },
    darkMode: { control: 'boolean', description: 'Enable Dark Mode state' },
  },
  decorators: [
    (Story, context) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: context.globals.backgrounds?.value === '#0F172A' || context.args?.darkMode ? '#0F172A' : '#FFFFFF', minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InventoryListItem>;

export const Default: Story = {
  args: {
    Status: 'Default',
    title: 'CoCo Chanel',
    brand: 'Boss',
    category: 'Electronics',
    variantText: '50 ml',
    stock: 87,
    price: '₹8,500',
    originalPrice: '₹21,000',
  },
};

export const LowStock: Story = {
  args: {
    Status: 'Low Stock',
    title: 'CoCo Chanel',
    brand: 'Boss',
    category: 'Electronics',
    variantText: '50 ml',
    stock: 5,
    price: '₹8,500',
    originalPrice: '₹21,000',
  },
};

export const OutOfStock: Story = {
  args: {
    Status: 'Out of Stock',
    title: 'CoCo Chanel',
    brand: 'Boss',
    category: 'Electronics',
    variantText: '50 ml',
    stock: 0,
    price: '₹8,500',
    originalPrice: '₹21,000',
  },
};

export const Inactive: Story = {
  args: {
    Status: 'Inactive',
    title: 'CoCo Chanel',
    brand: 'Boss',
    category: 'Electronics',
    variantText: '50 ml',
    stock: 87,
    price: '₹8,500',
    originalPrice: '₹21,000',
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    Status: 'Default',
    title: 'CoCo Chanel',
    brand: 'Boss',
    category: 'Electronics',
    variantText: '50 ml',
    stock: 87,
    price: '₹8,500',
    originalPrice: '₹21,000',
    darkMode: true,
  },
};

export const AllStatuses: Story = {
  parameters: {
    controls: { exclude: ['Status'] },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '398px' }}>
      <InventoryListItem {...args} Status="Default" />
      <InventoryListItem {...args} Status="Low Stock" stock={5} />
      <InventoryListItem {...args} Status="Out of Stock" stock={0} />
      <InventoryListItem {...args} Status="Inactive" />
    </div>
  ),
};


