import { useState } from 'react';

import Title from './Title';
import Button from './Button';
import Statistics from './Statistics';

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
      <Statistics all={all} average={average} positive={positive} counter={counter} />
    </div>
  );
}

export default App;
