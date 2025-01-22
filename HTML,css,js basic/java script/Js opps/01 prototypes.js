/* // prototype in js
let computer={cpu:"intel",ram:"8gb",storage:"1tb"};
let laptop={
  screen:"15inch",
  weight:"1.5kg",
  __proto__:computer,

};
let ayushramcomputer={ram:"16gb"};

console.log(`computer`,computer.__proto__);// computer.__proto__=object;
console.log(`\n \n laptop`,laptop,"\n\n",laptop.__proto__);// laptop.__proto__=computer; */

let genericcar={
  tyers:4,
  engine:"v8",
  color:"white",

}
let teala={
  driver:"AI",
//  __proto__:genericcar,  // this is not a good way to inherit the properties of genericcar object to teala object
}
Object.setPrototypeOf(teala,genericcar);// this is the best way to inherit the properties of genericcar object to teala object
console.log(`teala`,teala);// teala object will inherit the properties of genericcar object it will show in console the inherit  properties of genericcar object as well as the properties of teala object
console.log(`Object.get prototype of teala`,Object.getPrototypeOf(teala));// this will only show the prototype of teala object which is inharited from genericcar object
console.log(`Object.get prototype of genericcar`,Object.getPrototypeOf(genericcar));// this will show the tyers property of genericcar object