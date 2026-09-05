import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { QuantityControl } from './QuantityControl';

const meta: Meta<typeof QuantityControl> = {
  title: 'Components/QuantityControl',
  component: QuantityControl,
  parameters: {
    docs: {
      description: {
        component:
          '### 📐 Figma Component Specification: Quantity Control\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Quantity Control` |\n' +
          '| **Figma Node ID** | `106:9284` |\n' +
          '| **Pill Dimensions** | `110px × 36px` (Radius `40px`) |\n' +
          '| **Variant Properties** | `State: Add, Default, Focused, Ineactive` |\n' +
          '| **Tokens Aliased** | `--uedp-blue-50`, `--uedp-blue-600`, `--uedp-blue-700`, `--uedp-slate-50` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Add', 'Default', 'Focused', 'Ineactive'],
      description: 'Figma Variant Property: State',
    },
    quantity: {
      control: 'number',
      description: 'Quantity Value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuantityControl>;

export const AddState: Story = {
  args: {
    State: 'Add',
  },
};

export const DefaultState: Story = {
  args: {
    State: 'Default',
    quantity: 1,
  },
};

export const FocusedState: Story = {
  args: {
    State: 'Focused',
    quantity: 1,
  },
};

export const InactiveState: Story = {
  args: {
    State: 'Ineactive',
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        backgroundColor: '#F8FAFC',
        padding: '24px',
        borderRadius: '16px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Add
        </h4>
        <QuantityControl State="Add" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Default
        </h4>
        <QuantityControl State="Default" quantity={1} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Focused
        </h4>
        <QuantityControl State="Focused" quantity={1} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Ineactive
        </h4>
        <QuantityControl State="Ineactive" />
      </div>
    </div>
  ),
};
