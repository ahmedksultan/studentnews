require("dotenv").config();
const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

// configure nunjucks
nunjucks.configure("views", {
     autoescape: true,
     express: app,
});

// routes
app.use("/", require("./routes/index"));

app.use("/css", express.static(__dirname + "/css"));

// 404 error handling
app.use(function (req, res, next) {
     res.status(404).send("Sorry can't find that!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Example app listening at http://localhost:${PORT}`));