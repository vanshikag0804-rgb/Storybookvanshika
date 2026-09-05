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
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: '#FFFFFF', minHeight: '300px' }}>
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

export const AllStates: Story = {
  parameters: {
    controls: { exclude: ['Status'] },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '373px' }}>
      <OrderTracking Status="Default" />
      <OrderTracking Status="opend" />
      <OrderTracking Status="delivered" />
      <OrderTracking Status="cancelled" />
    </div>
  ),
};

