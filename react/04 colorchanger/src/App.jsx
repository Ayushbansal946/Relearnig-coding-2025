import { useState } from 'react';

function App() {
 const [c, Color] = useState('');
//  function Color(color){
//     setColor(color);
//     console.log(color);
//     console.log(c);
//  } 
 return (
    <div className="w-screen h-screen flex bg-indigo-900" style={{backgroundColor: c}}>
    <div className="fixed flex flex-wrap justify-center self-center
 inset-x-0 px-2">
    <div className="w-150  fixed flex flex-wrap justify-center gap-4 p-4 px-3 py-2 bg-blue-200 text-white rounded-xl">
    <button className="px-4 py-1 rounded-sm  text-white shadow-l bg-red-600"onClick={()=>{Color('red')}}> Red </button>
    <button className="px-4 py-1 rounded-sm  text-white shadow-l bg-cyan-500"onClick={()=>{Color('cyan')}}> cyan </button>
    <button className="px-4 py-1 rounded-sm  text-white shadow-l bg-fuchsia-600"onClick={()=>{Color('fuchsia')}}> fuchsia </button>
    <button className="px-4 py-1 rounded-sm  text-white shadow-l bg-indigo-700"onClick={()=>{Color('indigo')}}> indigo </button>
    <button className="px-4 py-1 rounded-sm  text-white shadow-l bg-[olive]"onClick={()=>{Color('olive')}}> Olive </button>
    </div>
    </div>
    </div>
  )
}

export default App
