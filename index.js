// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", function (req, res) {
  // console.log("IP Address:", req.ip);
  // console.log("IP Address:", req.socket.remoteAddress);
  // console.log("Accept Header:", req.headers);
  // console.log("Accept Header:", req.headers["accept-language"]);
  // console.log("Accept Header:", req.headers("Accept-Language"));
  // console.log("Accept Header:", req.accepts.toString());
  // console.log("Accept Header:", req.acceptsCharsets.toString());
  // console.log("Accept Header:", req.acceptsEncodings.toString());
  // console.log("Accept Header:", req.acceptsLanguages.toString());

  res.json({
    ipaddress: req.socket.remoteAddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
