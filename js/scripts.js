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
  if (this.size === "small") {
    result += 8;
  } else if (this.size === "medium") {
    result += 10;
  } else {
    result += 12;
  }
  return result.toFixed(2);
}

// business logic
let userPizza = new Pizza();

// ui logic
function displayUserPizza(pizzaSize, pizzaToppings) {
  const pizzaDisplayDiv = document.createElement("div");
  const pizzaDisplayPara = document.createElement("p");
  const pizzaDisplayList = document.createElement("ul");
  pizzaDisplayPara.innerText = "You have selected a " + pizzaSize + " pizza with:"
  pizzaToppings.forEach(function(element) {
    const listItem = document.createElement("li");
    listItem.innerText = element;
    pizzaDisplayList.append(listItem);
  });
  pizzaDisplayDiv.append(pizzaDisplayPara);
  pizzaDisplayDiv.append(pizzaDisplayList);
  document.body.append(pizzaDisplayDiv);
}

function getPizzaInfo(e) {
  e.preventDefault();
  const pizzaSize = document.querySelector("input[name='size']:checked").value;
  userPizza.setSize(pizzaSize);
  const selectedToppings = document.querySelectorAll("input[name='topping']:checked");
  selectedToppings.forEach(function(element) {
    userPizza.addTopping(element.value);
  });
  displayUserPizza(userPizza.size, userPizza.toppings);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", getPizzaInfo);
})