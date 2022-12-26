const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.json([{
    "User": "Emmy",
    "Email": "emmytes@gmail.com"
  }])
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})