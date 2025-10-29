const shoppingListDb = [];

const shoppingList = document.getElementById('shoppingList');

function getItem() {
    event.preventDefault();
    const item = document.getElementById('item').value;
    for (let arrayItem of shoppingListDb) {
        if (item === arrayItem) {
            console.log('Duplicate')
            return;
        }

    }
    shoppingListDb.push(item);
    shoppingListDb.sort();
    console.log('Items in list:')
    for (let arrayItem of shoppingListDb) {
        console.log(arrayItem);
    }

    
    document.getElementById("myForm").reset();
    removeList();
    makeList();

};

function makeList () {
    for (let arrayItem of shoppingListDb) {
        const listItem = document.createElement('li');
        listItem.addEventListener("click", removeItem)
        listItem.textContent = arrayItem;
        shoppingList.appendChild(listItem);
    }
};

function removeList() {
    while (shoppingList.firstChild) {
       shoppingList.removeChild(shoppingList.firstChild); 
    }
}

function removeItem(event) {
    const item = event.currentTarget.textContent;
    const indexToRemove = shoppingListDb.indexOf(item);
    shoppingListDb.splice(indexToRemove, 1);
    removeList();
    makeList();
}