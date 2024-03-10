// console.log("Hello, World");
// function favoriteAnimal(animal, checker) {
//     if (checker == "animal")
//       return animal + " is my favorite animal!";
//     return animal + " is my favorite Car!";

//   }

// let mercedes = ["Mercedes", "A180", "Diesel", 2024];

// let cars = {
//   name: 'Porsche',
//   Model: 2024,
//   lastName: '911 GT3RS'
// }
//   console.log(favoriteAnimal("Goat", "animal"));
//   console.log(favoriteAnimal(mercedes[2]));
//   console.log(favoriteAnimal(cars.name));

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
