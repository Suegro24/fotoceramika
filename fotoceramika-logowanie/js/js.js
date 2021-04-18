$.fn.komunikat = function (rodzaj, tresc) {
    var opcje = {
        'closeButton': true,
        'progressBar': true,
        'positionClass': 'toast-top-center'
    };
    if (rodzaj == 'success') {
        toastr.success(tresc, 'Informacja', opcje);
    } else {
        toastr.error(tresc, 'Wystąpił błąd', opcje);
    }
}

$(function () {
    $("[data-toggle='tooltip']").tooltip();
});
$(function () {
    $("[data-toggle='popover']").popover();
});

if (location.hash) {
    $('a[href=\'' + location.hash + '\']').tab('show');
}
var activeTab = localStorage.getItem('activeTab');
if (activeTab) {
    if (typeof tab !== 'undefined') {
        $('a[href="' + activeTab + '"]').tab('show');
    }
}

$('body').on('click', 'a[data-toggle=\'tab\']', function (e) {
    e.preventDefault()
    var tab_name = this.getAttribute('href')
    if (history.pushState) {
        history.pushState(null, null, tab_name)
    }
    else {
        location.hash = tab_name
    }
    localStorage.setItem('activeTab', tab_name)

    $(this).tab('show');
    return false;
});

$(window).on('popstate', function () {
    var anchor = location.hash ||
        $('a[data-toggle=\'tab\']').first().attr('href');
    $('a[href=\'' + anchor + '\']').tab('show');
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