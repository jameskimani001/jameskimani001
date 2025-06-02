const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World from AutoCare Garage backend!');
});

// TODO: Set up MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
