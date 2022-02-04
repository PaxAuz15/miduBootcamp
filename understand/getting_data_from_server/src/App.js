import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'

const Note = ({ title, body }) => {
  return (
    <li>
      <p>{title}</p>
      <small>{body}</small>
    </li>
  )
}

const App = () => {
  const [notes, setNote] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const {data} = response
        setNote(data)
        setLoading(false)
      })
  
    /*
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setNote(json)
          setLoading(false)
        })
    */
  }, [])

  function handleChange(event) {
    setNewNote(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newNoteToAdd = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    }
    setNote([...notes, newNoteToAdd])
    setNewNote("")
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <ol>
        {loading? "Loading ...": notes.map((note) => {
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
