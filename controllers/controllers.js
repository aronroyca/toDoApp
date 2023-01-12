module.exports = function (req, res) {
  console.log("post /home", req.body);
  fs.appendFileSync("./todos.txt", `, ${req.body}`, "utf-8");
  todos = fs.readFileSync("./todos.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
  res.json(todos);
};
