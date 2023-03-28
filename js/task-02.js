const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = document.getElementById("ingredients");
ingredients.forEach((value) => { 
  const li = document.createElement("li");
  li.classList.add("items");
  li.textContent  = value;
  items.appendChild(li);
});