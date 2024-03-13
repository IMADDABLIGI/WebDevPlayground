console.log("Hello, World");
function favoriteAnimal(animal, checker) {
    if (checker == "animal")
      return animal + " is my favorite animal!";
    return animal + " is my favorite Car!";

  }


  // -- ARRAYS --
  let mercedes = ["Mercedes", "A180", "Diesel"];
  // let mercedes2 = [...mercedes, 555];
  // console.log(mercedes)
  
  mercedes2 = mercedes.map( (name) => {
    return name += 50
  })
  
  
  mercedes3 = mercedes.filter( (arg) => {
    return arg !== "A180" && arg !== "Diesel";
  } )


  console.log(mercedes2)
  console.log(mercedes3)










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

// function GetBotWeapon()
// {
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

// {/* <p  onClick = { () => {
//   console.log("Naadi"); }
//   }>
// </p> */}

// Execution();