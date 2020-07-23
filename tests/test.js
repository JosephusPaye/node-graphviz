const path = require('path');
const fs = require('fs');
const assert = require('uvu/assert');
const { test } = require('uvu');

function loadSnapshot(fileName) {
  return fs.readFileSync(path.join(__dirname, fileName), 'utf8');
}

const { graphviz } = require('../index.js');

const graph = `
  digraph {
    a -> b;
    b -> c;
    c -> d;
    d -> a;
  }
`;

test('graphviz.dot()', async () => {
  const svg = await graphviz.circo(graph, 'svg');
  assert.snapshot(svg, loadSnapshot('output.svg'));
});

test.run();
