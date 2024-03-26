const parkingMeter = require('./models/parkingMeter.model');

module.exports = new (class Parking {
  constructor() {}


    // Creates a new meter and adds it to the database.
    async addMeterLocation(meterData){
        if(await this.meterExists(meterData.number)){
            return false;
        }

        try{
            await new parkingMeter({
                number: meterData.number,
                description: meterData.description,
                location: {
                    latitude: meterData.latitude,
                    longitude: meterData.longitude
                }
            }).save();
        }catch(error){
            console.error(error);
            return false;
        }
        return true;
    }

    // Determine whether or not a meter of this number already exists.
    async meterExists(meter_number) {
        let data = await this.getMeter(meter_number);
        if (data == false) {
            return false;
        }
        return true;
    }

    // Gets data for a specific meter.
    async getMeter(meter_number){
        let data = await parkingMeter.findOne({number: meter_number});
        if(data == null || data == undefined){
            return false;
        }else{
            return data;
        }
    }

    // Returns all meters.
    async getAllMeters(){
        let data = await parkingMeter.find({});
        if(data == null || data == undefined || data.length <= 0){
            return false;
        }else{
            return data;
        }
    }
})();
