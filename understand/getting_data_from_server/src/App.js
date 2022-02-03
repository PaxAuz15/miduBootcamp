import { useState } from "react"

const Note = ({ title, body }) => {
  return (
    <li>
      <p>{title}</p>
      <small>{body}</small>
    </li>
  )
}

const App = (props) => {
  const [notes, setNote] = useState(props.notes)
  const [newNote, setNewNote] = useState("")

  function handleChange(event) {
    setNewNote(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newNoteToAdd = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    }
    setNote([...notes, newNoteToAdd])
    setNewNote("")
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <ol>
        {notes.map((note) => {
          return <Note key={note.id} {...note} />
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={newNote}></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default App
