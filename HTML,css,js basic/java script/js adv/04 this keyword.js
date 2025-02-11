//this keyword and how to bind a context to it 
const person={
  name:"ayush",
  age:27,
  greet(){
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  }
}

person.greet();
//this keyword is a reference to the object that is calling the method

const person2=person.greet;
//person2();//peError: undefined is not an object (evaluating 'this.name')
//this keyword is not bound to the person object anymore because we are calling the function directly and not through the person object
const person3=person.greet.bind({name:"sachin",age:30});
person3();//Hello my name is sachin and I am 30 years old