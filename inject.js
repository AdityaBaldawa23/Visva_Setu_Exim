const fs = require('fs');
const mapFile = 'src/components/world-map.jsx';
let content = fs.readFileSync(mapFile, 'utf8');
const indiaPath = fs.readFileSync('indiaPath.txt', 'utf8').trim();

const insertion = '\n        {/* Exact India Highlight Polygon */}\n        <g className=\
pointer-events-none\>\n          <path d=\ + indiaPath + \ fill=\#22503d\ opacity=\1\ stroke=\#a68a56\ strokeWidth=\0.5\ />\n        </g>\n';

content = content.replace('</defs>', '</defs>' + insertion);
fs.writeFileSync(mapFile, content);
console.log('Inserted India path successfully!');
