const buttonTodo = document.querySelector('.button');
const buttonCreateTodo = document.querySelector('.buttonText');
var buttonText = document.getElementById("text");
const buttonValidate = document.querySelector('#valide');
const todoRepetory = document.querySelector('.todo');


function CreateMenu() {
    buttonTodo.addEventListener('click', () => {
        buttonCreateTodo.style.display = 'block';
    });
}CreateMenu();

function RemoveMenu() {
    const remove = document.querySelector('#remove');
    remove.addEventListener('click', () => {
        buttonCreateTodo.style.display = 'none';
    });
} RemoveMenu();
let numberItem = 0;
buttonValidate.addEventListener('click', () => {
    let textAdd = buttonText.value;

        if (textAdd === '' | textAdd === ' ') {
            alert('Please enter a new todo');
        } else {
            todoRepetory.style.display = 'block';

            const item = document.createElement('div');
            item.classList.add('item');

            let textTodo = document.createElement('p');
            textTodo.innerHTML = textAdd;

            const circle = document.createElement('input');
            circle.classList.add('circle');

            const removeItem = document.createElement('button');
            removeItem.classList.add('removeClick');
            removeItem.addEventListener('click', () => {
                item.remove();
                numberItem--;
                itemLeft.innerHTML = numberItem;
            });
    
            item.appendChild(circle);
            item.appendChild(textTodo);
            item.appendChild(removeItem);
            todoRepetory.appendChild(item);
        }
        numberItem++;
        const itemLeft = document.getElementById('itemLeft');
        itemLeft.innerHTML = numberItem;
});

let removeItems = document.querySelectorAll('.removeClick');


