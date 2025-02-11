//promises are used to handle asynchronous operations in javascript
//promises are the better way to handle asynchronous operations in javascript
// promises helps us to achive asencronous programming in javascript we can also use (async and await for this purpose)

function fetchdata()
{
  return new Promise((resolve, reject)=>{
setTimeout(() => {
  let success=true;
  if(success)
  {
    resolve("Data Fetched Successfully");//if we use resolve then then block will be executed we can send any data to then block  like array object etc
  }
  else
  {
    reject("data not fetched");//if we use reject then catch block will be executed
  }
}, 2000);

  })
}
fetchdata()
  .then((msg)=>{//callback function of then block will be executed if the promise is resolved
    console.log(msg);
    let data=msg.toLowerCase();
    return data;//we can return any data from then block and it will be passed to the next then block
  }).then((value)=>console.log(value))//we can use then chain to handle the promisefurther
  .catch((msg)=>console.log(msg)//callback function of catch block will be executed if the promise is rejected 
  );//we can use then and catch block to handle the promise 