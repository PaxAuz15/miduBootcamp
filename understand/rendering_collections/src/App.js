import { Note } from "./Note"

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
    categories: ['sports','drama']
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
]

const Notes = () => {
  return (
    notes.map((note) => {
      return <Note key={note.id} content={note.content} date={note.date} categories={note.categories} />
    })
  )
}


const App = () => {
  return (
    <div className="App">
      <h1>Bootcamp Class #4</h1>
      <ol>
        <Notes />
      </ol>
    </div>
  )
}

export default App
