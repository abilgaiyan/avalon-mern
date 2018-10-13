const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for Avalon Customers Target Areas
const targetAreaInfoSchema = new Schema({
    targetArea: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('targetareainfo', targetAreaInfoSchema);