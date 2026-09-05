import fs from 'fs';
import path from 'path';

console.log('🚀 Running Vercel Deployment Check...');

const outputDir = path.join(process.cwd(), 'storybook-static');
const vercelConfig = path.join(process.cwd(), 'vercel.json');

if (!fs.existsSync(vercelConfig)) {
  console.error('❌ Error: vercel.json is missing!');
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  console.warn('⚠️ Warning: storybook-static/ directory not found. Please run "npm run build-storybook" first.');
} else {
  const indexHtml = path.join(outputDir, 'index.html');
  if (fs.existsSync(indexHtml)) {
    console.log('✅ Success: storybook-static/ compilation verified with index.html ready for Vercel deployment.');
  } else {
    console.error('❌ Error: index.html not found in storybook-static directory!');
    process.exit(1);
  }
}
