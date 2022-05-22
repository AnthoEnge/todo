

const buttonTodo = document.querySelector('.button');
const buttonCreateTodo = document.querySelector('.buttonText');
const buttonText = document.getElementById("text");
const buttonValidate = document.querySelector('#valide');
const todoRepetory = document.querySelector('.todo');
const buttonComplete = document.querySelector('#completed');
const buttonActive = document.querySelector("#active");
const buttonAll = document.querySelector("#all");


function CreateMenu() {
    buttonTodo.addEventListener('click', () => {
        buttonCreateTodo.classList.toggle('block');
        buttonCreateTodo.classList.add('animation-target');
    });
}CreateMenu();

function RemoveMenu() {
    const remove = document.querySelector('#remove');
    remove.addEventListener('click', () => {
        buttonCreateTodo.classList.toggle('block');
    });
} RemoveMenu();


let numberItem = 0;
let completedItem = [];
let numberCompletedItem = 0
let active = [];
function CreateTodo() {
    buttonValidate.addEventListener('click', () => {
        let textAdd = buttonText.value;
            if (textAdd === '' | textAdd === ' ' | textAdd.length > 30) {
                alert('Please enter a new todo and don\'t exceed 30 characters');
            } else {
                todoRepetory.style.display = 'block';
                // create a new div
                const item = document.createElement('div');
                item.classList.add('item');
                let textTodo = document.createElement('p');
                textTodo.innerHTML = textAdd;
                const circle = document.createElement('input');
                circle.classList.add('circle');

                
                    const divHours = document.createElement('div');
                    divHours.classList.add('divHours');
                    const hours = document.createElement('p');
                    hours.classList.add('hours');
                    var currentTime = new Date();
                    hours.innerHTML = currentTime.getHours() + " h " + currentTime.getMinutes() + " m ";
                    item.appendChild(divHours);
                    divHours.appendChild(hours);
                

                item.appendChild(textTodo);
                // Remove Item
                const removeItem = document.createElement('button');
                removeItem.classList.add('removeClick');
                removeItem.addEventListener('click', () => {
                    item.classList.add("bgRemoved");
                    divHours.innerHTML = "removed";
                    divHours.style.padding = "5px";
                    divHours.style.fontSize = "10px";
                    item.removeChild(removeItem);
                    item.remove();
                    numberItem--;
                    numberCompletedItem++;
                    itemLeft.innerHTML = numberItem;
                    completedItem.push(item); // ADD TO COMPLETED
                    active.splice(active.indexOf(item), 1);
                });
                item.appendChild(removeItem);
                    
                active.push(item); // add item to active array
                for ( items of active) {
                    todoRepetory.appendChild(items);
                }

                numberItem++;
                // Count Item Left
                const itemLeft = document.getElementById('itemLeft');
                itemLeft.innerHTML = numberItem;
            }
    });
} CreateTodo();



function FilterMenu() {
    
    buttonComplete.addEventListener('click', () => {
        buttonComplete.classList.add('menuActive');
        buttonAll.classList.remove('menuActive');
        buttonActive.classList.remove('menuActive');
        for ( complete of completedItem) {
            todoRepetory.appendChild(complete);
        }
        for ( activ of active) {
            activ.remove();
        }
        // active = [];
        itemLeft.innerHTML = numberCompletedItem;
        removeCompleted.style.opacity = "1";
    });


    
    buttonActive.addEventListener('click', () => {
        removeCompleted.style.opacity = "0";
        buttonActive.classList.add('menuActive');
        buttonAll.classList.remove('menuActive');
        buttonComplete.classList.remove('menuActive');
        for ( activ of active) {
            todoRepetory.appendChild(activ);
        }
        for ( complete of completedItem) {
            // todoRepetory.removeChild(complete);
            complete.remove();
        }
        itemLeft.innerHTML = numberItem;
    });

    
    buttonAll.addEventListener('click', () => {
        removeCompleted.style.opacity = "0";
        buttonAll.classList.add('menuActive');
        buttonActive.classList.remove('menuActive');
        buttonComplete.classList.remove('menuActive');
        for ( activ of active) {
            todoRepetory.appendChild(activ);
        }
        for ( complete of completedItem) {
            todoRepetory.appendChild(complete);
        }
        itemLeft.innerHTML = numberItem + numberCompletedItem;
    });
    const removeCompleted = document.querySelector("#removeAll");
    removeCompleted.style.opacity = "0";
    removeCompleted.addEventListener('click', () => {
        removeCompleted.classList.add('menuActive');
        setTimeout(delay, 100)
        for ( complete of completedItem) {
            complete.remove();
            numberCompletedItem--;
        }
        completedItem = [];
        itemLeft.innerHTML = numberCompletedItem;

        function delay() {
            removeCompleted.classList.remove('menuActive');
        }
    });


}FilterMenu();



    