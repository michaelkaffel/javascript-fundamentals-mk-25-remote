const cart = {
  contents: [],
  addItem(item) {
    this.contents.push(item);
  }
};
cart.addItem("laptop");
console.log("The cart contains:", cart.contents);