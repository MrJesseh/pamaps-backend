const Parking = require('../../data/Parking');

module.exports = async function(app){
    app.get('/map/get-parking-meter-points', async function(req, res) {
        let points = await Parking.getAllMeters();
        if(!points){return res.send("Something went wrong when retrieving the parking meter map points.")}

        return res.send(points);
    });
}