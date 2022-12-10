$(document).ready(function() {
  	const introLeft = document.querySelector('#intro-left');
  	const introRight = document.querySelector('#intro-right');

	const numberPics = 8;

  	//creating an array with two random values (between 0 and 8)
  	const randomPic = () => {
      		const array = [];
      		for (let i=0; i<2; i++){
        		array.push(parseInt(Math.random()*numberPics));
    		}
		while (array[0] == array[1]){
			array[1] = parseInt(Math.random()*numberPics);
		}
    		return array;
  	}

	//setting the intro left and right random pics
	const setPics = () => {
		const pics = randomPic();
		const leftUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[0])+".webp";
		const rightUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[1])+".webp";
		$(introLeft).attr("src", leftUrl);
		$(introRight).attr("src", rightUrl);
	}

	//transparency effect on text of each haiku
	const transparencyText = () => {
		if(window.matchMedia("(pointer: fine)").matches) {	//it checks if the device has a mouse (not a smarphone), if so it changes continuosly the transparency of the text based on mouse position;
			$(function(){
				let $win = $(window),
				w = 0,h = 0,
				alpha = 1,
				getWidth = function() {
					w = $win.width();
					h = $win.height();
				};

				$win.mousemove(function(e) {
					getWidth();
					alpha = ((1 - Math.abs((e.clientX * 2 / w) - 1)) * (1 - Math.abs((e.clientY * 2 / h) - 1))) - 0.1;

					$('.text').css('background','rgb(0, 0, 0, '+(alpha / 2.5)+')');
					$('.text').css('color','rgb(255, 255, 255, '+(alpha * 3)+')');
				});
			});
		}
		else {	//if not it keeps the text always visible
			$('#introduction').css('height', window.innerHeight+'px');
			$('.haiku').css('height', window.innerHeight+'px');
			$('.text').css('background','rgb(0, 0, 0, 0.3)');
			$('.text').css('color','rgb(255, 255, 255, 1)');
		}
	}


	const loadFunctions = () => {
		setPics();
		transparencyText();
	}

  	window.addEventListener('load', loadFunctions());
});
