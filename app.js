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

			let friendDiv = document.createElement("div");
			friendDiv.classList.add("friend");
			let friendH3 =document.createElement("h3");
			friendH3.textContent = Friends[i];
			friendDiv.appendChild(friendH3);
			document.body.appendChild(friendDiv);

			for (let num = 99; num > 0; num--) {

				let newLyricLine = document.createElement("p");
				friendDiv.appendChild(newLyricLine);


				if (num === 2) {
				
					newLyricLine.textContent =  num + ' Lines of code in the file! ' + num + ' Lines of Code! ' + Friends[i] + ' deletes one line, clears it all out.' + '.. ' + (num - 1) + ' Line of code in the file!';
					;

				} else if (num === 1) {
					newLyricLine.textContent = num  + ' Line of code in the file! ' + num + ' Lines of Code! ' + Friends[i] + ' deletes one line, clears it all out.' + '.. ' + ' no more lines of code in the file!';

				} else {

					newLyricLine.textContent = num  + '  Lines of code in the file! ' + num + ' Line of Code! ' + Friends[i] + ' deletes one line, clears it all out.' + '.. ' + (num - 1) + '  lines of code in the file!';
				}
			}
		}
	});
});
