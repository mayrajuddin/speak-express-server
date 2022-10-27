const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const catagories = require('./data/catagory.json')
app.get('/', (req, res) => {
    res.send('server runing')
})
app.get('/language-catagory', (req, res) => {
    res.send(catagories)
})
app.listen(port, () => {
    console.log('language server running');
})