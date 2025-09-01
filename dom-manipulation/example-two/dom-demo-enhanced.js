// dom-demo-enhanced.js

const container = document.getElementById('container');
const addBtn = document.getElementById('add-div');
const rmBtn = document.getElementById('rm-div');
const colorBtn = document.getElementById('color-divs');
const resetBtn = document.getElementById('reset-colors');
const output = document.getElementById('output');
const observerLog = document.getElementById('observer-log');

let divCount = 1;
const colors = ["#c8e6c9", "#ffe0b2", "#ffccbc", "#d1c4e9", "#b2ebf2", "#fff9c4"];

// Observe the container for changes
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    let msg = `[${new Date().toLocaleTimeString()}] `;
    if (mutation.type === 'childList') {
      msg += `(DOM change) Child nodes added/removed.`;
    } else if (mutation.type === 'attributes') {
      msg += `Attribute changed on: ${mutation.target.className}`;
    }
    observerLog.textContent += msg + '\n';
    observerLog.scrollTop = observerLog.scrollHeight;
  });
});
observer.observe(container, { attributes: true, childList: true, subtree: true });

// Show the DOM tree structure
function showTree() {
  output.innerHTML =
    `<strong>Current # of DIVs:</strong> ${container.querySelectorAll('.myDiv').length}<br>`
    + `<pre>${container.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`;
}

// Add new DIV
addBtn.onclick = () => {
  const div = document.createElement('div');
  div.className = 'myDiv';
  div.textContent = `New DIV #${++divCount} (double click to edit)`;
  div.setAttribute('data-index', divCount);
  container.appendChild(div);
  showTree();
};

// Remove last DIV
rmBtn.onclick = () => {
  const divs = container.querySelectorAll('.myDiv');
  if (divs.length > 0) container.removeChild(divs[divs.length - 1]);
  showTree();
};

// Change to random color
colorBtn.onclick = () => {
  Array.from(container.querySelectorAll('.myDiv')).forEach(div => {
    div.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    div.classList.add('colored');
  });
};

// Reset colors
resetBtn.onclick = () => {
  Array.from(container.querySelectorAll('.myDiv')).forEach(div => {
    div.style.backgroundColor = '';
    div.classList.remove('colored');
  });
};

container.addEventListener('click', (e) => {
  // Attribute toggle and display parent/child info
  if (e.target.classList.contains('myDiv')) {
    let div = e.target;
    div.toggleAttribute('data-active');
    const parent = div.parentNode;
    output.innerHTML =
      `<strong>Clicked DIV:</strong> ${div.textContent}<br>`
      + `<strong>Parent Node:</strong> ${parent.nodeName}<br>`
      + `<strong>Attributes:</strong> ${JSON.stringify([...div.attributes].map(a=>[a.name,a.value]))}`;
  }
});

// Inline Editing (double click)
container.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('myDiv')) {
    let div = e.target;
    div.contentEditable = true;
    div.classList.add('editing');
    div.focus();
    div.onblur = () => {
      div.contentEditable = false;
      div.classList.remove('editing');
      showTree();
    };
  }
});

// Initialize tree display
showTree();

