const shoppingListData = []
const shoppingList = document.getElementById('shoppingList')

function getItem() {
    event.preventDefault();
    const item = document.getElementById('item').value.trim().toLowerCase();
    testInput(item);
    for (let datam of shoppingListData) {
        let duplicate = false;
        if (item === datam) {
            duplicate = true;
            console.log('duplicate detected');
            return;
        }
    }
    shoppingListData.push(item);
    shoppingListData.sort();
    console.log(shoppingListData);
    removeList();
    makeList();
    document.getElementById("myForm").reset();

}

function makeList() {
    for (let datam of shoppingListData) {
        const listItem = document.createElement('li');
        listItem.addEventListener('click', removeItem);
        listItem.textContent = datam;
        shoppingList.appendChild(listItem);

    }
}

function removeList() {
    while (shoppingList.firstChild) {
        shoppingList.removeChild(shoppingList.firstChild)
    }
}

function removeItem() {
    const item = event.currentTarget.textContent;
    const itemIndex = shoppingListData.indexOf(item);
    shoppingListData.splice(itemIndex, 1);
    removeList();
    makeList();

}

function testInput(item) {
    try {
        if (item.length === 0 || item === undefined) {
            throw new Error('No entry detected')
        }
    } catch(e) {
        console.log(e.name);
        console.log(e.message);
    }
}


