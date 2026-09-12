// Run with: node _chatbot-tests/test-pricing.js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = {window: {}, document: {getElementById: () => null, addEventListener: () => {}}};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'site.js'), 'utf8'), context);
const estimate = context.window.PSSPricing.estimate;
for (const [photos, rate, total] of [[1,20,5000],[1000,20,20000],[1001,18,18018],[2000,18,36000],[2001,15,30015],[3000,15,45000],[3001,15,45015],[10000,15,150000]]) {
  const result = estimate([photos, 0, 0]);
  assert.equal(result.rate, rate);
  assert.equal(result.total, total);
}
assert.equal(estimate([3001, 100, 100]).total, 52015);
assert.equal(estimate([0, 100, 100]).total, 7000);
assert.equal(estimate([1, 1, 1]).total, 5000);
for (const counts of [[0,0,0],[-1,0,0],[1.5,0,0],[Infinity,0,0],[Number.MAX_SAFE_INTEGER,0,0]]) {
  assert.ok(estimate(counts).error);
}
for (let photos = 1; photos <= 10000; photos++) {
  assert.ok(estimate([photos, 0, 0]).rate >= 15, 'Photo rate must never fall below 15 cents');
}
const chat = fs.readFileSync(path.join(root, 'chat.js'), 'utf8');
vm.runInContext(chat.split('// Native dialog')[0], context);
for (const answer of [...context.PSS_FAQ.map(item => item.a), ...Object.values(context.PSS_FALLBACK)]) {
  assert.ok(!/\$0\.12|12 cents|12¢/.test(answer), 'No retired pricing in chat');
}
assert.match(context.pssFindAnswer('How much does photo scanning cost?').a, /2001 or more are \$0\.15/);
console.log('PASS: pricing boundaries, mixed orders, minimum, invalid quantities, 10,000-count rate floor, and chatbot pricing.');
