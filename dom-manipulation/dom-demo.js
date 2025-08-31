// dom-demo.js

// Select DOM elements
const container = document.getElementById('container');
const addBtn = document.getElementById('add-div');
const changeBtn = document.getElementById('change-text');
const highlightBtn = document.getElementById('highlight-divs');
const removeBtn = document.getElementById('remove-div');
const output = document.getElementById('output');

// Display current DOM structure
function displayDOMTree() {
  // Show HTML representation (simplified)
  output.textContent = container.outerHTML;
}

// Add a new div dynamically
addBtn.addEventListener('click', function() {
  const newDiv = document.createElement('div');
  newDiv.className = 'myDiv';
  newDiv.textContent = `New DIV added at ${new Date().toLocaleTimeString()}`;
  container.appendChild(newDiv);
  displayDOMTree();
});

// Change text of the first div
changeBtn.addEventListener('click', function() {
  const firstDiv = container.querySelector('.myDiv');
  if (firstDiv) {
    firstDiv.textContent = "The text of this DIV was changed!";
    displayDOMTree();
  }
});

// Highlight all divs inside container
highlightBtn.addEventListener('click', function() {
  const divs = container.querySelectorAll('.myDiv');
  divs.forEach(div => {
    div.classList.toggle('highlight');
  });
  displayDOMTree();
});

// Remove the last div inside container
removeBtn.addEventListener('click', function() {
  const divs = container.querySelectorAll('.myDiv');
  if (divs.length > 0) {
    container.removeChild(divs[divs.length - 1]);
    displayDOMTree();
  }
});

// Initial call to display current DOM
displayDOMTree();

