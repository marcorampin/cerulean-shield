$(document).ready(function() {
  	const leftPic = document.querySelector('#intro-left');
  	const rightPic = document.querySelector('#intro-right');

  	//creating an array with two random values (between 0 and 6)
  	const randomPic = () => {
      		const array = [];
      		for (let i=0; i<2; i++){
        		array.push(parseInt(Math.random()*7));
    		}
    		return array;
  	}

	//setting the intro left and right random pics
	const setPics = () => {
		const pics = randomPic();
      		const left = pics[0];
		const right = pics[1];
		const leftUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+str(left)+".jpg";
		const rightUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+str(right)+".jpg";
      		$(leftPic).attr("src", leftUrl);
      		$(rightPic).attr("src", rightUrl); 
	}


  	window.addEventListener('load', setPics);
});
