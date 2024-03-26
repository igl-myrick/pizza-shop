// Pizza object logic
function Pizza() {
  this.size = "medium";
  this.toppings = [];
}

Pizza.prototype.addTopping = function(inputTopping) {
  this.toppings.push(inputTopping);
}