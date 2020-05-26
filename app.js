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

		//Looping through each friend
		for (let i = 0; i < Friends.length; i++) {
		
		//Add a div with class of friend for each loop of the array	
			let friendDiv = document.createElement("div");
			friendDiv.classList.add("friend");
		
		//Add a header with the name of the current friend inside the header	
			let friendH3 = document.createElement("h3");
			friendH3.textContent = Friends[i];
			friendDiv.appendChild(friendH3);
			document.body.appendChild(friendDiv);

		//Looping through the lyrics of the song	
			for (let num = 99; num > 0; num--) {

        //Adding a paragraph with all 99 lines in it for each friend's header
				let newLyricLine = document.createElement("p");
				friendDiv.appendChild(newLyricLine);

        //If number of lines in is 2, change the grammer to match and put it in the paragraph
				if (num === 2) {				
					newLyricLine.textContent =  num + ' Lines of code in the file! ' + num + ' Lines of Code! ' + Friends[i] + ' deletes one line, clears it all out.' + '.. ' + (num - 1) + ' Line of code in the file!';
					
        //If the number of lines is 1, change grammer to match and put it in the paragraph 
				} else if (num === 1) {
					newLyricLine.textContent = num  + ' Line of code in the file! ' + num + ' Lines of Code! ' + Friends[i] + ' deletes one line, clears it all out.' + '.. ' + ' no more lines of code in the file!';

        //All other lines of the song and add it to paragraph					
				} else {
					newLyricLine.textContent = num  + '  Lines of code in the file! ' + num + ' Line of Code! ' + Friends[i] + ' deletes one line, clears it all out.' + '.. ' + (num - 1) + '  lines of code in the file!';
				}
			}
		}
	});
});
