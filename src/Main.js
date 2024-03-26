const mongoose = require("mongoose");
const app = require('./app');
const db = require('./data/Parking');

//? Attributes/Settings =============================================
let port = process.env.PORT || 3000;
const isTestMode = true;

//? Initialization ======================================================

//! Login to the database.
if (isTestMode) {
  let config = require("./config.json");
  mongoose.connect(config.DB_CONNECTION_STRING);
  mongoose.connection.once("open", async () => {
    console.log("\x1b[32m", "[✅] Connected to Database!", "\x1b[0m");

    // let data = {
    //     number: 23,
    //     description: "Testing",
    //     latitude: 10.2343,
    //     longitude: -120.134
    // };

    // await db.addMeterLocation(data);


  });
} else {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  mongoose.connection.once("open", () => {
    console.log("\x1b[32m", "[✅] Connected to Database!", "\x1b[0m");
  });
}
mongoose.Promise = global.Promise;
app.listen(port);
