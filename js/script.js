import refs from './refs.js';

const { icons } = refs;

console.log(icons);

let i = 1;

setInterval(() => {
  i++;
  let icon = document.querySelector('.section-1-icons i.active');
  icon.classList.remove('active');
  if (i > icons.length) {
    icons[0].classList.add('active');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('active');
  }
}, 4000);
