var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var developerSchema = new Schema({
        _id:            String, //this will be email
		APIToken:       String,
		hits:           Number,
		limit:          Number,
		createdDate:    Date
});
//if model is already defined, then creating it again will throw exception. 
//so, use model if already created, otherwise, create model.
var Developer = mongoose.model('Developer') || mongoose.model('Developer',developerSchema);

module.exports.Developer = Developer;