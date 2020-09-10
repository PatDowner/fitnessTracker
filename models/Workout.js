const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: String,
    required: true
  },
  exercises: [{
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    weight: {
      type: Number
    },
    sets: {
      type: Number
    },
    reps: {
      type: Number
    },
    distance: {
      type: Number
    }
  }]
})

module.exports = model('Workout', Workout)
