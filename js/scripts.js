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

function updatePizzaInfo(inputPizza, pizzaSize, pizzaToppings) {
  inputPizza.toppings = [];
  inputPizza.setSize(pizzaSize);
  pizzaToppings.forEach(function(element) {
  inputPizza.addTopping(element.value);
  });
}

// ui logic
function displayUserPizza(pizzaSize, pizzaToppings) {
  const pizzaDisplayDiv = document.createElement("div");
  const pizzaDisplayPara = document.createElement("p");
  const pizzaDisplayList = document.createElement("ul");
  const pizzaPricePara = document.createElement("p");
  pizzaDisplayPara.innerText = "You have selected a " + pizzaSize + " pizza with:";
  pizzaToppings.forEach(function(element) {
    const listItem = document.createElement("li");
    listItem.innerText = element;
    pizzaDisplayList.append(listItem);
  });
  pizzaPricePara.innerText = "Your price is $" + userPizza.calculatePrice();
  pizzaDisplayDiv.append(pizzaDisplayPara);
  pizzaDisplayDiv.append(pizzaDisplayList);
  pizzaDisplayDiv.append(pizzaPricePara);
  document.body.append(pizzaDisplayDiv);
  document.querySelector("form").addEventListener("submit", function() {
    pizzaDisplayDiv.remove();
  });
}

function getPizzaInfo(e) {
  e.preventDefault();
  const pizzaSize = document.querySelector("input[name='size']:checked").value;
  const selectedToppings = document.querySelectorAll("input[name='topping']:checked");
  updatePizzaInfo(userPizza, pizzaSize, selectedToppings);
  displayUserPizza(userPizza.size, userPizza.toppings);
  resetInputs();
}

function resetInputs() {
  document.querySelectorAll("[name='topping']").forEach(function(element) {
    element.checked = false;
  });
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", getPizzaInfo);
});