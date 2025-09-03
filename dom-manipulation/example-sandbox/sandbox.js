// dom-demo-enhanced.js

// --- Accessing DOM Elements ---
// Below are three ways to access an element
const firstHeadingFromAllHeadings = document.getElementsByTagName('h1')[0];
const headingById = document.getElementById('main-heading');
const headingByQuerySelector = document.querySelector('h1#main-heading');

// If getElementById or querySelector returns null silently without any error, it means the element was not found
// In such case below check will prevent errors
if (firstHeadingFromAllHeadings && headingById && headingByQuerySelector) {
    console.log('h1 value:', firstHeadingFromAllHeadings.textContent);
    console.log('headingById value:', headingById.textContent);
    console.log('headingByQuerySelector value:', headingByQuerySelector.textContent);
}

if (firstHeadingFromAllHeadings === headingById && headingById === headingByQuerySelector) {
    console.log('All three methods point to the same DOM element.');
} else {
    console.log('The methods point to different DOM elements.');
}

// --- Modifying DOM Elements ---
console.log('Attempting to update h1 textContent...');

if (firstHeadingFromAllHeadings && headingById && headingByQuerySelector) {
    firstHeadingFromAllHeadings.textContent = 'DOM Manipulation Sandbox - Updated!';
    console.log('firstHeadingFromAllHeadings after update:', firstHeadingFromAllHeadings.textContent);
    console.log('headingById after h1 update:', headingById.textContent);
}

