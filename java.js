let a = document.getElementById("main4");
// let d = document.getElementById('link')

link.addEventListener("click", function () {
  return a.classList.toggle("link_2");
});

let b = document.getElementById("main3");

anker.addEventListener("click", function () {
  return b.classList.toggle("ink_3");
});

let c = document.getElementById("anker");

c.addEventListener("click", function () {
  return c.classList.toggle("anker_two");
});


$(document).ready(function(){
  $("#myCarousel").owlCarousel({
    items: 3, // Number of cards shown in each slide
    loop: true, // Continuously loop the carousel
    margin: 20, // Space between cards
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    center:true,
    responsive: {
      0: {
        items: 1 // Number of cards shown in the carousel for smaller screens
      },
      550: {
        items: 2 // Number of cards shown in the carousel for medium screens
      },
      992: {
        items: 3 // Number of cards shown in the carousel for large screens
      }
    }
  });
});



