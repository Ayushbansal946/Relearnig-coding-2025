const http=require('http');
const fs=require('fs');
const path=require('path');

const port=3000;
const server=http.createServer((req,res)=>{
path.join(__dirname, req.url==='/'? 'index.html' : req.url);//cudition  ? "if the condition is true " : "else part if the condition is false" are called ternary operators
 
})
server.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})