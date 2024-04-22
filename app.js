'use strict';
// mobile menu :
const btnMobilEl = document.querySelector('.mobile');
const labelMObilEl = document.querySelector('.label-menu-mobile');
const weAreEl = document.querySelector('.titel-head');
const imagEl = document.querySelector('.bg-image-head');
const ege2El = document.querySelector('.ege2');
const ege1El = document.querySelector('.ege');
const pragraph2El = document.querySelector('.pragraph-2');
const pragraph1El = document.querySelector('.pragraph-1');
let check = 0;
let color = 0;
let chcolor = 0;

const removeMobileMenu = function () {
  labelMObilEl.classList.add('display-respo');
  btnMobilEl.classList.remove('bg');
  weAreEl.classList.remove('margin--');
  check = 0;
};
const addMobileMenu = function () {
  labelMObilEl.classList.remove('display-respo');
  btnMobilEl.classList.add('bg');
  weAreEl.classList.add('margin--');
  check = 1;
};

btnMobilEl.addEventListener('click', () => {
  if (check === 0) {
    addMobileMenu();
  } else {
    removeMobileMenu();
  }
});

imagEl.addEventListener('click', () => {
  if (check === 1) {
    removeMobileMenu();
  }
});

ege2El.addEventListener('click', () => {
  if (color === 0) {
    pragraph2El.classList.add('text-bg');
    color = 1;
  } else {
    pragraph2El.classList.remove('text-bg');
    color = 0;
  }
});

ege1El.addEventListener('click', () => {
  if (chcolor === 0) {
    pragraph1El.classList.add('text-bg2');
    chcolor = 1;
  } else {
    pragraph1El.classList.remove('text-bg2');
    chcolor = 0;
  }
});
