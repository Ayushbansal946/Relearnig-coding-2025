let obj1={};// object
console.log(obj1);// {}



let username={
  "f name":"ayush",
  lname:"bansal",
  islogin:true
};// object
console.log(username);// { fname: 'ayush', lname: 'bansal', islogin: true }

// how to axcess object value
console.log(username.lname);// bansal
console.log(username["f name"]);// f name is a key so we can't use . to axcess it we have to use [] to axcess it

const user1={
  username:"ayush",
  email:"ayushbansal946@gmail.com",
  password:"123456"
  }
user1.username="ayush2";// we can change the value of object key even if it is constant variable
user1.islogin=true;// we can add new key value pair in object even if it is constant variable
console.log(user1);// { username: 'ayush2', email: 'ayushbansal946@gmail.com', password: '123456', islogin: true }
console.log(user1.username);// ayush2
console.log(user1.email);//
console.log(user1.password);// 123456
console.log(user1.islogin);// islogin is not defined in user1 object so it will not throw error beacuse it is a key value pair in object that we have added in user1 object

let obj2=new Object();// object