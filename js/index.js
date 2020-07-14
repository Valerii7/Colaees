var headerLink = document.getElementsByClassName("header__menu-link");
for(var i=0; i<headerLink.length;i++)
{
  headerLink[i].onclick=function()
  {
   for(var i=0; i<headerLink.length;i++)
   {
    if(headerLink[i].classList.contains("active"))
    {
      headerLink[i].classList.remove("active");
    }
   }
   this.classList.toggle("active");
  }
  }
// 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("slider__dot-item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
$(function(){

  $("#nav-toggle").on("click",function(event)
  {
      event.preventDefault();
      $(this).toggleClass("active");
      $("#menu").toggleClass("active");
  })
});