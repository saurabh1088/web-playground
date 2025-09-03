// dom-demo-enhanced.js

// --- Accessing DOM Elements ---
const h1 = document.getElementsByTagName('h1')[0];
const headingById = document.getElementById('main-heading');
console.log('h1 value:', h1.textContent);
console.log('headingById value:', headingById.textContent);
console.log('Are both equal?', h1 === headingById);

// --- Modifying DOM Elements ---
console.log('Attempting to update h1 textContent...');
h1.textContent = 'Updated Heading';
console.log('h1 after update:', h1.textContent);
console.log('headingById after h1 update:', headingById.textContent);

