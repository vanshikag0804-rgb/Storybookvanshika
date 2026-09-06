import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OrderTracking } from './OrderTracking';

const meta: Meta<typeof OrderTracking> = {
  title: 'Components/OrderTracking',
  component: OrderTracking,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **Order Tracking.**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Order Tracking.` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **Status Variants** | `Default`, `delivered`, `cancelled`, `opend` |\n' +
          '| **Dimensions** | `373px` × `60px` (Collapsed) / `250px` (Expanded Timeline) |\n' +
          '| **Corner Radius** | `12px` |\n' +
          '| **Bound Tokens** | `--uedp-blue-50` fill (`#EFF6FF`), `#3488DC` primary accent |\n',
      },
    },
  },
  argTypes: {
    Status: {
      control: 'select',
      options: ['Default', 'delivered', 'cancelled', 'opend'],
      description: 'Figma Variant Property: Status',
    },
    title: { control: 'text', description: 'Title text' },
    darkMode: { control: 'boolean', description: 'Enable Dark Mode state' },
  },
  decorators: [
    (Story, context) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: context.globals.backgrounds?.value === '#0F172A' || context.args?.darkMode ? '#0F172A' : '#FFFFFF', minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OrderTracking>;

export const Default: Story = {
  args: {
    Status: 'Default',
  },
};

export const Opend: Story = {
  args: {
    Status: 'opend',
  },
};

export const Delivered: Story = {
  args: {
    Status: 'delivered',
  },
};

export const Cancelled: Story = {
  args: {
    Status: 'cancelled',
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    Status: 'opend',
    darkMode: true,
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { exclude: ['Status'] },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '373px' }}>
      <OrderTracking {...args} Status="Default" />
      <OrderTracking {...args} Status="opend" />
      <OrderTracking {...args} Status="delivered" />
      <OrderTracking {...args} Status="cancelled" />
    </div>
  ),
};


