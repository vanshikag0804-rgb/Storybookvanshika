import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PaymentBottomSheet } from './PaymentBottomSheet';

const meta: Meta<typeof PaymentBottomSheet> = {
  title: 'Components/PaymentBottomSheet',
  component: PaymentBottomSheet,
  parameters: {
    docs: {
      description: {
        component:
          '### 📐 Figma Component Specification: Payment Bottom Sheet\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Payment Bottom Sheet` |\n' +
          '| **Figma Node ID** | `94:8538` |\n' +
          '| **Dimensions** | `430px × 690px` (Top radii `24px`) |\n' +
          '| **Variant Property** | `State: UPI, Cash, Card` |\n' +
          '| **Tokens Aliased** | `--uedp-blue-*`, `--uedp-slate-*` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['UPI', 'Card', 'Cash'],
      description: 'Figma Variant Property: State',
    },
    mobileNumber: { control: 'text', description: 'Customer Mobile Number' },
    customerName: { control: 'text', description: 'Customer Name' },
    totalBill: { control: 'text', description: 'Total Bill Amount' },
    discount: { control: 'text', description: 'Discount Amount' },
    primaryAmount: { control: 'text', description: 'Method Amount' },
    cashIfAny: { control: 'text', description: 'Additional Cash' },
  },
};

export default meta;
type Story = StoryObj<typeof PaymentBottomSheet>;

export const Default: Story = {
  args: {
    State: 'UPI',
  },
};

export const UPIMode: Story = {
  args: {
    State: 'UPI',
    mobileNumber: '9876543210',
    customerName: 'Aarav Sharma',
    totalBill: 'Rs.2498.00',
    discount: '100.00',
    primaryAmount: '2398.00',
    cashIfAny: '0.00',
  },
};

export const CardMode: Story = {
  args: {
    State: 'Card',
    mobileNumber: '9876543210',
    customerName: 'Priya Patel',
    totalBill: 'Rs.2498.00',
    discount: '0.00',
    primaryAmount: '2498.00',
    cashIfAny: '0.00',
  },
};

export const CashMode: Story = {
  args: {
    State: 'Cash',
    mobileNumber: '9876543210',
    customerName: 'Vikram Singh',
    totalBill: 'Rs.2498.00',
    discount: '498.00',
    primaryAmount: '2000.00',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '16px' }}>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569' }}>State = UPI</h4>
        <PaymentBottomSheet State="UPI" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569' }}>State = Card</h4>
        <PaymentBottomSheet State="Card" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569' }}>State = Cash</h4>
        <PaymentBottomSheet State="Cash" />
      </div>
    </div>
  ),
};
