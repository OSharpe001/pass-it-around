const express = require("express");

const app = express();
const port = 5004;


// LISTENER
app.listen(port, (req, res) => {
    console.log(`This Express Server is running on Port ${port}...`);
});


// ROUTE(S)
app.get("/", (req, res) => {
    res.send(`<h1>99 big cups of tea on the wall</h1><br/><a href="/98">take one down, pass it around</a>`)
});

app.get("/:number_of_cups", (request, response) => {
    if (request.params.number_of_cups > 0) {
        response.send(`<h1>${request.params.number_of_cups} big cups of tea on the wall</h1><br/><a href="/${request.params.number_of_cups - 1}">take one down, pass it around</a>`);
    } else {
        response.send(`<h1>${request.params.number_of_cups} big cups of tea on the wall</h1><br/><a href="/">Start Over</a>`);
    };
});



// nodemon