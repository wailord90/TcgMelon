const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/html')))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname)));
app.set('views', path.join(__dirname, '/'));
app.listen(3000, () => console.log('Listening on port 3000.'))



// remove dir name to server anyfile
//app.use(express.static(path.join(__dirname, '/views/lib')));
