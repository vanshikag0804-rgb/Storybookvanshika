import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BadgesWithIcon } from './BadgesWithIcon';

const meta: Meta<typeof BadgesWithIcon> = {
  title: 'Components/BadgesWithIcon',
  component: BadgesWithIcon,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **badges with icon**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `badges with icon` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **States** | `self delivery`, `myhub delivery` |\n' +
          '| **Bound Tokens** | `--uedp-sky-50`, `--uedp-emerald-50` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['self delivery', 'myhub delivery'],
      description: 'Figma Variant Property: State',
    },
    label: {
      control: 'text',
      description: 'Optional custom badge label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BadgesWithIcon>;

export const SelfDelivery: Story = {
  args: {
    State: 'self delivery',
  },
};

export const MyHubDelivery: Story = {
  args: {
    State: 'myhub delivery',
  },
};

export const AllVariants: Story = {
  parameters: {
    controls: { exclude: ['State', 'label'] },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
      <BadgesWithIcon State="self delivery" />
      <BadgesWithIcon State="myhub delivery" />
    </div>
  ),
};
