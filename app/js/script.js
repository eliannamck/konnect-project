window.onscroll = function() {makeSticky()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

// makes header to top of page stick when you scroll down
function makeSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// when window is reduced and hamburger button appears,
// this allows a drop-down menu to appear of the nav bar links
function makeResponsive() {
  var headerVar = document.getElementById("myHeader");
  if (headerVar.className === "header") {
    headerVar.className += " responsive";
  } else {
    headerVar.className = "header";
  }
}