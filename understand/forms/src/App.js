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

  return (
    <div className="App">
      <h1>Notes</h1>
      <ol>
        <Notes notes={notes} />
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Create Note</button>
      </form>
    </div>
  )
}

export default App
