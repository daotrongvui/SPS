
function mySlide1 () {
    document.getElementById("mySlide1").style.display = 'block';
    document.getElementById("mySlide2").style.display = 'none';
    document.getElementById("mySlide3").style.display = 'none';

    document.getElementById("active1").style.display = 'block';
    document.getElementById("active2").style.display = 'none';
    document.getElementById("active3").style.display = 'none';
};

function mySlide2 () {
  document.getElementById("mySlide2").style.display = 'block';
  document.getElementById("mySlide1").style.display = 'none';
  document.getElementById("mySlide3").style.display = 'none';

  document.getElementById("active2").style.display = 'block';
  document.getElementById("active1").style.display = 'none';
  document.getElementById("active3").style.display = 'none';
};

function mySlide3 () {
  document.getElementById("mySlide3").style.display = 'block';
  document.getElementById("mySlide1").style.display = 'none';
  document.getElementById("mySlide2").style.display = 'none';
  
  document.getElementById("active3").style.display = 'block';
  document.getElementById("active1").style.display = 'none';
  document.getElementById("active2").style.display = 'none';
};