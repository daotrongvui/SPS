
function mySlide1 () {
    document.getElementById("mySlide1").style.display = 'block';
    document.getElementById("mySlide2").style.display = 'none';
    document.getElementById("mySlide3").style.display = 'none';

    document.getElementById("active1").style.display = 'block';
    document.getElementById("active2").style.display = 'none';
    document.getElementById("active3").style.display = 'none';

    // document.getElementById("option-standard").style.backgroundColor = '#E4E5E6';
    document.getElementById("option-enterprise").style.backgroundColor = '#ffffff';
    document.getElementById("option-dichvu").style.backgroundColor = '#ffffff';
};

function mySlide2 () {
  document.getElementById("mySlide2").style.display = 'block';
  document.getElementById("mySlide1").style.display = 'none';
  document.getElementById("mySlide3").style.display = 'none';

  document.getElementById("active2").style.display = 'block';
  document.getElementById("active1").style.display = 'none';
  document.getElementById("active3").style.display = 'none';

  // document.getElementById("option-enterprise").style.backgroundColor = '#E4E5E6';
  document.getElementById("option-standard").style.backgroundColor = '#ffffff';
    document.getElementById("option-dichvu").style.backgroundColor = '#ffffff';
};

function mySlide3 () {
  document.getElementById("mySlide3").style.display = 'block';
  document.getElementById("mySlide1").style.display = 'none';
  document.getElementById("mySlide2").style.display = 'none';
  
  document.getElementById("active3").style.display = 'block';
  document.getElementById("active1").style.display = 'none';
  document.getElementById("active2").style.display = 'none';

  // document.getElementById("option-dichvu").style.backgroundColor = '#E4E5E6';
  document.getElementById("option-standard").style.backgroundColor = '#ffffff';
    document.getElementById("option-enterprise").style.backgroundColor = '#ffffff';
};


function menuShow() {
  document.getElementById("modal_menu").style.display = 'block';
  document.getElementById("main_header").style.position = 'absolute';
}

function menuHide() {
  document.getElementById("modal_menu").style.display = 'none';
  document.getElementById("main_header").style.position = 'fixed';
}

function showSupSanPham() {
  var x = document.getElementById("header-sub-option-bottom");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



function hideModal() {
  menuHide();
}