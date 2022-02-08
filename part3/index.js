// const http = require("http")
const express = require('express')
const app = express()
app.use(express.json()) //Support json body reques
let notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    },
    {
        id: 2,
        content: 'Browser can execute only Javascript',
        date: '2019-05-30T18:39:34.091Z',
        important: false,
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true,
    },
]

// const app = http.createServer((request, response) => {
//   console.log({ request })
//   response.writeHead(200, { "Content-Type": "application/json" })
//   response.end(JSON.stringify(notes))
// })

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find((note) => note.id === id)
    if (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter((note) => note.id !== id)
    res.status(204).end()
})

app.post('/api/notes', (req, res) => {
    const body = req.body

    if (!body || !body.content) {
        res.status(400).json({
            error: 'body.content is missing',
        })
    }

    const ids = notes.map((note) => note.id)
    const maxId = Math.max(...ids)
    const newNote = {
        id: maxId + 1,
        content: body.content,
        date: new Date().toISOString(),
        important: typeof body.important !== 'undefined' ? body.important : false,
    }
    notes = [...notes, newNote]

    res.status(201).json(newNote)
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
