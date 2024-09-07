const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  sendAt: { type: Date, required: true }
});

module.exports = mongoose.model('Email', emailSchema);