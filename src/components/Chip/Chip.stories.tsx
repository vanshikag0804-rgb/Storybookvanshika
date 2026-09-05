import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **Chip**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Chip` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **States** | `Default`, `Selected`, `Disabled` |\n' +
          '| **Height & Radius** | `32px` height, `16px` radius (`--uedp-rounded-2xl`) |\n' +
          '| **Bound Tokens** | `--uedp-slate-50` default fill, `--uedp-blue-600` selected fill |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Selected', 'Disabled'],
      description: 'Figma Variant Property: State',
    },
    label: {
      control: 'text',
      description: 'Chip text label content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    State: 'Default',
    label: 'Grocery',
  },
};

export const Selected: Story = {
  args: {
    State: 'Selected',
    label: 'Grocery',
  },
};

export const Disabled: Story = {
  args: {
    State: 'Disabled',
    label: 'Grocery',
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { exclude: ['State', 'label'] },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
      <Chip State="Default" label="Grocery" />
      <Chip State="Selected" label="Grocery" />
      <Chip State="Disabled" label="Grocery" />
    </div>
  ),
};
