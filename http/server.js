const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
//necessary for json data
app.use(express.urlencoded({ extended: false}));
// necessary for form data
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('<h3>I said Hello from Express</h3>');
    // res.json({msg: "This is some json content"});
    res.send(req.rawHeaders);
});

app.post('/contact', (req, res) => {
    // how do we send data to the server in the request body
    // simulate with some form data and send back what is in the body
    // res.send(req.body);
    // res.send(req.body.name);
    // we decide what we send, obviously
    if(!req.body.name) {
        return res.status(400).send("Name is required here!");
    } else return res.status(201).send(`Thank you ${req.body.name}`);
    // res.send(req.header('Content-Length'));

});

app.post('/login', (req, res) => {
    if(!req.header("x-auth-token")) {
        return res.status(400).send("No token sir!")

    }
    // let us simulate an authentication
    if(req.header('x-auth-token') != '12345') {
        return res.status(401).send('You need to get a correct token, no hacking allowed here!')
    }
    res.send('All clear!')
})

app.put('/post/:id', (req, res) => {
    // some database stuff to update the post
    res.json({
        id: req.params.id,
        title: req.body.title
    });
})

app.delete('/post/:id', (req, res) => {
    // some database stuff to update the post
    res.send({msg: `Post ${req.params.id} deleted`})
    });


app.listen(5000, () => console.log(`Server started on 5000`)); 