let fs = require('fs')
let express = require('express');
let bp = require('body-parser');

const app = express();
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

let todos = fs.readFileSync('./todos.txt', 'utf-8', (err, data) => {
  if (err) console.log(err)
  console.log(data);
});


app.use(express.static('./public'));

app.get('/home', (req, res) => {
  console.log('get /home');
  res.json(todos);
});

app.post('/home', (req, res) => {
  console.log('post /home', req.body);
  fs.appendFileSync('./todos.txt', `, ${req.body}`, 'utf-8');
  todos = fs.readFileSync('./todos.txt', 'utf-8', (err, data) => {
  if (err) console.log(err)
  console.log(data);
});
  res.json(todos);
  });

app.delete(`/home/:taskNumber`, (req, res) => {
  console.log('delete /home', req.params.taskNumber);
  let oldTodos = todos.split(',');
  newTodos = [];
  console.log(oldTodos, newTodos)
  for (let i = 0; i < oldTodos.length; i++){
    if (oldTodos[i] !== oldTodos[req.params.taskNumber]) {
      newTodos.push(oldTodos[i]);
    }
  }
  console.log(newTodos.join(','));
  fs.writeFileSync('./todos.txt', newTodos.join(','), (err) => {
    if (err) console.log(err)
  })
  todos = fs.readFileSync('./todos.txt', 'utf-8', (err, data) => {
  if (err) console.log(err)
  console.log(data);
});
  res.json(todos);
});

app.listen(3000)
console.log('listening on port 3000')