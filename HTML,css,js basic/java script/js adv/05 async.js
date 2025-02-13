//asyncAwait is a way to handle async code in a synchronous way

function fertchdata(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      //resolve({name:"Ayush",age:27});
      reject("Something went wrong");
    },2000);
})
}

async function getData(){
  try{
    const data=await fertchdata();
    console.log(`Hello my name is ${data.name} and I am ${data.age} years old`);
  }
  catch(err){
    console.log(err);
  }
}
getData();