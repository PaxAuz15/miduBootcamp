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
    
    const [clicks, setCliks] = useState([])
    
    function handleClickLeft() {
        // setCounterClicks(preventData=>{
        //     return {
        //         ...preventData,
        //         left: preventData.left + 1,
        //         msg: [...preventData.msg, 'L']
        //     }
        // })
        setCliks(preventData=>[...preventData, 'L'])
    }

    function handleClickRight() {
        // setCounterClicks(preventData=>{
        //     return {
        //         ...preventData,
        //         right: preventData.right + 1,
        //         msg: [...preventData.msg, 'R']
        //     }
        // })
        setCliks(preventData=>[...preventData, 'R'])
    }

    function handleClickReset() {
        // setCounterClicks(()=>{
        //     return INITIAL_COUNTER_STATE
        // })
        setCliks([])
    }

    const left = clicks.filter(click=>click==='L') //return an array of clicks that are 'L'
    const right = clicks.filter(click=>click==='R') //return an array of clicks that are 'R'

    return (
        <div>
            <p>{INITIAL_COUNTER_STATE.message}</p>
            {left.length}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickReset}>Reset</button>
            <button onClick={handleClickRight}>Right</button>
            {right.length}
            {/* {
                counterClicks.left + counterClicks.right === 0 ?
                <WarningDontUseCounters/>:
                <>
                    <ClicksCounter left={counterClicks.left} right={counterClicks.right}/>
                    <ListOfClicks msg={counterClicks.msg}/>
                </>
            } */}
            {
                left.length + right.length === 0 ?
                <WarningDontUseCounters/>:
                <>
                    <ClicksCounter left={left.length} right={right.length}/>
                    <ListOfClicks msg={clicks}/>
                </>
            }
        </div>
    )
}

export default App