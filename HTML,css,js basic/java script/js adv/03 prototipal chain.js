//prototypel chain or prototypal inheritance in javascript
//every object in javascript has a prototype and a prototype is also an object

function Person(name,age)
{
  this.name=name;
  this.age=age;
}

Person.prototype.getName=function(){
  return this.name;
}

let person1=new Person("ayush",27);
console.log(person1.getName());//ayush