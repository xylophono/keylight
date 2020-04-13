// The colours we're working with
const backgrounds = {
  1900: 'rgb(255,147,41)',
  2600: 'rgb(255,197,143)',
  2850: 'rgb(255,214,170)',
  3200: 'rgb(255,241,224)',
  5200: 'rgb(255,240,244)',
  5400: 'rgb(255,255,251)',
  6000: 'rgb(255,255,255)',
  7000: 'rgb(201,226,255)',
  20000: 'rgb(64,156,255)',
  reset: '#111',
};

// Function to toggle controls
function toggleControls() {
  document.getElementById('body').classList.toggle('active');
}

// Function to change page background-color
function setBackgroundColor() {
  document.getElementById('body').style.backgroundColor = this.style.backgroundColor;
  toggleControls();
}

// Function to setup the app
function setup() {
  const controlBox = document.getElementById('controls');
  // First lets add the buttons to the page
  Object.keys(backgrounds).forEach((k) => {
    const output = document.createElement('button');
    output.classList.add('lightButton');
    output.style.backgroundColor = backgrounds[k];
    output.dataset.name = k;
    output.title = k === 'reset' ? k : `${k} Kelvin`;
    controlBox.appendChild(output);
  });

  // Then lets add an event listener to handle button clicks
  const buttons = document.getElementsByClassName('lightButton');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', setBackgroundColor);
  }

  // And one for the overlay
  document.getElementById('overlay').addEventListener('click', toggleControls);
}

setup();
