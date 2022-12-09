$(document).ready(function() {
  	const introLeft = document.querySelector('#intro-left');
	const introCenter = document.querySelector('#intro-center');
  	const introRight = document.querySelector('#intro-right');

  	//creating an array with two random values (between 0 and 7)
  	const randomPic = () => {
      		const array = [];
      		for (let i=0; i<2; i++){
        		array.push(parseInt(Math.random()*7));
    		}
		console.log(array);
		while (array[0] == array[1]){
			array[1] = parseInt(Math.random()*7);
		}
    		return array;
  	}

	//setting the intro left and right random pics
	const setPics = () => {
		const pics = randomPic();
		const leftUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[0])+".jpg";
		const rightUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[1])+".jpg";
		$(introLeft).attr("src", leftUrl);
		$(introRight).attr("src", rightUrl);
	}

	//setting the intro part horizontal in case the screen height is bigger than the width
	const introDirection = () => {
		const width = screen.width;
		const height = screen.height;

		if (height > width) {
			//$
		}
	}

	const loadFunctions = () => {
		setPics();
	}

  	window.addEventListener('load', loadFunctions());
});
