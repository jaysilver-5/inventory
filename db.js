const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:xxnull@inventory.swo4ach.mongodb.net/?retryWrites=true&w=majority&appName=inventory', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));
