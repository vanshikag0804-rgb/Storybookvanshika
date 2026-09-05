import fs from 'fs';
const figma = JSON.parse(fs.readFileSync('figma-file.json', 'utf8'));

function findNode(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (const c of node.children) {
      const r = findNode(c, id);
      if (r) return r;
    }
  }
  return null;
}

function dumpNode(node, depth = 0) {
  const indent = '  '.repeat(depth);
  let details = `${indent}- [${node.type}] "${node.name}" (${node.id})`;
  if (node.absoluteBoundingBox) {
    const { width, height } = node.absoluteBoundingBox;
    details += ` (${Math.round(width)}x${Math.round(height)})`;
  }
  if (node.characters !== undefined) {
    details += ` text: "${node.characters.replace(/\n/g, '\\n')}"`;
  }
  if (node.style) {
    const s = node.style;
    details += ` font:[${s.fontFamily} ${s.fontWeight} ${s.fontSize}px/${s.lineHeightPx ? Math.round(s.lineHeightPx)+'px' : 'auto'}]`;
  }
  if (node.layoutMode) {
    details += ` flex:${node.layoutMode} gap:${node.itemSpacing||0} p:[${node.paddingTop||0},${node.paddingRight||0},${node.paddingBottom||0},${node.paddingLeft||0}]`;
  }
  if (node.cornerRadius) details += ` r:${node.cornerRadius}`;
  if (node.rectangleCornerRadii) details += ` radii:[${node.rectangleCornerRadii.join(',')}]`;
  if (node.fills && node.fills.length > 0) {
    const f = node.fills[0];
    if (f.type === 'SOLID' && f.color) {
      const r = Math.round(f.color.r * 255).toString(16).padStart(2, '0');
      const g = Math.round(f.color.g * 255).toString(16).padStart(2, '0');
      const b = Math.round(f.color.b * 255).toString(16).padStart(2, '0');
      details += ` fill:#${r}${g}${b}`;
    } else if (f.type === 'IMAGE') {
      details += ` fill:IMAGE(${f.imageRef})`;
    }
  }
  if (node.strokes && node.strokes.length > 0) {
    const s = node.strokes[0];
    if (s.type === 'SOLID' && s.color) {
      const r = Math.round(s.color.r * 255).toString(16).padStart(2, '0');
      const g = Math.round(s.color.g * 255).toString(16).padStart(2, '0');
      const b = Math.round(s.color.b * 255).toString(16).padStart(2, '0');
      details += ` stroke:#${r}${g}${b} w:${node.strokeWeight}`;
    }
  }
  console.log(details);
  if (node.children) {
    for (const c of node.children) {
      dumpNode(c, depth + 1);
    }
  }
}

const def = findNode(figma.document, '106:9228');
console.log('=== Default (106:9228) ===');
if (def) dumpNode(def);
