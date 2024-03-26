module.exports = async function(app){
    app.get('/status', async function(req, res) {
        return res.send({status: "API is functioning!"});
    });
}