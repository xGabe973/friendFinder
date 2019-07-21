var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");


var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))
 

app.use(bodyParser.json({type: 'application/*+jason'}))


app.use(bodyParser.raw({type:'application/vnd.custom-type'}))

app.use(bodyParser.text({type:'text/html'}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});