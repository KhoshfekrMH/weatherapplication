const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function (req,res) {
   res.send("server is running");
});


app.listen(3000,function () {
   console.log("server is running out on port 3000.");
});