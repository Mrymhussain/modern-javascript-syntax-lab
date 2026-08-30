// ! Exercise 1:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map((num) => {
  return num * 2;
});

console.log(numsTimesTwo);

// ! Exercise 2:

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
console.log(secondIngredient);


// ! Exercise 3:

const car = {
    make: 'Audi',
    model: 'Q5',
  };
  const { make, model } = car;

console.log(make);
console.log(model);

// ! Exercise 4:

const morePizzaToppings = ['Cheese', 'Sauce'];

const uncontroversialPizzaToppings = [...morePizzaToppings];

console.log(uncontroversialPizzaToppings);

// ! Exercise 5:

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

const myCar = { ...anotherCar };

myCar.make = 'Mercedes';
myCar.model = 'Q5';

console.log(anotherCar);
console.log(myCar);

