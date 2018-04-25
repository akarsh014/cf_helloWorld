'use strict';

var express = require('express');
var cfenv = require("cfenv");

let app = express();
let appEnv   = cfenv.getAppEnv();

app.get('/', function (req, res) {
  res.send("ROOT API")
});

app.listen(appEnv.port, function() {
    console.log("server starting on " + appEnv.url);
})
