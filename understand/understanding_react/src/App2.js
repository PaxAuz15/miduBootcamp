import "./App.css"
import { useState } from "react"

// Correct way: Separate States because is more atomic.
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>left</button>
//       <button onClick={() => setRight(right + 1)}>right</button>
//       {right}
//     </div>
//   )
// }



const WarningDontUseCounters = () => {
    return (
        <h1>DON'T USE COUNTER APP</h1>
    )
}

const ClicksCounter = ({left,right}) => {
    return (
        <p>Clicks Totales: {left+right}</p>
    )
}

const ListOfClicks = ({msg}) => {
    return <p>{msg.join(", ")}</p>
}

const INITIAL_COUNTER_STATE = {
    left: 0,
    right: 0,
    message: 'This is a counter clicks app',
    msg: []
}

const App = () => {
    const [counterClicks, setCounterClicks] = useState(INITIAL_COUNTER_STATE)

    function handleClickLeft() {
        setCounterClicks(preventData=>{
            return {
                ...preventData,
                left: preventData.left + 1,
                msg: [...preventData.msg, 'L']
            }
        })
    }

    function handleClickRight() {
        setCounterClicks(preventData=>{
            return {
                ...preventData,
                right: preventData.right + 1,
                msg: [...preventData.msg, 'R']
            }
        })
    }

    function handleClickReset() {
        setCounterClicks(()=>{
            return INITIAL_COUNTER_STATE
        })
    }

    return (
        <div>
            <p>{counterClicks.message}</p>
            {counterClicks.left}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickReset}>Reset</button>
            <button onClick={handleClickRight}>Right</button>
            {counterClicks.right}
            {
                counterClicks.left + counterClicks.right === 0 ?
                <WarningDontUseCounters/>:
                <>
                    <ClicksCounter left={counterClicks.left} right={counterClicks.right}/>
                    <ListOfClicks msg={counterClicks.msg}/>
                </>
            }
        </div>
    )
}

export default App