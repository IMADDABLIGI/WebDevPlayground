console.log("Hello, World");
// function favoriteAnimal(animal, checker) {
//     if (checker == "animal")
//       return animal + " is my favorite animal!";
//     return animal + " is my favorite Car!";
  // }


  // ------------------------ ARRAYS ------------------------
  
//   const cars = [
//     {
//       name: "Mercedes",
//       lastName: "CLA-45",
//       model: 2018
//     },
//     {
//       name: "Porsche",
//       lastName: "992 Gt3",
//       model: 2022
//     },
//     {
//       name: "Audi",
//       lastName: "RS5",
//       model: 2010
//     },
//   ]
  
//   // -- Filter --
  
//   newercars = cars.filter( (car) => {
//     return car.model > 2020;
//   } )
  
//   // -- Map --

//   carsName = cars.map( car => {
//     return car.name;
//   })

// console.log(newercars);
// console.log(carsName);
  
  



// ------------------------ Objects ------------------------

// let cars = {
//   name: 'Porsche',
//   model: 2024,
//   lastName: '911 GT3RS'
// }

// let chv = 400;
// const  cars = {
//   chv
// }

// const {name, model, lastName} = cars;
// cars.name = "Mercedes"

// const {carb} = cars;
// cars.carb = "Hybrid"


// const cars2 = {...cars, carb: "Diesel"} //Copying OBJ with changing a value;

// console.log(cars)



  // ------------------------ Exercice {FizzBuzz} ------------------------


// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// function GetPlayerWeapon()
// {
//   const userSelection = prompt("Please write your desired Weapon between Paper Scisors Rock");
//   if (userSelection != "Paper" && userSelection != "Scisor" && userSelection != "Rock")
//    return GetPlayerWeapon();
//   return (userSelection);
// }

// const GetBotWeapon = () => {
//   let choices = [1, 2, 3];
//   let choice = choices[Math.floor(Math.random() * choices.length)];

//   if (choice == 1)
//     return ("Paper");
//   else if (choice == 2)
//     return ("Rock");
//   else if (choice == 3)
//     return ("Scisor");
// }

// function GamePlay(botWeapon, playerWeapon)
// {
//   console.log(botWeapon + " VS " + playerWeapon);
//   botWeapon === playerWeapon ? console.log("Draw"): console.log("WIN");
//   // if (botWeapon == playerWeapon)
//   //   console.log("Draw");
//   // if (botWeapon == "Rock" && playerWeapon == "Scisor")
//   //   console.log("You Lost");
//   // else if (botWeapon == "Scisor" && playerWeapon == "Paper")
//   //   console.log("You Lost");
//   // else if (botWeapon == "Paper" && playerWeapon == "Rock")
//   //   console.log("You Lost");
//   // else
//   //   console.log("You Win");
// }

// const Execution = () => {
//   let botWeapon;
//   let playerWeapon;

//   botWeapon = GetBotWeapon();
//   playerWeapon = GetPlayerWeapon();
//   GamePlay(botWeapon, playerWeapon);
// }

// Execution();



// ------------------------ Asynchromous ------------------------


// setTimeout (() => {
//   console.log("Waiting 1 second \n");
// } ,1000);

setTimeout (() => {
  console.log("3");
    setTimeout (() => {
      console.log("2");
      setTimeout (() => {
        console.log("1");
      } ,1000);
    } ,1000);
} ,1000);


// const print = () => {
//   console.log('test');
//   setTimeout()
// }


test()