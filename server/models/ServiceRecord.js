const mongoose = require('mongoose');

const serviceRecordSchema = new mongoose.Schema({
  vehiclePlate: String,
  customerName: String,
  date: Date,
  workDone: String,
  partsUsed: [String]
});

module.exports = mongoose.model('ServiceRecord', serviceRecordSchema);
