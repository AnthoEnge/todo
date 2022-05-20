const buttonTodo = document.querySelector('.button');
const buttonCreateTodo = document.querySelector('.buttonText');
const buttonText = document.getElementById("text");
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
let completedItem = [];
let numberCompletedItem = 0
let active = [];
function CreateTodo() {
    buttonValidate.addEventListener('click', () => {
        let textAdd = buttonText.value;
            if (textAdd === '' | textAdd === ' ') {
                alert('Please enter a new todo');
            } else {
                todoRepetory.style.display = 'block';
                // create a new div
                const item = document.createElement('div');
                item.classList.add('item');
                let textTodo = document.createElement('p');
                textTodo.innerHTML = textAdd;
                const circle = document.createElement('input');
                circle.classList.add('circle');
                // Remove Item
                const removeItem = document.createElement('button');
                removeItem.classList.add('removeClick');
                removeItem.addEventListener('click', () => {
                    active.splice(active.indexOf(textAdd), 1);
                    completedItem.push(item); // ADD TO COMPLETED
                    item.style.backgroundColor = '#3d2db4';
                    item.removeChild(removeItem);
                    item.remove();
                    numberItem--;
                    numberCompletedItem++;
                    itemLeft.innerHTML = numberItem;
                });
                // Add Item in DOM
                item.appendChild(circle);
                item.appendChild(textTodo);
                item.appendChild(removeItem);

                active.push(item); // add item to active array
                for ( activ of active) {
                    todoRepetory.appendChild(activ);
                }

                numberItem++;
                // Count Item Left
                const itemLeft = document.getElementById('itemLeft');
                itemLeft.innerHTML = numberItem;
            }
    });

    const completedButton = document.querySelector('#completed');
    completedButton.addEventListener('click', () => {
        for ( complete of completedItem) {
            todoRepetory.appendChild(complete);
        }
        for ( activ of active) {
            activ.remove();
            // todoRepetory.removeChild(activ);
        } 
        itemLeft.innerHTML = numberCompletedItem;
    });

    const buttonActive = document.querySelector("#active");
    buttonActive.addEventListener('click', () => {
        for ( activ of active) {
            todoRepetory.appendChild(activ);
        }
        for ( complete of completedItem) {
            // todoRepetory.removeChild(complete);
            complete.remove();
        }
        itemLeft.innerHTML = numberItem;
    });

    const buttonAll = document.querySelector("#all");
    buttonAll.addEventListener('click', () => {
        for ( activ of active) {
            todoRepetory.appendChild(activ);
        }
        for ( complete of completedItem) {
            todoRepetory.appendChild(complete);
        }
        itemLeft.innerHTML = numberItem + numberCompletedItem;
    });

    const removeCompleted = document.querySelector("#removeAll");
    removeCompleted.addEventListener('click', () => {
        for ( complete of completedItem) {
            complete.remove(complete);
        }

        completedItem = [];
        numberCompletedItem = 0;
    });

}CreateTodo();

