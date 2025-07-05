import Card from "./components/card"
function App() {
const myarray = ["ayush", " Thank you ", "react", "tailwind"]

  return (
    <>
    <Card username="ayush bansal" myarray={myarray}/>
    <h1 className="text-blue-300">welcome to this tailwin in react page </h1>
    </>
  )
}

export default App
