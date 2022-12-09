$(document).ready(function() {
  	const leftPic = document.querySelector('#intro-left');
  	const rightPic = document.querySelector('#intro-right');

  	//creating an array with two random values (between 0 and 6)
  	const randomPic = () => {
      		const array = [];
      		for (let i=0; i<2; i++){
        		array.push(parseInt(Math.random()*7));
    		}
		console.log(array);
		while (array[0] == array[1]){
			array[1] = parseInt(Math.random()*7);
			console.log(array[1]);
		}
    		return array;
  	}

	//setting the intro left and right random pics
	const setPics = () => {
		const pics = randomPic();
		const leftUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[0])+".jpg";
		const rightUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[1])+".jpg";
      		$(leftPic).attr("src", leftUrl);
      		$(rightPic).attr("src", rightUrl); 
		console.log(rightUrl);
	}


  	window.addEventListener('load', setPics());
});
