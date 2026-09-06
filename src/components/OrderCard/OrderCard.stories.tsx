import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OrderCard } from './OrderCard';

const meta: Meta<typeof OrderCard> = {
  title: 'Components/OrderCard',
  component: OrderCard,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **Order card**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Order card` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **State Variants** | `new`, `active`, `completed`, `cancelled` |\n' +
          '| **Dimensions** | `405px` width (Responsive Card) |\n' +
          '| **Corner Radius** | `16px` |\n' +
          '| **Bound Tokens** | `--uedp-white` fill (`#FFFFFF`), `--uedp-slate-100` border (`#F1F5F9`) |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['new', 'active', 'completed', 'cancelled'],
      description: 'Figma Variant Property: State',
    },
    orderId: { control: 'text', description: 'Order ID' },
    itemsCount: { control: 'text', description: 'Items summary' },
    amount: { control: 'text', description: 'Total amount' },
    address: { control: 'text', description: 'Delivery address' },
    deliveryType: { control: 'select', options: ['myhub', 'self'], description: 'Delivery Badge' },
    darkMode: { control: 'boolean', description: 'Enable Dark Mode state' },
  },
  decorators: [
    (Story, context) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: context.globals.backgrounds?.value === '#0F172A' || context.args?.darkMode ? '#0F172A' : '#F1F5F9', minHeight: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OrderCard>;

export const New: Story = {
  args: {
    State: 'new',
    orderId: 'Order #123456',
    itemsCount: '3 Items',
    amount: '₹1,250',
    address: 'Flat No. 203, Sri Venkateswara Residency, Madhapur, Hyderabad, Telangana – 500081',
    deliveryType: 'myhub',
  },
};

export const Active: Story = {
  args: {
    State: 'active',
    orderId: 'Order #123457',
    itemsCount: '2 Items',
    amount: '₹8,500',
    address: 'Plot 42, Jubilee Hills, Hyderabad, Telangana – 500033',
    deliveryType: 'self',
  },
};

export const Completed: Story = {
  args: {
    State: 'completed',
    orderId: 'Order #123458',
    itemsCount: '5 Items',
    amount: '₹3,400',
    address: 'H.No 12-5-88, Gachibowli, Hyderabad, Telangana – 500032',
    deliveryType: 'myhub',
  },
};

export const Cancelled: Story = {
  args: {
    State: 'cancelled',
    orderId: 'Order #123459',
    itemsCount: '1 Item',
    amount: '₹650',
    address: 'Flat 101, Hitech City, Hyderabad, Telangana – 500081',
    deliveryType: 'self',
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    State: 'active',
    orderId: 'Order #123457',
    itemsCount: '2 Items',
    amount: '₹8,500',
    address: 'Plot 42, Jubilee Hills, Hyderabad, Telangana – 500033',
    deliveryType: 'self',
    darkMode: true,
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { exclude: ['State'] },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '405px' }}>
      <OrderCard {...args} State="new" />
      <OrderCard {...args} State="active" />
      <OrderCard {...args} State="completed" />
      <OrderCard {...args} State="cancelled" />
    </div>
  ),
};


