export default function decorate(block) {
    console.log(block.children);
    [...block.children].forEach((row,i) => {
        [...row.children].forEach((col,j) => {
            col.classList.add(`product-list-row-${j+1}`);  
            [...col.children].forEach((item,k) => {
                item.classList.add(`product-list-item-${k+1}`);
            })
        })
    }
)}