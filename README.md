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