const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
const catagories = require('./data/catagory.json')
const languages = require('./data/allLanguage.json')
app.get('/', (req, res) => {
    res.send('server runing')
})
app.get('/language-catagory', (req, res) => {
    res.send(catagories)
})
app.get('/allLanguage', (req, res) => {
    res.send(languages)
})
app.listen(port, () => {
    console.log('language server running');
})