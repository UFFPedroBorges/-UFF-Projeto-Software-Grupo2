import express from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import { getFrontPath } from './helpers.js';
import { initDatabase } from './initDatabase.js';
const session = {
  user: undefined,
}

const persistenceLayer = {
  users: [],
  products: [],
}
const sequelize = initDatabase();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
const htmlFileBasePath = getFrontPath()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', function(req, res) {
  console.log('session.user', session.user)
  if(session.user) {
    res.redirect('/product/listagem');
  } else {
    res.redirect('/user/login');
  }
});


app.get('/header', function(req, res) {
  res.sendFile(`${htmlFileBasePath}/header.html`);
});

app.get('/user/cadastro', function(req, res) {
  res.sendFile(`${htmlFileBasePath}/user/cadastro.html`);
});

app.get('/user/editar', function(req, res) {
  res.sendFile(`${htmlFileBasePath}/user/editar.html`);
});

app.get('/user/login', function(req, res) {
  res.sendFile(`${htmlFileBasePath}/user/login.html`);
});


app.get('/product/cadastro', function(req, res) {
  res.sendFile(`${htmlFileBasePath}/product/cadastro.html`);
});

app.get('/product/listagem', function(req, res) {
  res.sendFile(`${htmlFileBasePath}/product/listagem.html`);
});


// api

app.post('/api/user/login', function(req, res) {
  const { body } = req
  const userToLogin = persistenceLayer.users.find(u => u.email === body.email)
  if( userToLogin && userToLogin.password === body.password) {
    session.user = userToLogin
    res.redirect('/product/cadastro');
    return;
  }

  res.sendStatus(400);
});

app.get('/api/user/logoff', function(req, res) {
  session.user = undefined
  res.redirect('/user/login');
});

app.post('/api/user/cadastrar', function(req, res) {
  const { body } = req
  const user = { ...body, id: uuidv4() }
  session.user = user
  persistenceLayer.users.push(user);
  res.redirect('/product/cadastro');
});

app.post('/api/user/editar', function(req, res) {
  
});



