import refs from './refs.js';

const { icons, menu } = refs;

menu.addEventListener('click', () => {
  document.querySelectorAll('.target').forEach(item => {
    item.classList.toggle('change');
  });
});

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
