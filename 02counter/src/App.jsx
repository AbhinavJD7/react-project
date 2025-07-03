import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter = 5


  const addValue = () => {
    //counter = counter + 1;
    if(counter<=19){
    setCounter(counter + 1)
    console.log("Clicked" , counter);
    }

  }

   const removeValue = () => {
    //counter = counter + 1;
    if(counter>0){
    setCounter(counter - 1)
    console.log("Clicked" , counter);
    }

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h1>Counter Value: {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
