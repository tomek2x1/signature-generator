const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(require("./controllers"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})