/* Playing with Variables
Task:

Perform the following mathematical operations
on the provided variables a and b



Add

Subtract

Multiply

Divide

Increment

Decrement

Reminder



Perform arithmetic operations on variables in JS
 */

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    return a+b;
}

// Subtract small value from larger one
function subtract() {
    return b-a;
}

function multiply() {
    return a*b;
}

// Divide larger value by small
function divide() {
    return b/a;
}

// Increase value of a by 1
function increment() {
 let a1=a+1;
    return a1;
}

// Decrease value of b by 1
function decrement() {
    let b1=b-1;
    return b1;
}

// Divide larger value by small to find the reminder
function reminder() {
    return b%a;
}
