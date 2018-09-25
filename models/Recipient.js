const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define recipent schema
const recipientSchema = new Schema({
  email: String,
  voted: {type: Boolean, default: false}
});

module.exports = recipientSchema;
