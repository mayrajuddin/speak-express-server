const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
const catagories = require('./data/catagory.json')
const languages = require('./data/languagedata.json')
app.get('/', (req, res) => {
    res.send('server runing')
})
app.get('/language-catagory', (req, res) => {
    res.send(catagories)
})
app.get('/languagedata', (req, res) => {
    res.send(languages)
})
app.get('/languagedata/:id', (req, res) => {
    const id = req.params.id;
    const language = languages.find(lan => lan.id == id)
    res.send(language)
})
app.listen(port, () => {
    console.log('language server running');
})