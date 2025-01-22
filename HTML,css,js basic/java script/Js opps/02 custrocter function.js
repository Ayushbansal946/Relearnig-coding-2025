//custrocter function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello ${this.name}`);
  };
}
const person1 = new Person("ayush", 27);