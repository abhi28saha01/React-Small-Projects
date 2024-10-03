import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const removeValue = () => {
    if(count > 0){
      setCount(count--);
    }
  }
  const addValue = () => {
    setCount(count++);
  }

  return (
    <>
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
