Describe: Pizza

Test: It should create a new object with a size value and an array for toppings.
Code: let userPizza = new Pizza();
Expect: userPizza = { size: "medium", toppings: [] }

Describe: Pizza.prototype.addTopping

Test: It should add a new string to the Pizza's toppings array.
Code: 
let userPizza = new Pizza();
userPizza.addTopping("cheese");
Expect: userPizza = { size: "medium", toppings: ["cheese"] }

Describe: Pizza.prototype.setSize

Test: It should set the value of the Pizza's size string.
Code:
let userPizza = new Pizza();
userPizza.setSize("small");
Expect: userPizza = { size: "small", toppings: [] }

Describe: Pizza.prototype.calculatePrice

Test: It should return a number based on the pizza's toppings.
Code: 
let userPizza = new Pizza();
userPizza.addTopping("cheese");
userPizza.calculatePrice();
Expect: 0.50

Test: It should return a number based on the pizza's size and toppings.
Code: 
let userPizza = new Pizza();
userPizza.setSize("small");
userPizza.addTopping("cheese");
userPizza.calculatePrice();
Expect: 8.50