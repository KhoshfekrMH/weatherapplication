const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function (req,res) {
   const url = "https://api.openweathermap.org/data/2.5/weather?q=londen&units=metric&appid=b3b1be3801e0620097ba0e60ff6343e5";

   https.get(url, function (response) {
      console.log(response);
   });

   res.send("server is running");
});


app.listen(3000,function () {
   console.log("server is running out on port 3000.");
});