//asyncAwait is a way to handle async code in a synchronous way

function fertchpostdata(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({name:"Ayush",age:27});
      //reject("Something went wrong");
    },2000);
})
}
function getlikes(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(1000);
      //reject("Something went wrong");
    },2000);
})}

async function getData(){
  try{
//    const data=await fertchpostdata();
  //  const likes=await getlikes();
  const [data,likes]=await Promise.all([fertchpostdata(),getlikes()])//handles multiple promises at once
    console.log(`Hello my name is ${data.name} and I am ${data.age} years old`);
    console.log(`I have ${likes} likes on my post`);
  }
  catch(err){
    console.log(err);
  }
}
getData();