const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`That's no moon, that's port ${PORT} 🌝`)
}) 




// <---------- Routes ------------>

// addition
app.get('/add/:x/:y', (req, res) => {
    let x = req.params.x
    let y = req.params.y
    let result = parseInt(x) + parseInt(y)
    res.send(`${x} + ${y} = ${result}`)
})

// subtraction
app.get('/subtract/:x/:y', (req, res) => {
    let x = req.params.x
    let y = req.params.y
    let result = parseInt(x) - parseInt(y)
    res.send(`${x} - ${y} = ${result}`)
})

// multiplication
app.get('/multiply/:x/:y', (req, res) => {
    let x = req.params.x
    let y = req.params.y
    let result = parseInt(x) * parseInt(y)
    res.send(`${x} x ${y} = ${result}`)
})

// division
app.get('/divide/:x/:y', (req, res) => {
    let x = req.params.x
    let y = req.params.y
    let result = parseInt(x) / parseInt(y)
    res.send(`${x} / ${y} = ${result}`)
})

// bonus

