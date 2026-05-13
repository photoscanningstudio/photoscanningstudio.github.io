// Photo Scanning Studio — Chatbot test harness
//
// Reads ../index.html, extracts the chatbot's data and matching functions,
// runs a battery of test questions through pssFindAnswer(), and writes a
// markdown report to test-results.md.
//
// Usage:
//   node _chatbot-tests/test-chatbot.js
// or from this folder:
//   node test-chatbot.js
//
// Notes:
// - The harness uses the live chatbot core from index.html, so it always
//   tests whatever is currently deployed (or about to be deployed).
// - To add or change questions, edit the QUESTIONS array below and re-run.

const fs = require('fs');
const path = require('path');

// --- Locate chatbot core in index.html ---
const indexPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');

const startMarker = '// Photo Scanning Studio Chatbot v2';
const endMarker = 'var eB=document.getElementById';
const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker, startIdx);
if (startIdx === -1 || endIdx === -1) {
  console.error('ERROR: Could not locate chatbot script section in index.html.');
  console.error('Looked for start marker:', startMarker);
  console.error('Looked for end marker:', endMarker);
  process.exit(1);
}
const chatbotCore = html.substring(startIdx, endIdx);

// --- Load chatbot core via Function constructor and expose pssFindAnswer ---
let pssFindAnswer, PSS_FAQ;
try {
  const factory = new Function(`
    ${chatbotCore}
    return { pssFindAnswer: pssFindAnswer, PSS_FAQ: PSS_FAQ };
  `);
  const exported = factory();
  pssFindAnswer = exported.pssFindAnswer;
  PSS_FAQ = exported.PSS_FAQ;
} catch (e) {
  console.error('ERROR: Failed to load chatbot core:', e.message);
  process.exit(1);
}

console.log(`Loaded chatbot core. ${PSS_FAQ.length} Q&A entries.`);

// --- 100 diverse test questions ---
const QUESTIONS = [
  // Greetings / small talk
  "hi",
  "hello there",
  "good morning",
  "thanks!",
  "are you a real person",
  "ok cool",
  "goodbye",
  "what can you help with",

  // Pricing — direct
  "how much does it cost",
  "what's the price",
  "how much for 100 photos",
  "how much for slides",
  "price for negatives",
  "do you have any discounts",
  "is there a minimum order",
  "cost for a usb",
  "are there any hidden fees",
  "how much for an album",
  "senior discount",
  "veteran discount",
  "sales tax",
  "give me an estimate",
  "how much for restoration",

  // Services
  "do you scan polaroids",
  "can you scan 35mm slides",
  "do you scan 120 film",
  "do you scan 110 film",
  "super 8 reels",
  "do you do vhs",
  "what kinds of photos do you scan",
  "scan documents",
  "fix torn photos",
  "colorize black and white",
  "crop my photos",
  "audio cassettes",
  "tintype photos",
  "glass negatives",
  "scan from my phone",

  // Quality
  "what dpi do you scan in",
  "scan resolution",
  "what file format",
  "is 600 dpi enough for printing",
  "can you scan higher resolution",

  // Timing
  "how long does it take",
  "rush service available",
  "can you finish by christmas",
  "how busy are you",

  // Pickup / location
  "where are you located",
  "what's your address",
  "do you offer pickup",
  "can i drop off my photos",
  "what are your hours",
  "how far do you travel",
  "are you open on weekends",
  "what towns do you serve",

  // Mail-in
  "can i mail my photos",
  "how should i pack my photos",
  "where do i send my photos",
  "what if package gets lost",
  "do you ship internationally",

  // Photo prep
  "my photos are in an album",
  "what about moldy photos",
  "photos have writing on the back",
  "should i remove photos from frames",
  "tape on my photos",

  // Delivery
  "how do i get my photos back",
  "usb or cloud",
  "can you put on dvd",
  "external hard drive option",

  // Slideshows
  "do you make slideshows",
  "memorial slideshow",
  "wedding slideshow",
  "graduation slideshow",
  "how much for a slideshow",
  "how long is a typical slideshow",
  "can i pick the music",
  "pet memorial slideshow",

  // Payment
  "what payment methods do you accept",
  "do you take credit cards",
  "do i pay before or after",

  // Trust
  "are my photos safe with you",
  "will i get my originals back",
  "do you keep copies of my files",
  "are you insured",

  // About
  "who is dan",
  "why should i choose you",
  "how are you different from legacybox",
  "do you have facebook",
  "what's your website",

  // Scenarios
  "my mom passed away and i need help",
  "found a box of photos in the attic",
  "planning a 50th anniversary",
  "mom is moving to a nursing home",
  "what's a good gift for grandma",
  "i inherited boxes of old photos",

  // Edge cases / paraphrasing / typos
  "yes",
  "ok thanks",
  "asdfgh",
  "what's the weather",
  "scan my old family photos",
  "i want to digitize my pictures",
  "preserve my family memories",
  "hw much",
  "wat dpi",
  "scan polaroidds"
];

// --- Run tests ---
const results = QUESTIONS.map((q, i) => {
  const f = pssFindAnswer(q);
  if (!f) {
    return { i, q, status: 'no-match', match: null, cat: null, answer: null };
  }
  if (f._fallback) {
    return { i, q, status: 'fallback', match: '(category fallback)', cat: f.cat, answer: f.a };
  }
  return { i, q, status: 'matched', match: f.q, cat: f.cat || '', answer: f.a };
});

// --- Tallies ---
const counts = {
  matched: results.filter(r => r.status === 'matched').length,
  fallback: results.filter(r => r.status === 'fallback').length,
  noMatch: results.filter(r => r.status === 'no-match').length
};

// --- Markdown report ---
const out = [];
out.push('# Photo Scanning Studio — Chatbot Test Results');
out.push('');
out.push(`**Generated:** ${new Date().toISOString()}`);
out.push(`**FAQ entries loaded:** ${PSS_FAQ.length}`);
out.push(`**Total questions tested:** ${results.length}`);
out.push('');
out.push('| Status | Count |');
out.push('|---|---|');
out.push(`| ✅ Matched specific FAQ | ${counts.matched} |`);
out.push(`| 🟡 Category fallback | ${counts.fallback} |`);
out.push(`| ⚫ No match | ${counts.noMatch} |`);
out.push('');
out.push('---');
out.push('');

// One section per status
const sections = [
  { key: 'matched', heading: '## ✅ Matched specific FAQ' },
  { key: 'fallback', heading: '## 🟡 Category fallback' },
  { key: 'no-match', heading: '## ⚫ No match' }
];

sections.forEach(({ key, heading }) => {
  const subset = results.filter(r => r.status === key);
  if (!subset.length) return;
  out.push(heading);
  out.push('');
  subset.forEach(r => {
    out.push(`### ${r.i + 1}. \`${r.q}\``);
    if (r.match) out.push(`**Matched:** ${r.match}${r.cat ? ` _(category: ${r.cat})_` : ''}`);
    if (r.answer) {
      out.push('');
      out.push(`> ${r.answer}`);
    }
    out.push('');
  });
});

const outPath = path.join(__dirname, 'test-results.md');
fs.writeFileSync(outPath, out.join('\n'), 'utf8');
console.log(`Results written to ${outPath}`);
console.log(`Summary: ${counts.matched} matched | ${counts.fallback} fallback | ${counts.noMatch} no-match`);
