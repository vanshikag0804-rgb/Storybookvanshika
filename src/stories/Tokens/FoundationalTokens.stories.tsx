import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const borderRadii = [
  { name: 'rounded-none', varName: '--uedp-rounded-none' },
  { name: 'rounded-sm', varName: '--uedp-rounded-sm' },
  { name: 'rounded', varName: '--uedp-rounded' },
  { name: 'rounded-md', varName: '--uedp-rounded-md' },
  { name: 'rounded-lg', varName: '--uedp-rounded-lg' },
  { name: 'rounded-xl', varName: '--uedp-rounded-xl' },
  { name: 'rounded-2xl', varName: '--uedp-rounded-2xl' },
  { name: 'rounded-3xl', varName: '--uedp-rounded-3xl' },
  { name: 'rounded-full', varName: '--uedp-rounded-full' },
];

const spacingScales = [
  { name: '0', varName: '--uedp-gap-0' },
  { name: '0.5', varName: '--uedp-gap-0-5' },
  { name: '1', varName: '--uedp-gap-1' },
  { name: '2', varName: '--uedp-gap-2' },
  { name: '3', varName: '--uedp-gap-3' },
  { name: '4', varName: '--uedp-gap-4' },
  { name: '6', varName: '--uedp-gap-6' },
  { name: '8', varName: '--uedp-gap-8' },
];

export const FoundationalTokensGallery = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', backgroundColor: '#F8FAFC' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--uedp-slate-900)' }}>
        Foundational Tokens Gallery
      </h1>
      <p style={{ color: 'var(--uedp-slate-600)', marginBottom: '32px' }}>
        Border radii, spacing scales, gap, padding, and layout tokens from <code>foundational-tokens.json</code>.
      </p>

      {/* Border Radius Section */}
      <div style={{ background: '#FFF', padding: '24px', borderRadius: '12px', marginBottom: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Border Radii</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
          {borderRadii.map((item) => (
            <div key={item.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  backgroundColor: 'var(--uedp-blue-500, #3B82F6)',
                  borderRadius: `var(${item.varName})`,
                }}
              />
              <span style={{ fontSize: '13px', fontWeight: '600' }}>{item.name}</span>
              <code style={{ fontSize: '11px', color: '#64748B' }}>{item.varName}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing & Gap Scales Section */}
      <div style={{ background: '#FFF', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Spacing & Gap Scales</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {spacingScales.map((item) => (
            <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '100px', fontSize: '13px', fontWeight: '600' }}>
                Scale {item.name}
              </div>
              <div
                style={{
                  height: '24px',
                  backgroundColor: 'var(--uedp-emerald-500, #10B981)',
                  borderRadius: '4px',
                  width: `var(${item.varName}, 0px)`,
                  minWidth: '2px',
                }}
              />
              <code style={{ fontSize: '12px', color: '#64748B' }}>{item.varName}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof FoundationalTokensGallery> = {
  title: 'Tokens/FoundationalTokens',
  component: FoundationalTokensGallery,
  parameters: {
    docs: {
      description: {
        component: 'Gallery displaying border radii, spacing scales, and layout geometry tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FoundationalTokensGallery>;

export const Default: Story = {};
