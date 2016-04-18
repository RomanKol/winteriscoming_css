// Smoke

// Get smoke elements
var smokeEls = document.querySelectorAll('.smoke');

// Create a style element
var stylesEl = document.createElement('style');
		stylesEl.type = 'text/css';

function evolveSmoke () {

	// Css styles text
	var stylesText = '/* Generated Smoke Styles*/\n';

	// Iterate through smoke elements
	for (var i = 0; i < smokeEls.length; i++) {

		// Generate object with styles
		var styles = {}

				styles.width = 512 * (Math.round(Math.random() * 4 + 2) / 2);
				styles.height = styles.width;
				styles.margin = (styles.height / -2) + 'px 0 0 ' + (styles.width / -2) +'px',
				styles.top = Math.floor((window.innerHeight * 0.8 ) * Math.random() + window.innerHeight * 0.1) + 'px',
				styles.left = Math.floor((window.innerWidth * 0.8) * Math.random() + window.innerWidth * 0.1) + 'px';
				styles.animation_duration = Math.floor(Math.random() * 30 + 45) + 's';

				styles.width += 'px';
				styles.height += 'px';

		// Add the class to the smoke element
		smokeEls[i].classList.add('smoke-'+ i);

		// Convert the object to css string
		stylesText += objectToCss(i, styles);

		// Add reverse animation class
		if (Math.random() < .5) smokeEls[i].classList.toggle('reverse');

	}

	// Add the styles to the style element
	if (stylesEl.styleSheet){
	  stylesEl.styleSheet.cssText = stylesText;
	} else {
	  stylesEl.appendChild(document.createTextNode(stylesText));
	}

	// Add the style to the document
	document.querySelector('head').appendChild(stylesEl);

}

// Function for converting and prettify objects to css strings
function objectToCss (index, styles) {

	var text = '.smoke-' + index;
			text += JSON.stringify(styles)
				.replace(/["]+/g, '')
				.replace(/[_]+/g, '-')
				.replace(/[,]+/g, ';\n\t')
				.replace(/[{]+/g, ' {\n\t')
				.replace(/[}]+/g, '\n}\n\n');

	return text;
}

// Initialize smoke
evolveSmoke();

// Reinitialize on window resize
window.addEventListener('resize', evolveSmoke);

// Infobox Code
var infoboxEl = document.querySelector('.infobox'),
		openEl = document.querySelector('.js-open'),
		closeEl = document.querySelector('.js-close');

// Open Infobox
openEl.addEventListener('click', function (evt) {

	infoboxEl.classList.remove('hide');

});

// Close Infobox
closeEl.addEventListener('click', function (evt) {

	infoboxEl.classList.add('hide');

});


