import React from 'react'

const Header = (props) => <h1>{props.course}</h1>

const Content = ({part,exercise}) => <p>{`${part} ${exercise}`}</p>

const Footer = ({exercises}) => {
  let total = 0
  for (let i = 0; i < exercises.length; i++) {
    total += exercises[i]
  }
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Footer exercises={[exercises1,exercises2,exercises3]} />
    </div>
  )
}

export default App