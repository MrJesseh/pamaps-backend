const mongoose = require('mongoose');
const ParkingMeters = mongoose.connection.useDb("Map");
/*

Schema & Model for Parking Meter data.

Database: Map
Name: parking-meter
Collection: parking-meters

*/

const ParkingMeterSchema = new mongoose.Schema({
    number: Number,
    description: String,
    location: {
        latitude: Number,
        longitude: Number
    }
});

const parkingMeterModel = ParkingMeters.model("parking-meter", ParkingMeterSchema, "parking-meters");

module.exports = {parkingMeter: parkingMeterModel};