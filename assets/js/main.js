// Page Loader

// setTimeout (function() {
//   $(".loader").fadeOut("3000");
//   $("body").css("overflow","unset");
// }, 5000);

window.onload = (event) => {
  $(".loader").fadeOut("3000");


  // Home Page Owl Carousel
  // var owl = $('.owl-carousel');
  // $('.owl-carousel').owlCarousel({
  //   loop: true,
  //   margin: 1,
  //   items: 1,
  //   autoplay: true,
  //   slideTransition: "ease",
  //   smartSpeed: 2000
  // });

  // setTimeout(() => {
  //   setInterval(() => {
  //     owl.trigger('next.owl.carousel');
  //   }, 8000);
  // }, 6000);



};

// Navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

function openNav() {
  $(".navbar-overlay").css("height", "100%");
  setTimeout(function () {
    $(".navbar-overlay-logo").css("opacity", "0.1");
    $(".navbar-overlay-heading").css("opacity", "1");
    $(".navbar-overlay-line").css("height", "25vh");
    $(".navbar-close").css("opacity", "1");
  }, 1000);
  setTimeout(function () {
    $(".navbar-overlay-menu").css("opacity", "1");
    $(".navbar-overlay-menu a").css("left", "0");
  }, 2000);
}

function closeNav() {
  $(".navbar-overlay-logo").css("opacity", "1");
  $(".navbar-overlay-heading").css("opacity", "0");
  $(".navbar-overlay-line").css("height", "0");
  $(".navbar-close").css("opacity", "1");
  $(".navbar-overlay-menu").css("opacity", "0");
  $(".navbar-overlay-menu a").css("left", "-150%");
  setTimeout(function () {
    $(".navbar-overlay").css("height", "0");
    $(".navbar-overlay-logo").css("opacity", "1");
  }, 1500);
}


// Parallax Smooth Scroll Link
document.querySelector('.parallax-section').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
});