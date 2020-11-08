import express from 'express'

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello, world from express server')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
