# _Pizza Shop_

#### By _**India Lyon-Myrick**_

#### _A pizza shop website._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_A website for a pizza shop. Select a size and toppings, then the page will display your pizza and calculate the price._

## Setup/Installation Requirements

* _Clone the repository to a folder of choice on your machine (by either using the "Code" button on the GitHub page, or in a terminal application using `git clone https://github.com/igl-myrick/pizza-shop`)_
* _Using a file explorer or terminal application, open the top level of the folder_
* _Open index.html_

## Known Bugs

* _None_

## License

MIT:

Copyright (c) _3/29/2024_ _India Lyon-Myrick_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests

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

Describe: updatePizzaInfo

Test: It should update a pizza object with a selected size and toppings.
Code:
let userPizza = new Pizza();
const pizzaSize = "large";
const pizzaToppings = ["cheese", "pepperoni"];
userPizza.updatePizzaInfo(userPizza, pizzaSize, pizzaToppings)
Expect: userPizza = { size: "large", toppings: ["cheese", "pepperoni"] }