// Pizza object logic
function Pizza() {
  this.size = "medium";
  this.toppings = [];
}

Pizza.prototype.addTopping = function(inputTopping) {
  this.toppings.push(inputTopping);
}

Pizza.prototype.setSize = function(inputSize) {
  this.size = inputSize;
}

Pizza.prototype.calculatePrice = function() {
  let result = 0;
  for (let i = 0; i < this.toppings.length; i+=1) {
    result += 0.5;
  }
  return result;
}

// business logic
let userPizza = new Pizza();