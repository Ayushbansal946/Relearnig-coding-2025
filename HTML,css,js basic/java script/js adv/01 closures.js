//closure is a function that has access to the outer function scope even after the outer function has returned.

function outerFunction() {
  let outerVariable = 4;
    return function innerFunction() {
        outerVariable++;
        return outerVariable;
    }
}

let fun=outerFunction();//fun is holding the defination of inner function and it will hold the outerVariable value and the innerFunction will have access to the outerVariable value.
console.log(fun());//5
console.log(fun());//6
let fun2=outerFunction();
console.log(fun2());//5