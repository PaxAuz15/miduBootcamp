import { Note } from "./Note"

const Notes = ({notes}) => {
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

const App = ({notes}) => {
  return (
    <div className="App">
      <h1>Bootcamp Class #4</h1>
      <ol>
        <Notes notes={notes}/>
      </ol>
    </div>
  )
}

export default App
