import fs from 'fs';
const specs = JSON.parse(fs.readFileSync('component-specs.json', 'utf8'));
const figma = JSON.parse(fs.readFileSync('figma-file.json', 'utf8'));

const match = specs.filter(s => s.name.toLowerCase().includes('radio button') || s.layerName?.toLowerCase().includes('radio button'));
console.log('--- Specs ---');
console.log(JSON.stringify(match, null, 2));

function findNode(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const res = findNode(child, id);
      if (res) return res;
    }
  }
  return null;
}

function dumpFull(node, depth = 0) {
  const indent = '  '.repeat(depth);
  const bbox = node.absoluteBoundingBox ? `[${Math.round(node.absoluteBoundingBox.width)}x${Math.round(node.absoluteBoundingBox.height)} @ (${Math.round(node.absoluteBoundingBox.x)},${Math.round(node.absoluteBoundingBox.y)})]` : '';
  const flex = node.layoutMode ? `flex:${node.layoutMode} gap:${node.itemSpacing||0} p:[${node.paddingTop||0},${node.paddingRight||0},${node.paddingBottom||0},${node.paddingLeft||0}] align:${node.counterAxisAlignItems||'default'} justify:${node.primaryAxisAlignItems||'default'}` : '';
  const txt = node.characters !== undefined ? ` text:"${node.characters.replace(/\n/g, '\\n')}"` : '';
  const font = node.style ? ` font:[${node.style.fontFamily} ${node.style.fontWeight} ${node.style.fontSize}px/${node.style.lineHeightPx?Math.round(node.style.lineHeightPx)+'px':'auto'}]` : '';
  const r = node.cornerRadius ? ` r:${node.cornerRadius}` : '';
  const radii = node.rectangleCornerRadii ? ` radii:[${node.rectangleCornerRadii.join(',')}]` : '';
  
  let fill = '';
  if (node.fills && node.fills.length > 0) {
    const f = node.fills[0];
    if (f.type === 'SOLID' && f.color) {
      const hex = '#' + ['r','g','b'].map(c => Math.round(f.color[c]*255).toString(16).padStart(2,'0')).join('');
      fill = ` fill:${hex}${f.opacity !== undefined ? `(a:${f.opacity})` : ''}`;
    }
  }

  let stroke = '';
  if (node.strokes && node.strokes.length > 0) {
    const s = node.strokes[0];
    if (s.type === 'SOLID' && s.color) {
      const hex = '#' + ['r','g','b'].map(c => Math.round(s.color[c]*255).toString(16).padStart(2,'0')).join('');
      stroke = ` stroke:${hex} w:${node.strokeWeight}`;
    }
  }

  console.log(`${indent}- [${node.type}] "${node.name}" (${node.id}) ${bbox} ${flex} ${font}${txt}${r}${radii}${fill}${stroke}`);

  if (node.children) {
    node.children.forEach(c => dumpFull(c, depth + 1));
  }
}

if (match.length > 0) {
  match.forEach(m => {
    console.log(`\n================ Component: ${m.name} (${m.id}) ================`);
    const node = findNode(figma.document, m.id);
    if (node) dumpFull(node);
  });
}
