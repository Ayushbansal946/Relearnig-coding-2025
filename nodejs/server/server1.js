// we are using these 3 libraries to create a server and serve the files from the server
// we are using the http module to create a server and the fs module to read the file and the path module to get the path of the file 
const http=require('http');
const fs=require('fs');
const path=require('path');
//we are using port 3001 to run the server. You can change the port number to any other port number if you want to run the server on a different port.
const port=3001;
const server=http.createServer((req,res)=>{
const filePath=path.join(__dirname, req.url==='/'? 'index.html' : req.url);//cudition  ? "if the condition is true " : "else part if the condition is false" are called ternary operators
const extName=String(path.extname(filePath)).toLocaleLowerCase();//extname is used to get the extension of the file

const mimeTypes={
  ".html":"text/html",
  ".js":"text/javascript",
  ".css":"text/css",
  ".json":"application/json",
  ".png":"image/png",
  ".jpg":"image/jpg",
 }
const contentType = mimeTypes[extName]||'application/octet-stream';
fs.readFile(filePath,(err,content)=>{
  if(err)
    {
      if(err.code=='ENOENT'){
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('<h1>404 : File Not Found bro</h1>','utf-8');
      }
      else{
        res.writeHead(500);
        res.end('Server Error: '+err.code,'utf-8');
      }
    }
  else
  {
    res.writeHead(200,{'Content-Type':contentType});
    res.end(content,'utf-8');
  }

})})
//creating a server using http module and using fs module to read the file and path module to get the path of the file 
// server.listen is used to listen to the port and when the server is running it will print the message in the console
server.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})