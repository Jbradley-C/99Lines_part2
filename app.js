document.addEventListener('DOMContentLoaded', function() {
	//Creating the button and Text for the button
	let button = document.createElement('button');
	let btnText = document.createTextNode('Sing');

	//Adding Text to the Button
	button.appendChild(btnText);

	//Adding button to the body of HTML
	document.body.appendChild(button);

	button.addEventListener('click', function() {


		let Friends = [ 'John', 'Jacob', 'Jingle', 'Himer', 'Schmitt' ];
		//Loops for the songs
		for (let i = 0; i < Friends.length; i++) {
			console.log(Friends[i + ':']);

			for (let num = 99; num > 0; num--) {
				if (num === 2) {
					console.log(
						num +
							' Lines of code in the file! ' + num + ' Lines of Code! ' + Friends[i] + ' deletes one line, clears it all out.' + '.. ' + 				(num - 1) +
							' Line of code in the file!'
					);
				} else if (num === 1) {
					console.log(
						num +
							' Line of code in the file! ' +
							num +
							' Lines of Code! ' +
							Friends[i] +
							' deletes one line, clears it all out.' +
							'.. ' +
							' no more lines of code in the file!'
					);
				} else {
					console.log(
						num +
							'  Lines of code in the file! ' +
							num +
							' Line of Code! ' +
							Friends[i] +
							' deletes one line, clears it all out.' +
							'.. ' +
							(num - 1) +
							'  lines of code in the file!'
					);
				}
			}
		}
	});
});
