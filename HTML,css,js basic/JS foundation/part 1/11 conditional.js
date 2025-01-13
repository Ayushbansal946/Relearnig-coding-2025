//conditional statements
//if else statement , switch statement, ternary operator, short circuit operator

//if else statement
let age = 18;
if (age >= 18) {
  console.log("you can drive");
}
else {
  console.log("you can't drive");
}

let num1=10;
if(num1<10){
  console.log("num1 is less than 10");
}
else if(num1>20){
  console.log("num1 is greater than 20");
}
else if(num1==10){
  console.log("num1 is equal to 10");
}
else{
console.log("num1 is between 10 and 20");
}
//switch statement
let day = 2;
switch (day) {

  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid day");
    break;
}