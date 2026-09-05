import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **Icon Button**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Icon Button` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **States** | `Default`, `Pressed`, `Disabled` |\n' +
          '| **Dimensions** | `40px` × `40px` (Square Button) |\n' +
          '| **Corner Radius** | `8px` (`--uedp-rounded-lg`) |\n' +
          '| **Bound Tokens** | `--uedp-white` / `#FFFFFF` fill (Default), `--uedp-slate-50` fill (Pressed/Disabled), `--uedp-slate-800` icon stroke (Default/Pressed), `--uedp-slate-400` icon stroke (Disabled) |\n',
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
type Story = StoryObj<typeof IconButton>;

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
      <IconButton State="Default" />
      <IconButton State="Pressed" />
      <IconButton State="Disabled" />
    </div>
  ),
};
