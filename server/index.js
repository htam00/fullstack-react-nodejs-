// Dependencies Packages
const express = require('express')
const morgan  = require('morgan')
const cors    = require('cors')
const axios   = require('axios')

const app = express()

const origin = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://hardcore-tereshkova-e6c409.netlify.com'
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({ origin }))


app.get('/', async (req, res) => {
 const count = req.query.count || 20
 const users = await axios.get(`https://randomuser.me/api/?results=${count}`)
 res.json({ data: users.data.results })
})

app.listen(4000, console.log('[Server] Running Connected ...'))
