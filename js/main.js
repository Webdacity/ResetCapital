// Page Loader

setTimeout (function() {
  $(".loader").fadeOut("3000");
  $("body").css("overflow","unset");
}, 5000);


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



// Home Page Owl Carousel
var owl = $('.owl-carousel');
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 1,
  items: 1,
  autoplay: true,
  slideTransition: "ease",
  smartSpeed: 1500
});

setTimeout(()=> {
  setInterval(() => {
    owl.trigger('next.owl.carousel');
  }, 6000);
}, 6000);



// Parallax Smooth Scroll Link
document.querySelector('.parallax-section').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
  });
});



// ScrollReveal Animations 

window.sr = ScrollReveal({
  reset: false,
  mobile: true
});

ScrollReveal().reveal('.about-section .black-line:nth-child(2)', {
  duration: 1500,
  distance: "1000px",
  origin: "right"
});

ScrollReveal().reveal('.about-section .black-line:nth-child(3)', {
  duration: 2000,
  distance: "1000px",
  origin: "left"
});

ScrollReveal().reveal('.contact-section .black-line:nth-child(3)', {
  duration: 1500,
  distance: "1000px",
  origin: "right"
});

ScrollReveal().reveal('.contact-section .black-line:nth-child(2)', {
  duration: 2000,
  distance: "1000px",
  origin: "left"
});

ScrollReveal().reveal('.navbar', {
  duration: 2500,
  distance: "400px",
  origin: "top",
  delay: 4000
});

ScrollReveal().reveal('.about-section-heading, .funders-section-heading, .investments-text', {
  duration: 2000,
  distance: "400px",
  origin: "left",
});

ScrollReveal().reveal('.investments-section-heading, .contact-section-heading', {
  duration: 2000,
  distance: "400px",
  origin: "right",
});

ScrollReveal().reveal('.about-text p:nth-child(1), .funders-text p:nth-child(1)', {
  duration: 2000,
  distance: "1000px",
  origin: "right",
});

ScrollReveal().reveal('.about-text div, .funders-text div', {
  duration: 2000,
  distance: "1000px",
  origin: "right",
  delay: 300
});

ScrollReveal().reveal('.about-text p:nth-child(4), .funders-text p:nth-child(5)', {
  duration: 2000,
  distance: "1000px",
  origin: "right",
  delay: 600
});

ScrollReveal().reveal('.black-divider-line, .orange-running-line, .about-section .orange-running-line+h1, .investments-section>h1', {
  duration: 2000,
  distance: "200px",
  origin: "bottom",
});

ScrollReveal().reveal('.team-grid .team-member:nth-child(1), .investment-focus>div:nth-child(1)', {
  duration: 2000,
  distance: "1000px",
  origin: "left",
});

ScrollReveal().reveal('.team-grid .team-member:nth-child(2), .investment-focus>div:nth-child(2)', {
  duration: 2000,
  distance: "1000px",
  origin: "right",
});

ScrollReveal().reveal('.contact-details', {
  duration: 2000,
  distance: "1000px",
  origin: "left",
});

ScrollReveal().reveal('.contact-section .orange-line', {
  duration: 2000,
  distance: "1000px",
  origin: "left",
  delay: 300
});

ScrollReveal().reveal('.contact-form', {
  duration: 2000,
  distance: "1000px",
  origin: "left",
  delay: 600
});

ScrollReveal().reveal('.parallax-section', {
  duration: 2000,
  distance: "500px",
});





