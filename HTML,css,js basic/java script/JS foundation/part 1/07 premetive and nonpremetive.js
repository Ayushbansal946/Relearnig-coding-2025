// number and premetive data type
let num1=10;// number
let num2=new Number(10);// object
console.log(num1);// 10
console.log(num2);// number: 10 
console.log(typeof num1);// number
console.log(typeof num2);// object
// undefined and null
let a;// undefined
let b=null;// null
console.log(a);// undefined
console.log(b);// null
console.log(typeof a);// undefined
console.log(typeof b);// object
// string
let str1="hello";// string
let str2=new String("hello");// object
let str3=`${str1} world my name is "ayush2"`;// string interpolation we can use backtick to use string interpolation and add variable in string using ${variable} 
let str4='hello';// string
console.log(str1);// hello
console.log(str2);// string: hello
console.log(str3);// hello world     my name is "ayush"
console.log(str4);// hello
console.log(typeof str1);// string
console.log(typeof str2);// object
console.log(typeof str3);// string
console.log(typeof str4);// string
