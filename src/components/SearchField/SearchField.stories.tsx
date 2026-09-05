import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SearchField } from './SearchField';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component:
          '### 📐 Figma Component Specification: Search Field\n\n' +
          '| Property | Value / Description |\n' +
          '| :--- | :--- |\n' +
          '| **Exact Figma Layer Name** | `Search Field` |\n' +
          '| **Figma Node ID** | `81:11296` |\n' +
          '| **Field Dimensions** | `320px × 48px` (Radius `16px`) |\n' +
          '| **Variant Properties** | `State: Default, Disabled, Filled, Focused` |\n' +
          '| **Tokens Aliased** | `--uedp-blue-400`, `--uedp-slate-50`, `--uedp-slate-600`, `--uedp-slate-800` |\n',
      },
    },
  },
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Disabled', 'Filled', 'Focused'],
      description: 'Figma Variant Property: State',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder Text',
    },
    value: {
      control: 'text',
      description: 'Input Value Text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    State: 'Default',
    placeholder: 'Search or Scan',
  },
};

export const FocusedState: Story = {
  args: {
    State: 'Focused',
    placeholder: 'Search or Scan',
  },
};

export const FilledState: Story = {
  args: {
    State: 'Filled',
    value: 'General Store Supplies',
  },
};

export const DisabledState: Story = {
  args: {
    State: 'Disabled',
    placeholder: 'Search or Scan',
  },
};

export const Interactive: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          backgroundColor: '#F8FAFC',
          padding: '24px',
          borderRadius: '16px',
          maxWidth: '360px',
        }}
      >
        <SearchField
          State="Default"
          placeholder="Search items, categories or scan..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onScanClick={() => alert('Camera scanner opened!')}
        />
        {query && (
          <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#475569' }}>
            Searching for: <strong>"{query}"</strong>
          </p>
        )}
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        backgroundColor: '#F8FAFC',
        padding: '24px',
        borderRadius: '16px',
        maxWidth: '360px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Default
        </h4>
        <SearchField State="Default" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Focused (Blue #8BC5F9 Border)
        </h4>
        <SearchField State="Focused" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Filled
        </h4>
        <SearchField State="Filled" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontFamily: 'Inter, sans-serif', color: '#475569', fontSize: '13px' }}>
          State = Disabled
        </h4>
        <SearchField State="Disabled" />
      </div>
    </div>
  ),
};
