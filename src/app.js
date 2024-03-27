const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


// Set Express Properties =========================================
app.use("/assets", express.static(__dirname + "/assets"));
app.use('/media', express.static(__dirname + '/assets/img'));
app.use(cors());

//! GET requsts ===================================================

// Map Endpoints ==============================================
require('./routes/map/getParkingMeterPoints')(app); // Gets all points for the parking meter map.


// Utility Endpoints ==============================================
require('./routes/default/status')(app);


// Authentication Endpoints ==============================================




//! POST requests ==============================================


// Error Endpoints ================================================
app.all('*', (req, res) => {
    res.status(404).send({status: "error", error_code: "404: Page does not exist."});
  });
// Export the app.
module.exports = app;