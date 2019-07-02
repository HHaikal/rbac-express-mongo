const express = require("express");
const app = express();
const port = 3000;

//config
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// monggose | ODM
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/rbac", { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

// Routes
const auth = require("./routes/auth");

app.use("/", auth);

app.listen(port, () => console.log(`app listen in port ${port}`));
