const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
  name: String,
  skill: String,
  available: Boolean,
});

module.exports = mongoose.model('Mechanic', mechanicSchema);
