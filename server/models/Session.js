const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  
  date_heure: {
    type: Date,
    required: true
  },
  durée: {
    type: Number,
    required: true, 
    min: 1 //  the session has a non-zero duration
  },
  coach: {
    type:mongoose.Schema.Types.ObjectId,ref:"user",required:true,
    required: true
  },
  capacité: {
    type: Number,
    required: true,
    min: 1, // Ensures the capacity is at least 1
    max:10   //la session a une capacité de 10 personnes max
  }
  
  }
);


module.exports = mongoose.model("Session", SessionSchema);
