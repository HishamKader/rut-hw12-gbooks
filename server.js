const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config({path: './config.env'})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

const connectionString = process.env.DB_CONNECTION.replace('<password>', process.env.DB_PASSWORD).replace('<dbname>', process.env.DB_NAME)
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => console.log('Succses')).catch(err => console.log(err))


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
