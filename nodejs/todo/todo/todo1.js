const fs=require('fs');
const filePath='./tasks.json';

const saveTasks=(tasks)=>
{
  const dataJSON=JSON.stringify(tasks);
  fs.writeFileSync(filePath,dataJSON);
}
const loadTasks=()=>
{
  try
    {
      const dataBuffer= fs.readFileSync(filePath);
      const dataJSON=dataBuffer.toString();
      return JSON.parse(dataJSON);
    }
  catch(error)
    {
      return[];
    }
}
const listTasks=()=>
{
 const tasks=loadTasks();
 tasks.forEach((task,index)=>
 {
   console.log(`${index+1} - ${task.task}`);
 })
}
const addTask=(task)=>
{
      const tasks=loadTasks(); 
      tasks.push({task});
      saveTasks(tasks);
}
const removeTask=(index)=>
{
 const tasks=loadTasks();
 if(index<0 || index>=tasks.length)
  {
    console.log("Invalid index!");
    return;
  }
else{
  saveTasks(tasks.filter((t,i)=>i!==index-1));
}
}
//taking the data from the file and converting it to JSON format
const command=process.argv[2];
const argument=process.argv[3];
//command line arguments
//command line arguments are passed in the form of arrays
if(command==="add"){
  addTask(argument);
}else if(command==="list"){
  listTasks();
}else if(command==="remove"){
  //parseInt is used to convert the string to an integer
  removeTask(parseInt(argument));
}
else{
  console.log("Command not found!");
}
//The above code is used to create a simple todo list application using node.js and file system module.
//The code is used to add, remove and list the tasks in the todo list.