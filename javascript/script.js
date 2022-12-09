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
      const left = "../images/haiku/sky.jpg";
      $(leftPic).css("background-image", "url ("+left+")");
      $(rightPic).css("background", "black");
}


  window.addEventListener('load', setPics);
});
