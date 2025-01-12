// operator precedence
// 1. () 2. ** 3. * / % 4. + - 5. >> >>> << 6. < > <= >= 7. == != 8. & 9. ^ 10. | 11. && 12. || 13. ?:
// operator associativity
// left to right
// to aboid the precedence and associativity we can use () to make the code more readable like
let a = 1 + 2 * 3;
console.log(a); //7 // in this case the * will be executed first and then + will be executed
let b = (1 + 2) * 3;
console.log(b); //9 // in this case the () makes the code more readable and it also makes the code more understandable
let c = ((1 + (2 * 3)) / 2);
console.log(c); //4  in this case the () makes the code more readable and it also makes the code more understandable