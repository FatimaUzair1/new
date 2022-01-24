import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('im express.js server')
})

app.get('/about', (req, res) => {
  res.send('This is something about server')
})


app.listen(port, () => {
  console.log(`Hello server is listening at  ${port}`)
})