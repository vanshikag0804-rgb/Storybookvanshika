import type { Meta, StoryObj } from '@storybook/react';
import { CTA } from './CTA';

const meta: Meta<typeof CTA> = {
  title: 'Components/CTA',
  component: CTA,
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: CTA\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `CTA` |\n' +
          '| **Component Type** | React Synchronized Spec |\n' +
          '| **Bound Tokens** | `--uedp-*` Tokens Aliased |\n' +
          '| **Variant Properties** | State: Default, Loading, Disabled, Pressed | type: Primary, Secondary |\n',
      },
    },
  },
  argTypes: {
  "State": {
    "control": "select",
    "options": [
      "Default",
      "Loading",
      "Disabled",
      "Pressed"
    ],
    "description": "Figma Variant Property: State"
  },
  "type": {
    "control": "select",
    "options": [
      "Primary",
      "Secondary"
    ],
    "description": "Figma Variant Property: type"
  }
},
};

export default meta;
type Story = StoryObj<typeof CTA>;

export const Default: Story = {
  args: {
  "State": "Default",
  "type": "Primary"
},
};
