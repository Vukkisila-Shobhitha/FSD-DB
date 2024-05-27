// require the express module
const express = require('express');

//create a new express application
const app = express();

//middleware to parse the request body
app.use(express.json());

//intialize the data
const todos = [
    {
        "createdAt": "2024-05-03T09:01:26.041Z",
        "title": "Pasco",
        "description":"eek",
        "completed":"true",
        "id":"7"
    },
    {
        "createdAt": "2024-05-03T12:21:00.968Z",
        "title": "Water",
        "description":"Live to drink water",
        "completed":"true",
        "id":"8"
    },
    {
        "createdAt": "2024-05-02T16:34:17.437Z",
        "title": "meeting",
        "description":"@ 9.30pm",
        "completed":"false",
        "id":"9"
    }
    
]

//define the firsr route '/'
app.get('/todos',(req,res) => {
    res.send("todos");
});

app.get('/todos/:id',(req, res) => {
 const id = req.params.id;

 const todo = todos.find(todo => todo.id === id);

 if (!todo) {
    res.status(404).send('Todo not found');
    return;
 }

 res.send(todo);
});
app.post('/todo',(req,res) => {
    const {title, description} = req.body;

    // prepare the new todo object
    const todo = {
        title, 
        description,
        completed: false,
        createdAt: new Date().toISOString(),
        id:todos.length + 7 + ''
    }
    // add the new todo object to the todos array
    todos.push(todo);
    //send the new todo object as a response
    res.send(todo); 
})

//start the express application on port 3001
app.listen(3001, () => {
    console.log('server is running on http://localhost:3001')
})