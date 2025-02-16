const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);
for (const item of categories.children) {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
}