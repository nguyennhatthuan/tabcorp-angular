const mongoose = require("mongoose");

const uri = "mongodb://localhost/tabcorp";

mongoose.connect(uri, { useNewUrlParser: true }).catch(err => {
  console.log(`*** ERROR: Can Not Connect to Mongo Server:${uri}: ${err}`);
});

const db = mongoose.connection;
db.once("open", () => {
  console.log(`Connected to mongo at ${uri}`);
});
db.on("error", error => {
  console.log("error", error);
});

module.exports = db;
