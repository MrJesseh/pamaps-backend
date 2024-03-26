const mongoose = require("mongoose");
const app = require('./app');

//? Attributes/Settings =============================================
let port = process.env.PORT || 3000;
const isTestMode = true;

//? Initialization ======================================================

//! Login to the database.
if (isTestMode) {
  let config = require("./config.json");
  mongoose.connect(config.DBConnectionString);
  mongoose.connection.once("open", async () => {
    console.log("\x1b[32m", "[✅] Connected to Database!", "\x1b[0m");
  });
} else {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  mongoose.connection.once("open", () => {
    console.log("\x1b[32m", "[✅] Connected to Database!", "\x1b[0m");
  });
}
mongoose.Promise = global.Promise;
app.listen(port);
