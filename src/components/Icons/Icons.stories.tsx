import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from './Icons';

const meta: Meta<typeof Icons> = {
  title: 'Components/Icons',
  component: Icons,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **icons**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `icons` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **States** | `Default`, `Pressed`, `Disabled` |\n' +
          '| **Shape** | Circular (`40px` × `40px`, `border-radius: 9999px`) |\n' +
          '| **Bound Tokens** | `--uedp-white` / `#FFFFFF` fill (Default/Disabled), `--uedp-slate-50` fill (Pressed), `--uedp-slate-800` stroke (Default/Pressed), `--uedp-slate-400` stroke (Disabled) |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Pressed', 'Disabled'],
      description: 'Figma Variant Property: State',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: '#F1F5F9', borderRadius: '12px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Default: Story = {
  args: {
    State: 'Default',
  },
};

export const Pressed: Story = {
  args: {
    State: 'Pressed',
  },
};

export const Disabled: Story = {
  args: {
    State: 'Disabled',
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { exclude: ['State'] },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Icons State="Default" />
      <Icons State="Pressed" />
      <Icons State="Disabled" />
    </div>
  ),
};

