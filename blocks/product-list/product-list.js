export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((col, j) => {
      col.classList.add(`product-list-row-${j + 1}`);
      [...col.children].forEach((item, k) => {
        item.classList.add(`product-list-item-${k + 1}`);
      });
    });
  });
}
