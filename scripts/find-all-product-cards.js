import fs from 'fs';
const figma = JSON.parse(fs.readFileSync('figma-file.json', 'utf8'));

const results = [];

function search(node, path = []) {
  const currentPath = [...path, `${node.name} (${node.id}, type:${node.type})`];
  if (node.name && node.name.toLowerCase().includes('product')) {
    results.push({
      id: node.id,
      name: node.name,
      type: node.type,
      path: currentPath.join(' > '),
      box: node.absoluteBoundingBox
    });
  }
  if (node.children) {
    for (const child of node.children) {
      search(child, currentPath);
    }
  }
}

search(figma.document);
console.log(`Found ${results.length} nodes matching "product":`);
results.forEach(r => {
  console.log(`- [${r.type}] "${r.name}" (${r.id}) w:${r.box?Math.round(r.box.width):'N/A'} h:${r.box?Math.round(r.box.height):'N/A'}\n  Path: ${r.path}\n`);
});
