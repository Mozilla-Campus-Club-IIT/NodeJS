const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./apiFunctions.js');
const port = process.env.PORT || 3000; //env port for heroku and similar services.

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

routes(app);

app.listen(port, () => {
    console.log(`Server is open on port ${port}`);
});
