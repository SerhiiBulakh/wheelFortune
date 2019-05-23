const express = require('express');
const fs = require('fs')
const cors = require('cors')
const app = express()
const controller = require('./controller')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



app.post('/login', (req, res) => {
//логин
console.log(req.body)
    const data = req.body
    const result = controller.login(data)
    res.send({...result})
})
app.post('/spin', (req, res) => {
//записать и вернуть баланс игрока
    const data = req.body;
   const player = controller.updateScore(data)
    res.send({player})
})

app.get('/segments', (req, res) => {
//вернуть сегменты значений для колеса
const segments = controller.getSegments()
    res.send({segments})
})


app.listen(3000, () => {console.log('Server started')})
