const mongoose = require('mongoose');
const { Schema } = mongoose;



//define schema for our customer
const buyingGroupInfoSchema = new Schema({
    name: String,
    acitve: Boolean,
    displayorder: {type: Number, default: 0},
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('buyinggroup', buyingGroupInfoSchema);