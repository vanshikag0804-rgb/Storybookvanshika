import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const baseColorFamilies = {
  slate: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  gray: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  zinc: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  neutral: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  stone: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  red: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  orange: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  amber: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  yellow: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  green: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  emerald: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  teal: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  cyan: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  sky: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  blue: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  indigo: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  violet: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  purple: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  fuchsia: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  pink: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  rose: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
};

export const ColorPaletteGallery = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', backgroundColor: '#F8FAFC' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--uedp-slate-900)' }}>
        Base Color Palette Tokens
      </h1>
      <p style={{ color: 'var(--uedp-slate-600)', marginBottom: '32px' }}>
        Swatches generated directly from <code>base-palette-tokens.json</code> mapped to <code>--uedp-*</code> CSS custom properties.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ background: '#FFF', padding: '20px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', textTransform: 'capitalize' }}>Base Neutrals</h2>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '80px', height: '60px', borderRadius: '8px', background: 'var(--uedp-base-black)', border: '1px solid #E2E8F0' }} />
              <span style={{ fontSize: '12px', fontWeight: '500' }}>black</span>
              <code style={{ fontSize: '10px', color: '#64748B' }}>--uedp-base-black</code>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '80px', height: '60px', borderRadius: '8px', background: 'var(--uedp-base-white)', border: '1px solid #CBD5E1' }} />
              <span style={{ fontSize: '12px', fontWeight: '500' }}>white</span>
              <code style={{ fontSize: '10px', color: '#64748B' }}>--uedp-base-white</code>
            </div>
          </div>
        </div>

        {Object.entries(baseColorFamilies).map(([family, shades]) => (
          <div key={family} style={{ background: '#FFF', padding: '20px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', textTransform: 'capitalize' }}>{family}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {shades.map((shade) => {
                const varName = `--uedp-${family}-${shade}`;
                return (
                  <div key={shade} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px', gap: '6px' }}>
                    <div
                      style={{
                        width: '100%',
                        height: '50px',
                        borderRadius: '8px',
                        backgroundColor: `var(${varName})`,
                        border: shade === '50' || shade === '100' ? '1px solid #E2E8F0' : 'none',
                      }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: '600' }}>{shade}</span>
                    <code style={{ fontSize: '9px', color: '#64748B', textAlign: 'center', wordBreak: 'break-all' }}>{varName}</code>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta: Meta<typeof ColorPaletteGallery> = {
  title: 'Tokens/ColorPalette',
  component: ColorPaletteGallery,
  parameters: {
    docs: {
      description: {
        component: 'Interactive swatch gallery displaying all base color palette families from `base-palette-tokens.json`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPaletteGallery>;

export const Default: Story = {};
