// while and do while loops

// while loop
console.log("while loop");  
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do while loop  
cpnsole.log("do while loop");
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// sum of numbers from 1 to 10
let sum = 0;
i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("sum of numbers from 1 to 10 using while loop");
console.log(sum);

// sum of numbers from 1 to 10 using do while loop
sum = 0;
i = 1;
do {
  sum += i;
  i++;
} while (i <= 10);
console.log("sum of numbers from 1 to 10 using do while loop");
console.log(sum);