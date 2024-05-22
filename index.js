const notes = [
    {
        id:1,
        content:"HTML is easy",
        date: "2019-05-20T17:30:31.098Z",
        important: true
    },
    {
        id:2,
        content:"Browser can execute only javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id:3,
        content:"GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]

// import http module
const http = require('http');

//create a server object
// const server = http.createServer((request, response) => {
//     //response.write("Hello World");
//       response.statusCode = 200;
//        response.setHeader('Content-Type', 'text/plain');
//     response.end("Hello World");
// });

const server = http.createServer((request, response) => {
           response.writeHead(200, { 'Content-Type': 'application/json'});
        response.end(JSON.stringify(notes));
    });



//start the sever to listen to requests on port 3001
server.listen(3001,  () => {
    console.log('server is running on http://127.0.0.1:3001');

});

