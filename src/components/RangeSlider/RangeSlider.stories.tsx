import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { RangeSlider } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  parameters: {
    docs: {
      description: {
        component:
          '### 📐 Figma Component Specification: Range Slider\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Range Slider` |\n' +
          '| **Figma Node ID** | `94:149` |\n' +
          '| **Slider Dimensions** | `280px × 24px` (Track `4px`, Thumbs `24px × 24px`) |\n' +
          '| **Variant Properties** | `State: Default, Disabled, Focused` |\n' +
          '| **Tokens Aliased** | `--uedp-blue-500`, `--uedp-slate-100`, `--uedp-white` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Disabled', 'Focused'],
      description: 'Figma Variant Property: State',
    },
    min: { control: 'number', description: 'Minimum Value' },
    max: { control: 'number', description: 'Maximum Value' },
    darkMode: { control: 'boolean', description: 'Enable Dark Mode state' },
  },
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    State: 'Default',
    value: [20, 80],
  },
};

export const FocusedState: Story = {
  args: {
    State: 'Focused',
    value: [20, 80],
  },
};

export const DisabledState: Story = {
  args: {
    State: 'Disabled',
    value: [20, 80],
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    State: 'Default',
    value: [20, 80],
    darkMode: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [val, setVal] = useState<[number, number]>([25, 75]);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          backgroundColor: args.darkMode ? '#0F172A' : '#F8FAFC',
          padding: '24px',
          borderRadius: '16px',
          maxWidth: '360px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: args.darkMode ? '#F8FAFC' : '#1E293B' }}>
          <span>Price Range:</span>
          <strong>₹{val[0]} - ₹{val[1]}</strong>
        </div>
        <RangeSlider {...args} State="Default" value={val} onChange={setVal} />
      </div>
    );
  },
};

export const AllStates: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        backgroundColor: args.darkMode ? '#0F172A' : '#F8FAFC',
        padding: '24px',
        borderRadius: '16px',
        maxWidth: '360px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: args.darkMode ? '#94A3B8' : '#475569', fontSize: '13px' }}>
          State = Default
        </h4>
        <RangeSlider {...args} State="Default" value={[20, 80]} />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: args.darkMode ? '#94A3B8' : '#475569', fontSize: '13px' }}>
          State = Focused (White Thumb Dots)
        </h4>
        <RangeSlider {...args} State="Focused" value={[20, 80]} />
      </div>
      <div>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Inter, sans-serif', color: args.darkMode ? '#94A3B8' : '#475569', fontSize: '13px' }}>
          State = Disabled
        </h4>
        <RangeSlider {...args} State="Disabled" value={[20, 80]} />
      </div>
    </div>
  ),
};

