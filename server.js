const express = require('express')
const server = express()
const PORT = 3000

const path = require('path')
const public_path = path.resolve(__dirname, 'public')

server.use(express.static(public_path))

server.get('/', function (req, res) {
  res.sendFile(path.resolve(public_path, 'index.html'))
})

server.listen(PORT, function () {
  console.log(`Server listening - http://localhost:${PORT}`)
})
