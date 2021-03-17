$(document).ready(function(){
    $('.foto-krysztal-slider').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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
  $('.foto-krysztal-scroll').slick({
      speed: 300,
      slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
      responsive: [
          {
            breakpoint: 992,      
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