$(document).ready(function() {
  const leftPic = document.querySelector('#intro-left');
  const rightPic = document.querySelector('#intro-right');

  //creating an array with two random values (between 0 and 6)
  const randomPic = () => {
      const array = [];
      for (let i=0; i<2; i++){
        array.push(parseInt(Math.random()*6));
    }
    return array;
  }

  //setting the intro left and right random pics
  const setPics = () => {
      const pics = randomPic();
      const left = "https://chiswick.blob.core.windows.net/blogs/Chiswick-Auctions-London-Kawase-Hasui-woodblock-print.jpg";
	const right = "sky.jpg";
      $(leftPic).attr("src", left);
      $(rightPic).attr("src",right) 
}


  window.addEventListener('load', setPics);
});
