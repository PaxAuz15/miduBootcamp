import './App.css';
import { useState } from 'react'

const Counter = ({number}) => {
  return <h1>{number}</h1>
}

function App() {

  const [initialCounter, updateCounter] = useState(0)
  const addValue = () => {
    // updateCounter(initialCounter+1)
    updateCounter(prevCounter => prevCounter+1)
  }
  const resetValue = () => {
    updateCounter(0)
  }

  const restValue = () => {
    updateCounter(prevCounter=>{
      return prevCounter<=0?prevCounter:prevCounter-1
    })
  }

  const handleClick = action => {
    const clickAction = action?addValue:restValue
    return clickAction
  }

  const isEven = initialCounter % 2 === 0
  const messageEven = isEven ? 'Es par':'Es impar'

  return (
    <div className="App">
      <p>Counter value is:</p>
      <Counter number={initialCounter}/>
      <p>{messageEven}</p>
      <button onClick={handleClick(true)}>Add</button>
      <button onClick={resetValue}>Reset</button>
      <button onClick={handleClick(false)}>Rest</button>
    </div>
  );
}

export default App;
