const mongoose = require('mongoose');

const contestantSchema = new mongoose.Schema({
  name: String,
  course: String,
  department: String,
  profilePic: String,
    
  eventId: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event' }, 
});

const Contestant = mongoose.model('Contestant', contestantSchema);

module.exports = Contestant;
