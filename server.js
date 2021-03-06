const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

const routes = require("./controllers/burgers_controller.js")
app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});

