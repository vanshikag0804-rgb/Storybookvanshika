import type { Preview } from '@storybook/react';
import '../src/styles/figma-tokens.css';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const isDarkBackground = context.globals.backgrounds?.value === '#0F172A' || context.args?.darkMode === true;
      if (typeof document !== 'undefined') {
        if (isDarkBackground) {
          document.documentElement.setAttribute('data-theme', 'dark');
          document.documentElement.classList.add('uedp-dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
          document.documentElement.classList.remove('uedp-dark');
        }
      }
      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8FAFC' },
        { name: 'dark', value: '#0F172A' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
};

export default preview;

