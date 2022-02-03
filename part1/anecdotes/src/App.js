import React, { useState } from 'react'

const Button = ({text,func}) => <button onClick={func}>{text}</button>
const Title = ({text}) => <h1>{text}</h1>

function generateRandomNumber(max){
  const randomNumber = Math.floor(Math.random() * max)
  return randomNumber;
}

const anecdotesPoints = {
  0:1,
  1:3,
  2:4,
  3:2,
  4:7,
  5:4,
  6:3
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState(anecdotesPoints)
  
  function handleClickAnecdote(){
    setSelected(() => {
      return generateRandomNumber(anecdotes.length)
    })
  }

  function handleClickVote(){
    setPoints(preventData => {
      return {
        ...preventData,
        [selected]: preventData[selected] + 1
      }
    })
  }

  // Sorting keys object by object value. Return an array -> https://stackoverflow.com/a/16794116/16950897
  const keysSorted = Object.keys(points).sort((a,b)=> points[b]-points[a])
   
  return (
    <div>
      <Title text='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]}votes</p>
      <Button text='vote' func={handleClickVote}/>
      <Button text='next anecdote'func={handleClickAnecdote}/>
      <Title text='Anecdote with most votes' />
      <p>{anecdotes[keysSorted[0]]}</p>
      <p>has {points[keysSorted[0]]}votes</p>

    </div>
  )
}

export default App