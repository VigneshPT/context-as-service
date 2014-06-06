var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var collectsSchema = new Schema({
    clientId:       String,
    location:       {
        ll: String,
        locality:   String
    },
    contextKeywords:    [String]
});
//if model is already defined, then creating it again will throw exception. 
//so, use model if already created, otherwise, create model.
var CollectRequest = mongoose.model('CollectRequest') || mongoose.model('CollectRequest',collectsSchema);

module.exports.CollectRequest = CollectRequest;