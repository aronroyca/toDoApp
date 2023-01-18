let fs = require("fs");
let express = require("express");
let bp = require("body-parser");
let { MongoClient } = require("mongodb");
var serveStatic = require("serve-static");

let connectionString = "mongodb://localhost:27017";
const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(serveStatic("./public"));

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb://localhost:27017/todoMongo";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await app.get("/home", async (req, res) => {
      console.log("hello world!");
      res.end();
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

app.listen(3000);
console.log("listening on port 3000");

// let todos = fs.readFileSync("./todos.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

// app.get("/home", (req, res) => {
//   console.log("get /home");
//   res.json(todos);
// });

// app.post("/home", (req, res) => {
//   console.log("post /home", req.body);
//   fs.appendFileSync("./todos.txt", `, ${req.body}`, "utf-8");
//   todos = fs.readFileSync("./todos.txt", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//   });
//   res.json(todos);
// });

// app.delete(`/home/:taskNumber`, (req, res) => {
//   console.log("delete /home", req.params.taskNumber);
//   let todosList = todos.split(",");
//   const deletedTodo = todosList[req.params.taskNumber];
//   todosList = todosList.filter((todo) => todo !== deletedTodo);
//   fs.writeFileSync("./todos.txt", todosList.join(","), (err) => {
//     if (err) console.log(err);
//   });
//   todos = fs.readFileSync("./todos.txt", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//   });
//   res.json(todos);
// });

// app.listen(3000);
// console.log("listening on port 3000");
