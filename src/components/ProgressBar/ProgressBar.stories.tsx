import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          '### 📐 Figma Component Specification: Progress Bar\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `progress bar` |\n' +
          '| **Figma Node ID** | `94:165` |\n' +
          '| **Track Dimensions** | `320px × 8px` (Radius `4px`) |\n' +
          '| **Variant Property** | `State: Default, Error, Success` |\n' +
          '| **Tokens Aliased** | `--uedp-blue-500`, `--uedp-red-600`, `--uedp-emerald-600`, `--uedp-slate-100` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Error', 'Success'],
      description: 'Figma Variant Property: State',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress Percentage (0 - 100)',
    },
    darkMode: {
      control: 'boolean',
      description: 'Enable Dark Mode state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    State: 'Default',
    progress: 50,
  },
};

export const ErrorState: Story = {
  args: {
    State: 'Error',
    progress: 50,
  },
};

export const SuccessState: Story = {
  args: {
    State: 'Success',
    progress: 50,
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    State: 'Default',
    progress: 65,
    darkMode: true,
  },
};

export const AllStates: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '400px',
        backgroundColor: args.darkMode ? '#0F172A' : '#F8FAFC',
        padding: '24px',
        borderRadius: '16px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: args.darkMode ? '#94A3B8' : '#475569', fontSize: '13px' }}>
          State = Default (Blue #3488DC)
        </h4>
        <ProgressBar {...args} State="Default" progress={50} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: args.darkMode ? '#94A3B8' : '#475569', fontSize: '13px' }}>
          State = Error (Red #DC2626)
        </h4>
        <ProgressBar {...args} State="Error" progress={50} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: args.darkMode ? '#94A3B8' : '#475569', fontSize: '13px' }}>
          State = Success (Green #16A34A)
        </h4>
        <ProgressBar {...args} State="Success" progress={50} />
      </div>
    </div>
  ),
};

