import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('im express.js server')
})

app.listen(port, () => {
  console.log(`Hello server is listening at  ${port}`)
})