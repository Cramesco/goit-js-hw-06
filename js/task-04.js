let valorContador = 0; 
const valueSpan = document.getElementById('value');
 valueSpan.textContent = valorContador;

 const incrementButton = document.querySelector('[data-action="increment"]');
 const decrementButton = document.querySelector('[data-action="decrement"]');

 incrementButton.addEventListener('click', incremento);
 decrementButton.addEventListener('click', decremento);

 function incremento() {
    valorContador += 1;
    valueSpan.textContent = valorContador;
 }

 function decremento() {
    valorContador -= 1;
    valueSpan.textContent = valorContador;
 }