const express = require('express')
const dotenv = require('dotenv')
require('colors')

dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

const PORT = process.env.PORT || 4000

app.listen(
  PORT,
  console.log(
    `Sever running in ${process.env.NODE_ENV.toUpperCase()} on port ${PORT}`
      .cyan.bold
  )
)
