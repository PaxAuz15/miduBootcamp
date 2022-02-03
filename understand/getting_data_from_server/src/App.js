import { useState } from "react"

const Note = ({content,date}) => {
  return <li>
    <p>{content}</p>
    <time>{date}</time>
  </li>
}

const App = (props) => {
  const [notes, setNote] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  function handleChange(event) {
    setNewNote(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newNoteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5
    }
    setNote([...notes,newNoteToAdd])
    setNewNote("")
  }

  function handleShowAll(){
    setShowAll(!showAll)
  }


  return (
    <div className="App">
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll?"Show only important":"Show All"}</button>
      <ul>
        {showAll?notes.map((note) => {
          return <Note key={note.id} {...note}/>
        }):notes.filter(note=>note.important ===true).map((note) => {
          return <Note key={note.id} {...note}/>
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newNote}></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default App
