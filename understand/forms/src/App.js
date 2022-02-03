import { Note } from "./Note"
import { useState } from "react"

const Notes = ({ notes }) => {
  return notes.map((note) => {
    return (
      <Note
        key={note.id}
        content={note.content}
        date={note.date}
        categories={note.categories}
      />
    )
  })
}

const App = (props) => {
  const [notes, setNote] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  const [showAll,setShowAll] = useState(true)

  function handleChange(event) {
    setNewNote(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newNoteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
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
      <button onClick={handleShowAll}>{showAll?"Show only importants":"Show All"}</button>
      <ol>
        {showAll?
          <Notes notes={notes}/>:
          <Notes notes={notes.filter(note=>note.important===true)}/>
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Create Note</button>
      </form>
    </div>
  )
}

export default App
