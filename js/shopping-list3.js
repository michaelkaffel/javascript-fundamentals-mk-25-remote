const button = document.querySelector('button');
button.addEventListener('click', getItem);

const unorderedList = document.querySelector('#shoppingList');
const shopListArray = [];







function getItem() {
    event.preventDefault();
    const itemField = document.querySelector('#item');
    if (itemField.value.length > 0) {
        shopListArray.push(itemField.value);
        shopListArray.sort();

        resetList();
        buildList();



        document.querySelector('#myForm').reset();
    }

}

function buildList() {
    for (let item of shopListArray) {
        const liElement = document.createElement('li');

        liElement.innerHTML = item;
        liElement.classList.add('laser-border')
        liElement.addEventListener('click', removeItem)
        unorderedList.appendChild(liElement);

    }
}

function resetList() {
    // if (shopListArray.length === 0) {
    //     return false
    // } else {
        while (unorderedList.firstChild) {
            unorderedList.removeChild(unorderedList.firstChild)
        }
    


}

function removeItem() {
    const item = event.currentTarget.textContent;

    shopListArray.splice(shopListArray.indexOf(item), 1);
    resetList();
    buildList();

}

