import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: Navbar\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Navbar` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **Bound Tokens** | `--uedp-*` Tokens Aliased |\n' +
          '| **Variant Properties** | Active: POS, Inventory, Orders, Dashboard |\n',
      },
    },
  },
  argTypes: {
  "Active": {
    "control": "select",
    "options": [
      "POS",
      "Inventory",
      "Orders",
      "Dashboard"
    ],
    "description": "Figma Variant Property: Active"
  }
},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
  "Active": "POS"
},
};
