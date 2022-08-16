window.onscroll = function(){
  stickyElement()
};

var navBar = $('navbar');

var stick = navBar.offsetTop;
function stickyElement(){
  if(window.pageYOffset >= stick){
    navBar.classList.add("stick");
  }
  else{
    navBar.classList.remove("stick");
  }
}