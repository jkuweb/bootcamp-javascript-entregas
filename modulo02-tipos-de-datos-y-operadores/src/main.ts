let numbersOfFriends: number = 6;
let dinnerCostTicket: number = 120;
let costOfDrinks: number = 18

// Asumo que yo tb he cenado 
let allDiners = numbersOfFriends + 1;

let foodCost = dinnerCostTicket - costOfDrinks;

let payForEachDiner = foodCost / allDiners

console.log(payForEachDiner.toFixed(2))