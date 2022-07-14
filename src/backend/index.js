import express from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import { getFrontPath } from './helpers.js';
import { createContainer } from './container.js';
import { routes as userRoutes } from './contexts/user/interface/index.js';




const persistenceLayer = {
  users: [],
  products: [],
}

const container = await createContainer();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
const htmlFileBasePath = getFrontPath()
const routes = [...userRoutes]

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', function(req, res) {
  console.log('session.user', container.session.user)
  if(container.session.user) {
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
routes.forEach(r => {
  app[r.verb](r.path, async (req, res) => {
    try {
      await r.action({...container, req, res});
    }
    catch(e){
      console.log("ERROR AQUI: ", e)
    }
  })
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



