
function sanpham () {
    document.getElementById("sanpham").style.display = 'block';
    document.getElementById("standard").style.display = 'none';
    document.getElementById("enterprise").style.display = 'none';
    document.getElementById("vedichvu").style.display = 'none';
    document.getElementById("modal_menu").style.display = 'none';
};

function standard () {
  document.getElementById("standard").style.display = 'block';
  document.getElementById("sanpham").style.display = 'none';
  document.getElementById("enterprise").style.display = 'none';
  document.getElementById("vedichvu").style.display = 'none';
  document.getElementById("modal_menu").style.display = 'none';
};

function enterprise () {
  document.getElementById("enterprise").style.display = 'block';
  document.getElementById("sanpham").style.display = 'none';
  document.getElementById("standard").style.display = 'none';
  document.getElementById("vedichvu").style.display = 'none';
  document.getElementById("modal_menu").style.display = 'none';
};

function vedichvu () {
  document.getElementById("vedichvu").style.display = 'block';
  document.getElementById("sanpham").style.display = 'none';
  document.getElementById("enterprise").style.display = 'none';
  document.getElementById("standard").style.display = 'none';
  document.getElementById("modal_menu").style.display = 'none';
};