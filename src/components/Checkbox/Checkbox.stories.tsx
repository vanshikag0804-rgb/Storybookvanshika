import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **Checkbox**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Checkbox` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **States** | `Unchecked`, `Checked`, `Disabled` |\n' +
          '| **Corner Radius** | `6px` (`--uedp-rounded-md`) |\n' +
          '| **Bound Tokens** | `--uedp-slate-50` fill, `--uedp-blue-600` checked fill |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Unchecked', 'Checked', 'Disabled'],
      description: 'Figma Variant Property: State',
    },
    label: {
      control: 'text',
      description: 'Optional checkbox label',
    },
    darkMode: {
      control: 'boolean',
      description: 'Enable Dark Mode state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    State: 'Unchecked',
    label: 'Remember login details',
  },
};

export const Checked: Story = {
  args: {
    State: 'Checked',
    label: 'Accept terms and conditions',
  },
};

export const Disabled: Story = {
  args: {
    State: 'Disabled',
    label: 'Unavailable option',
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    State: 'Checked',
    label: 'Accept terms and conditions',
    darkMode: true,
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { exclude: ['State', 'label'] },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', padding: '24px', backgroundColor: args.darkMode ? '#0F172A' : '#FFFFFF', borderRadius: '12px' }}>
      <Checkbox {...args} State="Unchecked" label="Unchecked State" />
      <Checkbox {...args} State="Checked" label="Checked State" />
      <Checkbox {...args} State="Disabled" label="Disabled State" />
    </div>
  ),
};

