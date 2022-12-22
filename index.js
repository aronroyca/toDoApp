let express = require('express');
let bp = require('body-parser');

const app = express();
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

let todos = [
  'clean bathroom',
  'add database to todo app',
  'wrap christmas gifts'
]

app.use(express.static('./public'));

app.get('/home', function (req, res) {
  console.log('get /home');
  res.json(todos);
});

app.post('/home', function (req, res) {
  console.log('post /home', req.body.text);
  todos.push(req.body.text)
  res.json(todos);
});

app.delete('/home', function (req, res) {
  console.log('post /home', req.body.text);
  todos = todos.filter(x => x !== req.body.text)
  res.json(todos);
});

app.listen(3000)