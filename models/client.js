var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var clientSchema = new Schema({
		clientId:               String, 
// 		APIToken:               String,
// 		hits:                   Number,
// 		limit:                  Number,
        lastRecordedLocation:   String,
        currentPlace:           String,
		createdDate:            Date
});
//if model is already defined, then creating it again will throw exception. 
//so, use model if already created, otherwise, create model.
var Client = mongoose.model('Client') || mongoose.model('Client',clientSchema);

module.exports.Client = Client;