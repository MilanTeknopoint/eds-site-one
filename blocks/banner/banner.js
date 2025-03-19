import Swiper from './swiper.js';

export default function decorate(block) {
  // block.paerentElement.classList.add('swiper');
  block.parentElement.classList.add('swiper');
  block.classList.add('swiper-wrapper');

  [...block.children].forEach((row) => {
    row.classList.add('swiper-slide');
    row.children[0].classList.add('banner-carasol-image');
    row.children[1].classList.add('banner-carasol-text');
  });
  Swiper(block.parentElement, {});
}
