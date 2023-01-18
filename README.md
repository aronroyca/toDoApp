This is my full stack to do app utilizing node.js, express, mongodb, and react.

docker run -d -p 27017:27017 --name todoMongo mongo:5.0
docker exec -it todoMongo mongo

db.todos.insertMany( [
... { task: 'call home' },
... { task: 'make dinner' },
... { task: 'clean house' }
... ] )

// the todo model definition
todo: {
id: number;
taskName: string;
}

CRUD routes
backend:

1. models are clean
2. all crud routes are implemented
3. database is used safely (verify and sanitize user input)
   frontend:
4. well structured code and files (readability and code organization)
5. efficient css class names and easy to follow, minimal css rules
6. modern looking UI that has good spacing, page organization, and coherent theme
   well structured data types and efficient algorithms
