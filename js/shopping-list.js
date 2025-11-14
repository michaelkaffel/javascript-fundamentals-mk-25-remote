console.log('test');
let i = 0;

const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    getItem();
});

const shoppingList = document.querySelector('#shoppingList');
const shopListArray = [];







function getItem() {

    const itemField = document.querySelector('#item');
    if (itemField.value.length > 0) {
        shopListArray.push(itemField.value);
        shopListArray.sort();

        resetList();
        buildList();



        itemField.value = "";
    }

}

function buildList() {
    for (let item of shopListArray) {
        const liElement = document.createElement('li');

        liElement.dataset.item = item;
        liElement.innerHTML = item;
        liElement.classList.add('shopping-list-item');

        const interfaceDiv = document.createElement('div');


        const check = document.createElement('input');
        check.type = "checkbox";

        interfaceDiv.appendChild(check);

        const close = document.createElement('i');
        close.classList.add('fa-solid', 'fa-x', "ms-3");
        close.classList.add('close');
        close.addEventListener('click', removeItem);

        interfaceDiv.appendChild(close);

        liElement.appendChild(interfaceDiv);
        shoppingList.appendChild(liElement);

    }
}

function resetList() {
    // if (shopListArray.length === 0) {
    //     return false
    // } else {
        while (shoppingList.firstChild) {
            shoppingList.removeChild(shoppingList.firstChild)
        }
    }
// }

function removeItem(event) {
    const li = event.currentTarget.closest('li');
    const item = li.dataset.item;
    console.log(item);

    shopListArray.splice(shopListArray.indexOf(item), 1);
    resetList();
    buildList();

}

