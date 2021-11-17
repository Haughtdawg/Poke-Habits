const express = require('express')
const app = express()
const port = 5000

app.get('/test', (req, res) => {
  res.send({data: 'hello from the backend'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})