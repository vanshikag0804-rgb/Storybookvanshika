import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          '### 📐 Figma Component Specification: Radio Button\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Radio Button` |\n' +
          '| **Figma Node ID** | `85:77` |\n' +
          '| **Circle Dimensions** | `24px × 24px` (Inner Dot `10px × 10px`) |\n' +
          '| **Variant Properties** | `State: Unselected, Selected` |\n' +
          '| **Tokens Aliased** | `--uedp-blue-500`, `--uedp-white`, `--uedp-slate-800` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Unselected', 'Selected'],
      description: 'Figma Variant Property: State',
    },
    label: {
      control: 'text',
      description: 'Radio Button Label Text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled State',
    },
    darkMode: {
      control: 'boolean',
      description: 'Enable Dark Mode state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    State: 'Unselected',
  },
};

export const Unselected: Story = {
  args: {
    State: 'Unselected',
    label: 'Unselected Option',
  },
};

export const Selected: Story = {
  args: {
    State: 'Selected',
    label: 'Selected Option',
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    State: 'Selected',
    label: 'Selected Option',
    darkMode: true,
  },
};

export const InteractiveGroup: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<'upi' | 'card' | 'cash'>('upi');
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          backgroundColor: args.darkMode ? '#0F172A' : '#F8FAFC',
          padding: '24px',
          borderRadius: '16px',
          maxWidth: '300px',
        }}
      >
        <h4 style={{ margin: '0 0 8px 0', fontFamily: 'Inter, sans-serif', color: args.darkMode ? '#94A3B8' : '#475569', fontSize: '14px' }}>
          Select Payment Method
        </h4>
        <RadioButton
          {...args}
          State={selectedOption === 'upi' ? 'Selected' : 'Unselected'}
          label="UPI Payment"
          onClick={() => setSelectedOption('upi')}
        />
        <RadioButton
          {...args}
          State={selectedOption === 'card' ? 'Selected' : 'Unselected'}
          label="Credit / Debit Card"
          onClick={() => setSelectedOption('card')}
        />
        <RadioButton
          {...args}
          State={selectedOption === 'cash' ? 'Selected' : 'Unselected'}
          label="Cash on Delivery"
          onClick={() => setSelectedOption('cash')}
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        backgroundColor: args.darkMode ? '#0F172A' : '#F8FAFC',
        padding: '24px',
        borderRadius: '16px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: args.darkMode ? '#94A3B8' : '#475569', fontSize: '13px' }}>
          State = Unselected
        </h4>
        <RadioButton {...args} State="Unselected" label="Unselected" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: args.darkMode ? '#94A3B8' : '#475569', fontSize: '13px' }}>
          State = Selected
        </h4>
        <RadioButton {...args} State="Selected" label="Selected" />
      </div>
    </div>
  ),
};

