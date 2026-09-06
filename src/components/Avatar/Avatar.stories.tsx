import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **Avatar**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Avatar` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **Bound Tokens** | `--uedp-slate-100` circle fill (#F1F5F9), `--uedp-blue-600` vector (#3488DC) |\n' +
          '| **Dimensions** | 40px × 40px (1:1 Circular Disc) |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Default'],
      description: 'Figma Variant Property: State',
    },
    size: {
      control: { type: 'range', min: 24, max: 96, step: 4 },
      description: 'Avatar diameter in pixels',
    },
    darkMode: {
      control: 'boolean',
      description: 'Enable Dark Mode state',
    },
  },
  decorators: [
    (Story, context) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: context.globals.backgrounds?.value === '#0F172A' || context.args?.darkMode ? '#0F172A' : '#FFFFFF' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    State: 'Default',
    size: 40,
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    State: 'Default',
    size: 40,
    darkMode: true,
  },
};

export const VariousSizes: Story = {
  args: {
    darkMode: false
  },

  parameters: {
    controls: { exclude: ['size'] },
  },

  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '16px' }}>
      <Avatar {...args} size={28} />
      <Avatar {...args} size={40} />
      <Avatar {...args} size={56} />
      <Avatar {...args} size={72} />
    </div>
  )
};

