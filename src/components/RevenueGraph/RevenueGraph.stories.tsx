import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RevenueGraph } from './RevenueGraph';

const meta: Meta<typeof RevenueGraph> = {
  title: 'Components/RevenueGraph',
  component: RevenueGraph,
  parameters: {
    docs: {
      description: {
        component:
          '### 📐 Figma Component Specification: Revenue Graph\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Revenue Graph` |\n' +
          '| **Figma Node ID** | `254:10426` |\n' +
          '| **Card Dimensions** | `398px × 262px` (Radius `16px`) |\n' +
          '| **Variant Property** | `Range: 7D, 30D, 90D, 1Y` |\n' +
          '| **Tokens Aliased** | `--uedp-blue-500`, `--uedp-blue-600`, `--uedp-slate-300`, `--uedp-slate-800` |\n',
      },
    },
  },
  argTypes: {
    Range: {
      control: 'select',
      options: ['7D', '30D', '90D', '1Y'],
      description: 'Figma Variant Property: Range',
    },
    title: {
      control: 'text',
      description: 'Custom Title Override',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RevenueGraph>;

export const Default: Story = {
  args: {
    Range: '7D',
  },
};

export const Range30D: Story = {
  args: {
    Range: '30D',
  },
};

export const Range90D: Story = {
  args: {
    Range: '90D',
  },
};

export const Range1Y: Story = {
  args: {
    Range: '1Y',
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        backgroundColor: '#F8FAFC',
        padding: '24px',
        borderRadius: '16px',
        maxWidth: '450px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          Range = 7D
        </h4>
        <RevenueGraph Range="7D" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          Range = 30D
        </h4>
        <RevenueGraph Range="30D" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          Range = 90D
        </h4>
        <RevenueGraph Range="90D" />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          Range = 1Y
        </h4>
        <RevenueGraph Range="1Y" />
      </div>
    </div>
  ),
};
