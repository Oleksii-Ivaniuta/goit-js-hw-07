const categories = document.querySelector("#categories");
categories.classList.add("task1-categories");
console.log(`Number of categories: ${categories.children.length}`);
for (const item of categories.children) {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
    item.classList.add("task1-item");
    item.children[0].classList.add("task1-header");
    item.children[1].classList.add("task1-cat-list");
    for (const catItem of item.children[1].children) {
        catItem.classList.add("task1-cat-item");
    };
};

const head = document.querySelector("head");
const monseratFontLinks = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>;`

head.insertAdjacentHTML("beforeEnd", monseratFontLinks);

