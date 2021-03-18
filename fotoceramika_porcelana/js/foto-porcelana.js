
$(document).ready(function(){
    $('.foto-porcelana-slider').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        rows: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            }
          ]
    });
});

$(document).ready(function(){
    $('.foto-porcelana-products-slider').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            }
          ]
    });
});

$(document).ready(function(){
    $('.foto-porcelana-color-image').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            }
          ]
    });
});

$(document).ready(function(){
  $('.foto-porcelana-slider').slick({
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      rows: 2,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          }
        ]
  });
});

$(document).ready(function(){
  $('.foto-porcelana-products-slider').slick({
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          }
        ]
  });
});

$(document).ready(function(){
  $('.foto-porcelana-color-image').slick({
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          }
        ]
  });
});

const hamburger = document.getElementsByClassName('hamburger')[0];
const menu = document.getElementsByClassName('navbar-menu-container')[0];
const productLink = document.getElementsByClassName('navbar-menu-item product')[0];
const navbarTop = document.getElementsByClassName('navbar-top')[0];

const padding = 60;
const transition = 'all 0.5s';

let direction;
let menuOpen = false;
let submenuOpen = false;

hamburger.addEventListener('click', () => {
if(window.innerWidth < 1200) {
    menuOpen = !menuOpen;
    if (menuOpen) {
        navbarTop.classList.add('open');
        hamburger.classList.add('open');
        menu.classList.add('active');
        menu.style.overflowY = 'auto';
    } else {
        navbarTop.classList.remove('open');
        hamburger.classList.remove('open');
        menu.classList.remove('active');
        menu.style.overflowY = 'auto';
        if(submenuOpen) {
            submenuOpen = false;
            productLink.classList.remove('active');
        }
    }
}
})

productLink.addEventListener('click', (event) => {
event.preventDefault();
event.stopImmediatePropagation();
if(window.innerWidth < 1200) {
    submenuOpen = !submenuOpen;
    submenuOpen ? productLink.classList.add('active'): productLink.classList.remove('active');
}
})