const express = require("express");
//const os = require("os");
const app = express();

app.use(express.static("dist"));

app.get('/customers', (req, res) => res.send('Hello World!'));

app.listen(8080, () => console.log("Listening on port 8080!"));