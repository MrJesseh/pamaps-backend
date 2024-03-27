const mongoose = require("mongoose");
const app = require('./app');
const db = require('./data/Parking');

//? Attributes/Settings =============================================
let port = process.env.PORT || 5050;
const isTestMode = true;

//? Initialization ======================================================

//! Login to the database.
if (isTestMode) {
  let config = require("./config.json");
  mongoose.connect(config.DB_CONNECTION_STRING);
  mongoose.connection.once("open", async () => {
    console.log("\x1b[32m", "[✅] Connected to Database!", "\x1b[0m");

    let data = [
      {
        number: 22,
        description: "Sassafras St",
        latitude: 42.1271487,
        longitude: -80.088405
      },
      {
        number: 21,
        description: "Sassafras St",
        latitude: 42.127198,
        longitude: -80.088437
      },
      {
        number: 20,
        description: "Sassafras St",
        latitude: 42.127292,
        longitude: -80.088503
      },
      {
        number: 19,
        description: "Sassafras St",
        latitude: 42.127352,
        longitude: -80.088541
      },
      {
        number: 18,
        description: "Sassafras St",
        latitude: 42.127424,
        longitude: -80.088587
      },
      {
        number: 17,
        description: "Sassafras St",
        latitude: 42.127328,
        longitude: -80.088509
      },
      {
        number: 16,
        description: "Sassafras St",
        latitude: 42.127496,
        longitude: -80.088634
      },
      {
        number: 15,
        description: "Sassafras St",
        latitude: 42.127561,
        longitude: -80.08868
      },
      {
        number: 14,
        description: "Sassafras St",
        latitude: 42.127642,
        longitude: -80.088734
      },
      {
        number: 13,
        description: "Sassafras St",
        latitude: 42.12772,
        longitude: -80.088784
      },
      {
        number: 12,
        description: "Sassafras St",
        latitude: 42.127809,
        longitude: -80.088844
      },
      {
        number: 11,
        description: "Sassafras St",
        latitude: 42.127901,
        longitude: -80.088906
      },
      {
        number: 10,
        description: "Sassafras St",
        latitude: 42.127997,
        longitude: -80.088959
      },
  
  ];

  // for(let i = 0; i < data.length; i++){
  //   await db.addMeterLocation(data[i]);
  // }
    


  });
} else {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  mongoose.connection.once("open", () => {
    console.log("\x1b[32m", "[✅] Connected to Database!", "\x1b[0m");
  });
}
mongoose.Promise = global.Promise;
app.listen(port);
