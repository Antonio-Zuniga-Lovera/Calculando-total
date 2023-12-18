function formatearNumeroConPuntos(number) {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return parts.join('.');
};

const amount = document.querySelector('#Amount');
const buttonAdd = document.querySelector('#Button-add');
const buttonEliminate = document.querySelector('#Button-eliminate');
let totalQuantity = document.querySelector('#Total-quantity');

let counter = 0;
const price = 719990;
let totalPrice;


buttonAdd.addEventListener('click', () => {
    if(counter >= 0) {
        counter++;
        totalPrice = price * counter;
        amount.innerHTML = `Cantidad: ${counter}`;
        totalQuantity.innerHTML = `Total a pagar: $${(formatearNumeroConPuntos(totalPrice))}`;
    }
    console.log(counter);
    console.log(totalPrice);
});

buttonEliminate.addEventListener('click', () => {
    if(counter > 0) {
        counter--;
        totalPrice = price * counter;
        amount.innerHTML = `Cantidad: ${counter}`;
        totalQuantity.innerHTML = `Total a pagar: $${formatearNumeroConPuntos(totalPrice)}`;
    } else {
        alert('Debes agregar al menos 1 producto');
    }
    /* Imprimo en la consola la variable contador para ver si obtiene valores negativos*/
    console.log(counter);
    console.log(totalPrice);
});