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


// app.use(express.static('./public'));

app.get('/home', (req, res) => {
  console.log('get /home');
  res.json(todos);
});

app.post('/home', (req, res) => {
  console.log('post /home', req.body.text);
  fs.appendFileSync('./todos.txt', `, ${req.body.text}`, 'utf-8');
  todos = fs.readFileSync('./todos.txt', 'utf-8', (err, data) => {
  if (err) console.log(err)
  console.log(data);
});
  res.json(todos);
  });

app.delete('/home', (req, res) => {
  console.log('post /home', req.body.text);
  todos = todos.split(',').filter(x => x !== req.body.text).join(',')
  fs.writeFileSync('./todos.txt', todos, (err) => {
    if (err) console.log(err)
  })
  res.json(todos);
});

app.listen(3000)