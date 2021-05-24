require("dotenv").config();
// Carregando módulos
const express = require('express')
const app = express()
const routes = require('./routes/admin')
const mongoose = require("mongoose")
const connectDataBase = require('./database');
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const admin = require("./routes/admin")
const path = require("path")
const session = require("express-session")
const flash = require("connect-flash")

connectDataBase();

app.use(routes);
const port = 8081;

app.listen(port, () => {
  console.log("Servidor rodando!")
})
//configuraçôes
// Sessão
app.use(session({
  secret: "cursodenode",
  resave: true,
  saveUninitialized: true
}))
app.use(flash())
// Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg")
  res.locals.error_msg = req.flash("error_msg")
  next()
})

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

// Public
app.use(express.static(path.join(__dirname, "public")))
//rotas
app.get('/', (req, res) => {
  res.send('Rota principal')
})

app.get('/posts', (req, res) => {
  res.send("lista Posts")
})

app.use('/admin', admin)
//Outros