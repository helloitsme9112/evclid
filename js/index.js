// burger
let burger = document.querySelector('.header__hamburger-btn');
let opacity = document.querySelector('.header__hamburger-line:nth-child(2)');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__anchor');

burger.addEventListener('click',

function() {
// принудительно закрываем search

  searchBlock.classList.remove('header__search-block--active');

  search.classList.remove('header__search-btn--active');

  searchBlock.classList.add('header__search-block--closed');

// открываем nav

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  opacity.classList.toggle('backward');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// search
let search = document.querySelector('.header__search-btn');
let searchBlock = document.querySelector('.header__search-block');
let searchClose = document.querySelector('.header__search-close');
let header = document.querySelector('.header');


search.addEventListener('click',

function() {
// принудительно закрываем nav

  burger.classList.remove('burger--active');

  menu.classList.remove('header__nav--active');

  document.body.classList.remove('stop-scroll');

// открытие search
  search.classList.toggle('header__search-btn--active');

  searchBlock.classList.toggle('header__search-block--closed');

  searchBlock.classList.toggle('header__search-block--active');
});

searchClose.addEventListener('click',

function(){
  search.classList.toggle('header__search-btn--active');

  searchBlock.classList.remove('header__search-block--active');

  searchBlock.classList.add('header__search-block--closed');
});
