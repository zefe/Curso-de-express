const express = require("express");
const app = express();


// CON PUG
const path = require("path");

app.use("/static", express.static(path.join(__dirname, "public")));

const productsRouter = require('./routes/products');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/products", productsRouter);

//CON HANDLEBARS

// const engines = require('consolidate');

// app.engine('hbs', engines.handlebars)

// app.set('views', './views')
// app.set('view engine', 'hbs')

// app.get("/", function(req, res) {
//   res.render("index", { hello: "hola", world: "mundo" });
// });

const server = app.listen(8000, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});