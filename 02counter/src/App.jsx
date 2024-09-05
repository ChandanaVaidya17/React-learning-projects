import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // console.log("value added", Math.random())
    counter = counter +1
    setCounter(counter)
  }

  const removeValue = () => {
    // console.log("value added", Math.random())
    // counter = counter - 1
    if (counter > 0){
      setCounter(counter - 1)

    }
  }

  return (
    <>
     <h1>Counter Application trial</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add</button>
     
     <br />
     <br />

     <button
     onClick={removeValue}
     >Substract</button>
     
    </>
  )
}

export default App
