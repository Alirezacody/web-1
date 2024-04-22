'use strict';
const btnMobilEl = document.querySelector('.mobile');
const labelMObilEl = document.querySelector('.label-menu-mobile');
const bodyEl = document.querySelector('body');
const progresEl = document.querySelector('.progres');
let state = 0;

const addMobileMenu = function () {
  labelMObilEl.classList.remove('display-respo');
  btnMobilEl.classList.add('news-menu');
  progresEl.classList.remove('display-respo');
  state = 1;
};

const removeMobileMenu = function () {
  labelMObilEl.classList.add('display-respo');
  btnMobilEl.classList.remove('news-menu');
  progresEl.classList.add('display-respo');
  state = 0;
};

//add & remove mobile menu :
btnMobilEl.addEventListener('click', () => {
  if (state === 0) {
    addMobileMenu();
  } else {
    removeMobileMenu();
  }
});

progresEl.addEventListener('click', () => {
  if ((state = 1)) {
    removeMobileMenu();
  }
});
