import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **Badge**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Badge` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **States** | `Default`, `Success`, `Error` |\n' +
          '| **Bound Tokens** | `--uedp-sky-50`, `--uedp-emerald-50`, `--uedp-red-50` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Success', 'Error'],
      description: 'Figma Variant Property: State',
    },
    label: {
      control: 'text',
      description: 'Badge text label content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    State: 'Default',
    label: 'Badge',
  },
};

export const Success: Story = {
  args: {
    State: 'Success',
    label: 'Sucess',
  },
};

export const ErrorState: Story = {
  args: {
    State: 'Error',
    label: 'Error',
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { exclude: ['State', 'label'] },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start', padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
      <Badge State="Default" label="Badge" />
      <Badge State="Success" label="Sucess" />
      <Badge State="Error" label="Error" />
    </div>
  ),
};
