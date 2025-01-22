//custrocter function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  
  return `Hello ${this.name} and my age is ${this.age}`;
};
const person1 = new Person("ayush", 27);
console.log(`person1`, person1.greet());