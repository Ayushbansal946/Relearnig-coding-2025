import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCounter] = useState(0); 
  const addvalue = () => {
    setCounter(count + 1);
    console.log(count);
  }
  const subvalue = () => {
    setCounter(count - 1);
    console.log(count);
  }
  return (
    <>
    <h1>react counter basic</h1>
    <h2>Count value: {count}</h2>
    <button onClick={addvalue}>add value</button>{' '}
    <button onClick={subvalue}>subtract value</button>
    <footer>footer....{count}</footer>
    </>
  )
}

export default App
