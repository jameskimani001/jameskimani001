const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  customerName: String,
  contact: String,
  carModel: String,
  problemDescription: String,
  date: Date,
  status: { type: String, default: 'pending' },
  mechanic: { type: mongoose.Schema.Types.ObjectId, ref: 'Mechanic' },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
