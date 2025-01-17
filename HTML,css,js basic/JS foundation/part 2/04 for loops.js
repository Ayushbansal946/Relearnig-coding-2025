//there are three types of for loops in JS
//1. for loop
//2. for in loop
//3. for of loop
//4. for each loop
// basic for loop
console.log("basic for loop");
for (let i = 0; i < 5; i++)// first we initialize i=0 then condition i<5 then i++ is the increment part
   {
  console.log(i);
}
// lets do some challenges on for loop
// 1. use a for loop to  iterate through an array of [1,2,3,4,5] and stop when the number 4 is found.
// store the numbers before 4 in a new array named `earlyNumbers`.
console.log("challenge 1");
let earlyNumbers = [];//initialize an empty array
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 4) {
    break;
  }
  earlyNumbers.push(numbers[i]);
}
console.log(earlyNumbers);

// 2. use a for of loop to iterate through an array of [1,2,3,4,5] and stop when the number 4 is found.
// store the numbers before 4 in a new array named `earlyNumbers`.
console.log("challenge 2");
let earlyNumbers2 = [];
for (let number of numbers) {
  if (number === 4) {
    break;
  }
  earlyNumbers2.push(number);
}
console.log(earlyNumbers2);

// 3. use a for of loop to iterate through an array of [1,2,3,4,5] and skip the number 4 and strore the numbers in a new array named `newNumbers`.
console.log("challenge 3");
let newNumbers = [];
for (let number of numbers) {
  if (number === 4) {
    continue;
  }
  newNumbers.push(number);
}
console.log(newNumbers);
console.log("we acn also achive the same result by doing it in a different way");
let newNumbers2 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== 4) {
    newNumbers2.push(numbers[i]);   
  }
}
console.log(newNumbers2); // this will give the same result as above

/* use a for in loop to loop through the object containg city population.
stop the loop when the population of 'berlin' is found and store al the previous cities population in a new object named 
'citypopulations'. 
let cityPopulations = {
'paris': 2140000,
'rome':  2870000,
'lisbon':  5050000,
'berlin':  3500000,
'madrid':  3160000
};
*/
let cityPopulations = {
  'paris': 2140000, 
  'rome':  2870000,
  'lisbon':  5050000,
  'berlin':  3500000,
  'madrid':  3160000
};
let citypopulations2 = {};
for (let city in cityPopulations) {
  if (city === 'berlin') {
    break;
  }
  citypopulations2[city] = cityPopulations[city];
}
console.log(citypopulations2);

// for each loop
console.log("for each loop");

numbers.forEach((number, index) => {
  console.log(number, index);
})

// for in loop
console.log("for in loop");
for (let number in numbers) {
  console.log(number);
}