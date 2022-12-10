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
		const leftUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[0])+".jpg";
		const rightUrl = "https://raw.githubusercontent.com/marcorampin/haiku/main/images/intro/"+String(pics[1])+".jpg";
		$(introLeft).attr("src", leftUrl);
		$(introRight).attr("src", rightUrl);
	}


	//transparency effect on text of each haiku
	$(function(){
		var $win = $(window),
		w = 0,h = 0,
		alpha = 1,
		getWidth = function() {
			w = $win.width();
			h = $win.height();
		};

		$win.mousemove(function(e) {
			getWidth();
			//alpha = (e.clientX/w * 0.5) + (0.5 - Math.abs((e.clientY/h) - 0.5));
			alpha = ((e.clientX/w)-0.2);

			$('.text').css('background','rgb(0, 0, 0, '+(alpha/3)+')');
			$('.text').css('color','rgb(255, 255, 255, '+alpha+')');
			$('.text').text(((e.clientX/w)-0.2));
		});
	});

	const loadFunctions = () => {
		setPics();
	}

  	window.addEventListener('load', loadFunctions());
});
