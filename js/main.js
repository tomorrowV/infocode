let bg = document.getElementById("diagram");
document.getElementById("hov").addEventListener("mouseover", function () {
  bg.style.visibility = "visible";
  bg.style.opacity = "1";
  bg.style.transition = "all .25s ease";
  this.addEventListener("mouseout", function () {
    bg.style.visibility = "hidden";
    bg.style.opacity = "0";
  });
});


$('.slider').on(`init reInit`, function(event, slick) {
  $('.counter').text(1 + ' / ' + slick.slideCount);
})
$('.slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
  $('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
})
$('.slider').slick({
  slidesToShow: 5,
  dots: false,
  responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-2').slick({
  mobileFirst: true,
  responsive: [     
     {
        breakpoint: 425,
        settings: "unslick",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    
  ]
});

$('.question-slider').slick({
  mobileFirst: true,
  responsive: [     
     {
        breakpoint: 425,
        settings: "unslick",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    
  ]
});

function myFunction(x) {
  x.classList.toggle("change");
}