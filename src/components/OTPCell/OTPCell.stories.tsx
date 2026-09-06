import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OTPCell } from './OTPCell';

const meta: Meta<typeof OTPCell> = {
  title: 'Components/OTPCell',
  component: OTPCell,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: **OTP Cell**\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `OTP Cell` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **States** | `Empty`, `Filled`, `Focused`, `Error` |\n' +
          '| **Dimensions** | `48px` × `48px` (Square Box) |\n' +
          '| **Corner Radius** | `8px` (`--uedp-rounded-lg`) |\n' +
          '| **Bound Tokens** | `--uedp-white` fill (`#FFFFFF`), `--uedp-slate-200` border (`#E2E8F0`), `#3488DC` focus border |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Empty', 'Filled', 'Focused', 'Error'],
      description: 'Figma Variant Property: State',
    },
    value: { control: 'text', description: 'Input value' },
    placeholder: { control: 'text', description: 'Placeholder' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    darkMode: { control: 'boolean', description: 'Enable Dark Mode state' },
  },
  decorators: [
    (Story, context) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', backgroundColor: context.globals.backgrounds?.value === '#0F172A' || context.args?.darkMode ? '#0F172A' : '#F1F5F9', borderRadius: '12px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OTPCell>;

export const Empty: Story = {
  args: {
    State: 'Empty',
    value: '',
  },
};

export const Filled: Story = {
  args: {
    State: 'Filled',
    value: '5',
  },
};

export const Focused: Story = {
  args: {
    State: 'Focused',
    value: '',
  },
};

export const Error: Story = {
  args: {
    State: 'Error',
    value: '9',
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    State: 'Filled',
    value: '7',
    darkMode: true,
  },
};

export const OTPGroup: Story = {
  parameters: {
    controls: { exclude: ['State', 'value'] },
  },
  render: (args) => {
    const [otp, setOtp] = useState(['5', '2', '', '']);
    return (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        {otp.map((val, idx) => (
          <OTPCell
            key={idx}
            {...args}
            value={val}
            State={idx === 2 ? 'Focused' : val ? 'Filled' : 'Empty'}
            onChange={(newVal) => {
              const copy = [...otp];
              copy[idx] = newVal;
              setOtp(copy);
            }}
          />
        ))}
      </div>
    );
  },
};


