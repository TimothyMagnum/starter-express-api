const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!, This is my simple express Application')
})
app.listen(process.env.PORT || 3000)
