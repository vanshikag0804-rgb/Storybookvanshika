import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        component:
          '### 📐 Figma Component Specification: Product Card\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Product Card` |\n' +
          '| **Figma Node ID** | `106:9050` |\n' +
          '| **Card Dimensions** | `126px × 276px` (Image `110px × 110px`) |\n' +
          '| **Variant Property** | `State: Default, Added, Edit, Low Stock, Inactive` |\n' +
          '| **Tokens Aliased** | `--uedp-blue-*`, `--uedp-emerald-*`, `--uedp-amber-*`, `--uedp-slate-*` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Added', 'Edit', 'Low Stock', 'Inactive'],
      description: 'Figma Variant Property: State',
    },
    title: { control: 'text', description: 'Product Title' },
    description: { control: 'text', description: 'Product Description' },
    price: { control: 'text', description: 'Discounted Price' },
    originalPrice: { control: 'text', description: 'Original MRP Price' },
    imageSrc: { control: 'text', description: 'Product Image Path' },
    quantity: { control: 'number', description: 'Selected Quantity' },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    State: 'Default',
    title: 'Turmeric Powder',
    description: 'Enhance your dishes with our vibrant',
    price: '₹187',
    originalPrice: '₹220',
    imageSrc: '/assets/turmeric_powder.jpg',
  },
};

export const AddedState: Story = {
  args: {
    State: 'Added',
    title: 'Turmeric Powder',
    description: 'Enhance your dishes with our vibrant',
    price: '₹187',
    originalPrice: '₹220',
    imageSrc: '/assets/turmeric_powder.jpg',
    quantity: 1,
  },
};

export const EditState: Story = {
  args: {
    State: 'Edit',
    title: 'Turmeric Powder',
    description: 'Enhance your dishes with our vibrant',
    price: '₹187',
    originalPrice: '₹220',
    imageSrc: '/assets/turmeric_powder.jpg',
    quantity: 1,
  },
};

export const LowStockState: Story = {
  args: {
    State: 'Low Stock',
    title: 'Turmeric Powder',
    description: 'Enhance your dishes with our vibrant',
    price: '₹187',
    originalPrice: '₹220',
    imageSrc: '/assets/turmeric_powder.jpg',
  },
};

export const InactiveState: Story = {
  args: {
    State: 'Inactive',
    title: 'Turmeric Powder',
    description: 'Enhance your dishes with our vibrant',
    price: '₹187',
    originalPrice: '₹220',
    imageSrc: '/assets/turmeric_powder.jpg',
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        backgroundColor: '#F8FAFC',
        padding: '24px',
        borderRadius: '16px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Default
        </h4>
        <ProductCard State="Default" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Added
        </h4>
        <ProductCard State="Added" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Edit
        </h4>
        <ProductCard State="Edit" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Low Stock
        </h4>
        <ProductCard State="Low Stock" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Inactive
        </h4>
        <ProductCard State="Inactive" />
      </div>
    </div>
  ),
};
