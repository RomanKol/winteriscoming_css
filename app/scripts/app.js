import './countdown';

// Smoke

// Get smoke elements
const smokeEls = document.querySelectorAll('.smoke');

// Create a style element
const stylesEl = document.createElement('style');
stylesEl.type = 'text/css';

function evolveSmoke() {
  // Css styles text
  const smokeStyles = [];

  smokeEls.forEach((smokeEl, i) => {
    const width = 512 * (Math.round(Math.random() * 4 + 2) / 2);
    const styles = `
      .smoke-${i} {
        width: ${width}px;
        height: ${width}px;
        margin: ${width / -2}px 0 0 ${width / -2}px;
        top: ${Math.floor((window.innerHeight * 0.8) * Math.random() + window.innerHeight * 0.1)}px;
        left: ${Math.floor((window.innerWidth * 0.8) * Math.random() + window.innerWidth * 0.1)}px;
        animation-duration: ${Math.floor(Math.random() * 30 + 45)}s;
        z-Index: ${Math.round(Math.random() * 400)};
      }
    `;
    // Add the class to the smoke element
    smokeEl.classList.add(`smoke-${i}`);

    // Add reverse animation class
    if (Math.random() < 0.5) smokeEl.classList.toggle('reverse');
    smokeStyles.push(styles);
  });

  // Add the styles to the style element
  if (stylesEl.styleSheet) stylesEl.styleSheet.cssText = smokeStyles.join(' ');
  else stylesEl.appendChild(document.createTextNode(smokeStyles.join(' ')));

  // Add the style to the document
  document.querySelector('head').appendChild(stylesEl);
}

// Initialize smoke
evolveSmoke();

// Reinitialize on window resize
window.addEventListener('resize', evolveSmoke);

const infoboxEl = document.querySelector('.info-box');

document
  .querySelector('.info-box-button.open')
  .addEventListener('click', () => infoboxEl.classList.toggle('hidden'));

document
  .querySelector('.info-box-button.close')
  .addEventListener('click', () => infoboxEl.classList.toggle('hidden'));
