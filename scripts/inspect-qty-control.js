import fs from 'fs';
const specs = JSON.parse(fs.readFileSync('component-specs.json', 'utf8'));
const figma = JSON.parse(fs.readFileSync('figma-file.json', 'utf8'));

const qtyMatches = specs.filter(s => s.name.toLowerCase().includes('quantity') || s.name.toLowerCase().includes('quality'));
console.log('--- Specs matches ---');
console.log(JSON.stringify(qtyMatches, null, 2));

function searchFigma(node, query) {
  const matches = [];
  function rec(n) {
    if (n.name && n.name.toLowerCase().includes(query.toLowerCase())) {
      matches.push({ id: n.id, name: n.name, type: n.type });
    }
    if (n.children) n.children.forEach(rec);
  }
  rec(node);
  return matches;
}

console.log('\n--- Figma Quality matches ---');
console.log(searchFigma(figma.document, 'quality'));

console.log('\n--- Figma Quantity matches ---');
console.log(searchFigma(figma.document, 'quantity'));
