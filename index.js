const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const movies = [
  {id: 1, name: 'Rogue-one'},
  {id: 2, name: 'Babylon'},
  {id: 3, name: 'Terminator'},
  {id: 4, name: 'John Wick'},
  {id: 5, name: 'Tirailleur'}
]

app.get('/api/movies', (req, res) => {
  res.send(movies)
})


app.get('/api/movie/:id', (req, res) => {
  let id = req.params.id
  const movie = movies.find( e => e.id === parseInt(id))
  res.send(movie)
})

app.post('/api/movies', (req, res) => {
  const movie = {
    id : movies.length + 1,
    name : req.body.name
  }
  movies.push(movie)
  res.send(movies)
})

app.put('/api/movies/:id', (req, res) => {
  let id = req.movies.id
  const movie = movies.find( e => e.id === parseInt(id))
  movie.name  = req.body.name
  res.send(movie)
})

app.delete('/api/movies/:id', (req, res) => {
  let id = req.params.id
  const movie = movies.find( e => e.id === parseInt(id))
  const index = movies.indexOf(movie)
  movies.splice(index, 1)
  res.send('Movie deleted')
})


app.listen(port, () => {
  console.log(`Movie app listening on port ${port}`)
})
