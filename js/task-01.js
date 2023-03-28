const categoriesLi = document.querySelector('#categories');
const totalCategories = categoriesLi.children;

console.log(`number of categories:  ${totalCategories.length}`);
for (const category of totalCategories){
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements ${category.lastElementChild.children.length}`);
}