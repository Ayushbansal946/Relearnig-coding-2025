//genrators and iterators are used to handle async code in a synchronous way 
function* numgenrator(){
yield 1;
yield 2;
yield 3;
return `no more values`;
}

let num=numgenrator();
console.log(num.next().value);//1
console.log(num.next().value);//2
console.log(num.next().value);//3
console.log(num.next().value);//no more values

let num2=numgenrator();
console.log(num2.next().value);//1
console.log(num2.next().value);//2
console.log(num2.next().value);//3