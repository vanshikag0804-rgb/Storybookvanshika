import fs from 'fs';
import path from 'path';

console.log('🛠️ Re-writing Storybook stories cleanly...');

const compSpecsFile = path.join(process.cwd(), 'component-specs.json');
const compSpecs = JSON.parse(fs.readFileSync(compSpecsFile, 'utf8'));

function toPascalCase(name) {
  return name
    .replace(/[^\w\s-]/g, '')
    .split(/[\s_-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

const componentList = [];

compSpecs.forEach(cs => {
  const figmaName = cs.name;
  let componentName = toPascalCase(figmaName);
  if (!componentName) componentName = 'Component';
  if (componentName === 'InventoryNavbar' && figmaName === 'inventory navbar') {
    componentName = 'InventoryNavbarTab';
  }

  const variantPropsMap = new Map();
  cs.variants.forEach(v => {
    v.name.split(',').forEach(part => {
      const [pKey, pVal] = part.split('=').map(s => s.trim());
      if (pKey && pVal) {
        if (!variantPropsMap.has(pKey)) variantPropsMap.set(pKey, new Set());
        variantPropsMap.get(pKey).add(pVal);
      }
    });
  });

  const propEntries = Array.from(variantPropsMap.entries());

  componentList.push({
    figmaName,
    componentName,
    variants: cs.variants,
    propEntries
  });
});

componentList.push({
  figmaName: 'Avatar',
  componentName: 'Avatar',
  variants: [{ name: 'Default' }],
  propEntries: [['State', new Set(['Default'])]]
});

componentList.push({
  figmaName: 'Divider',
  componentName: 'Divider',
  variants: [{ name: 'Default' }],
  propEntries: [['State', new Set(['Default'])]]
});

const componentsRootDir = path.join(process.cwd(), 'src', 'components');

componentList.forEach(comp => {
  const { figmaName, componentName, propEntries } = comp;
  const compDir = path.join(componentsRootDir, componentName);

  const argTypesObj = {};
  propEntries.forEach(([propKey, valuesSet]) => {
    const validKey = propKey.replace(/\s+/g, '');
    argTypesObj[validKey] = {
      control: 'select',
      options: Array.from(valuesSet),
      description: `Figma Variant Property: ${propKey}`,
    };
  });

  const defaultArgsObj = {};
  propEntries.forEach(([propKey, valuesSet]) => {
    const validKey = propKey.replace(/\s+/g, '');
    defaultArgsObj[validKey] = Array.from(valuesSet)[0];
  });

  const variantSummary = propEntries.map(([k, v]) => `${k}: ${Array.from(v).join(', ')}`).join(' | ') || 'Default';

  const storyFileContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    docs: {
      description: {
        component: '### 📐 Figma Component Specification: ${figmaName}\\n\\n' +
          '| Property | Value / Description |\\n' +
          '| :--- | :--- |\\n' +
          '| **Exact Figma Layer Name** | \`${figmaName}\` |\\n' +
          '| **Component Type** | React Synchronized Spec |\\n' +
          '| **Bound Tokens** | \`--uedp-*\` Tokens Aliased |\\n' +
          '| **Variant Properties** | ${variantSummary} |\\n',
      },
    },
  },
  argTypes: ${JSON.stringify(argTypesObj, null, 2)},
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: ${JSON.stringify(defaultArgsObj, null, 2)},
};
`;

  fs.writeFileSync(path.join(compDir, `${componentName}.stories.tsx`), storyFileContent, 'utf8');
});

console.log('✅ Story files rewritten with clean code format.');
