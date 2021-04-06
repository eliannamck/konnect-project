window.onscroll = function() {makeSticky()};

var headerVar = document.getElementById("myHeader");
var sticky = headerVar.offsetTop;

// makes header to top of page stick when you scroll down
function makeSticky() {
  if (window.pageYOffset > sticky) {
    headerVar.classList.add("sticky");
  } else {
    headerVar.classList.remove("sticky");
  }
}