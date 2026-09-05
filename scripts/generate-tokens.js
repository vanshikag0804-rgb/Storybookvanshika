import fs from 'fs';
import path from 'path';

console.log('📦 Generating src/styles/figma-tokens.css from token JSON files...');

const baseFile = path.join(process.cwd(), 'base-palette-tokens.json');
const foundFile = path.join(process.cwd(), 'foundational-tokens.json');
const semFile = path.join(process.cwd(), 'semantic-palette.json');

const base = JSON.parse(fs.readFileSync(baseFile, 'utf8'));
const found = JSON.parse(fs.readFileSync(foundFile, 'utf8'));
const sem = JSON.parse(fs.readFileSync(semFile, 'utf8'));

const cssVars = [];
const varMap = new Map();

function formatCssValue(val, type, keyPath) {
  if (val === undefined || val === null) return null;
  if (typeof val === 'object') {
    if (val.hex) return val.hex;
    if (val.colorSpace) {
      const r = Math.round((val.components[0] || 0) * 255);
      const g = Math.round((val.components[1] || 0) * 255);
      const b = Math.round((val.components[2] || 0) * 255);
      const a = val.alpha !== undefined ? val.alpha : 1;
      return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
    }
  }
  if (typeof val === 'number') {
    if (keyPath.includes('opacity')) return String(val);
    return `${val}px`;
  }
  return String(val);
}

function processTokens(obj, prefix = '') {
  if (typeof obj !== 'object' || obj === null) return;

  const varId = obj['$extensions']?.['com.figma.variableId'];
  const rawVal = obj['$value'] ?? obj.value;
  const type = obj['$type'] ?? obj.type;

  if (prefix) {
    let cssVarName = '--uedp-' + prefix
      .replace(/^border radius\./, '')
      .replace(/\./g, '-')
      .replace(/\s+/g, '-')
      .toLowerCase();

    // Handle decimal numbers in path like gap.0.5 -> gap-0-5
    cssVarName = cssVarName.replace(/-0\.5$/, '-0-5');

    let cssVal = formatCssValue(rawVal, type, prefix);
    if (cssVal !== null) {
      cssVars.push(`  ${cssVarName}: ${cssVal};`);
      if (varId) {
        varMap.set(varId, { cssVarName, cssVal });
      }
    }
  }

  for (const key of Object.keys(obj)) {
    if (key.startsWith('$')) continue;
    processTokens(obj[key], prefix ? `${prefix}.${key}` : key);
  }
}

processTokens(base);
processTokens(found);

// Aliases for common base tokens
cssVars.push('  --uedp-black: #000000;');
cssVars.push('  --uedp-white: #ffffff;');

// Process semantic tokens referencing base variables
function processSemanticTokens(obj, prefix = '') {
  if (typeof obj !== 'object' || obj === null) return;
  const rawVal = obj['$value'] ?? obj.value;
  if (typeof rawVal === 'string' && rawVal.startsWith('{') && rawVal.endsWith('}')) {
    const tokenRef = rawVal.slice(1, -1); // e.g. slate.900
    const cssVarName = '--uedp-semantic-' + prefix.replace(/^semantic\./, '').replace(/\./g, '-');
    const refVarName = '--uedp-' + tokenRef.replace(/\./g, '-');
    cssVars.push(`  ${cssVarName}: var(${refVarName});`);
  } else if (prefix && rawVal) {
    const cssVarName = '--uedp-semantic-' + prefix.replace(/^semantic\./, '').replace(/\./g, '-');
    cssVars.push(`  ${cssVarName}: ${rawVal};`);
  }

  for (const key of Object.keys(obj)) {
    if (key.startsWith('$')) continue;
    processSemanticTokens(obj[key], prefix ? `${prefix}.${key}` : key);
  }
}

processSemanticTokens(sem);

const cssContent = `/* Generated Figma Tokens CSS */
:root {
${cssVars.join('\n')}
}
`;

const stylesDir = path.join(process.cwd(), 'src', 'styles');
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
}

const cssPath = path.join(stylesDir, 'figma-tokens.css');
fs.writeFileSync(cssPath, cssContent, 'utf8');

console.log(`✅ Generated ${cssPath} with ${cssVars.length} CSS custom properties.`);
