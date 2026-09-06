import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StoreHeader } from './StoreHeader';

const meta: Meta<typeof StoreHeader> = {
  title: 'Components/StoreHeader',
  component: StoreHeader,
  parameters: {
    docs: {
      description: {
        component:
          '### 📐 Figma Component Specification: Store Header\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Store header` |\n' +
          '| **Figma Node ID** | `106:9394` |\n' +
          '| **Header Dimensions** | `398px × 48px` |\n' +
          '| **Variant Properties** | `State: Offline, online` |\n' +
          '| **Tokens Aliased** | `--uedp-blue-500`, `--uedp-blue-600`, `--uedp-slate-50`, `--uedp-white` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Offline', 'online'],
      description: 'Figma Variant Property: State',
    },
    storeName: {
      control: 'text',
      description: 'Store Name Label',
    },
    darkMode: {
      control: 'boolean',
      description: 'Enable Dark Mode state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StoreHeader>;

export const Default: Story = {
  args: {
    State: 'Offline',
    storeName: 'MyHub Retailer #104',
    darkMode: false
  },
};

export const OfflineState: Story = {
  args: {
    State: 'Offline',
    storeName: 'Fresh Mart Supermarket',
  },
};

export const OnlineState: Story = {
  args: {
    State: 'online',
    storeName: 'Fresh Mart Supermarket',
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    State: 'online',
    storeName: 'Fresh Mart Supermarket',
    darkMode: true,
  },
};

export const Interactive: Story = {
  args: {
    darkMode: false
  },

  render: (args) => {
    const [isOnline, setIsOnline] = useState(false);
    const isDark = args.darkMode;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          backgroundColor: isDark ? '#0F172A' : '#F8FAFC',
          padding: '24px',
          borderRadius: '16px',
          maxWidth: '450px',
        }}
      >
        <StoreHeader
          {...args}
          State={isOnline ? 'online' : 'Offline'}
          storeName="Apex Supermarket"
          onToggleState={setIsOnline}
          onSwitchStore={() => alert('Switch Store Modal Triggered')}
        />
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: isDark ? '#94A3B8' : '#475569' }}>
          Current Mode: <strong style={{ color: isOnline ? '#4ADE80' : '#F87171' }}>{isOnline ? 'Online (Accepting Orders)' : 'Offline (Store Closed)'}</strong>
        </div>
      </div>
    );
  }
};

export const AllStates: Story = {
  args: {
    darkMode: false
  },

  render: (args) => {
    const isDark = args.darkMode;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          backgroundColor: isDark ? '#0F172A' : '#F8FAFC',
          padding: '24px',
          borderRadius: '16px',
          maxWidth: '450px',
        }}
      >
        <div>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#475569', fontSize: '13px' }}>
            State = Offline
          </h4>
          <StoreHeader {...args} State="Offline" storeName="Store Name" />
        </div>
        <div>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: isDark ? '#94A3B8' : '#475569', fontSize: '13px' }}>
            State = online (Blue Active Toggle #3488DC)
          </h4>
          <StoreHeader {...args} State="online" storeName="Store Name" />
        </div>
      </div>
    );
  }
};
