import './App.css';
import { useState } from 'react';

const Title = ({text}) => {
  return <h1>{text}</h1>
}

const Button = ({option,func}) => {
  return <button onClick={func}>{option}</button>
}

const DataRepresent = ({option,counterValue}) => {
  return <p>{`${option} ${counterValue}`}</p>
}

const INITIAL_COUNTER_STATE = {
  good: 0,
  neutral: 0,
  bad: 0
}

const App = () => {

  const [counter, setCounter] = useState(INITIAL_COUNTER_STATE)

  function handleClickGood(){
    setCounter(preventData => {
      return {
        ...preventData,
        good: preventData.good + 1
      }
    })
  }

  function handleClickNeutral(){
    setCounter(preventData => {
      return {
        ...preventData,
        neutral: preventData.neutral + 1
      }
    })
  }

  function handleClickBad(){
    setCounter(preventData => {
      return {
        ...preventData,
        bad: preventData.bad + 1
      }
    })
  }

  //Calculations
  const all = counter.good + counter.bad + counter.neutral
  const average = (counter.good - counter.bad) / all
  const positive = `${counter.good / all}%`

  return (
    <div className="App">
      <Title  text="give feedback"/>
      <Button option="good" func={handleClickGood}/>
      <Button option="neutral" func={handleClickNeutral}/>
      <Button option="bad" func={handleClickBad}/>
      <Title text="statistics"/>
      <DataRepresent option="good" counterValue={counter.good}/>
      <DataRepresent option="neutral" counterValue={counter.neutral}/>
      <DataRepresent option="bad" counterValue={counter.bad}/>
      <DataRepresent option="all" counterValue={all} />
      {
        all === 0 ? 
        <>
          <DataRepresent option="average" counterValue={0} />
          <DataRepresent option="positive" counterValue="0%" />
        </> :
        <>
          <DataRepresent option="average" counterValue={average} />
          <DataRepresent option="positive" counterValue={positive} />
        </>
      }
    </div>
  );
}

export default App;
