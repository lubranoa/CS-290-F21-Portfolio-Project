import mongoose from 'mongoose';

mongoose.connect(
    'mongodb://localhost:27017/exercises_db',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

/**
 * Define the exercise schema
 */
 const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true },
});

/**
 * Compile the model from the schema
 */
 const Exercise = mongoose.model('Exercise', exerciseSchema);

 /**
 * Create an exercise
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight
 * @param {String} unit
 * @param {String} date 
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
  const createExercise = async (name, reps, weight, unit, date) => {
    // Call the constructor to create a new instance of the model class Exercise
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    // Call save to persist this object as a document in MongoDB
    return exercise.save();
}

/**
 * Retrieve all exercises
 * @returns A JSON array containing the entire collection of exercises
 */
 const getExercises = async () => {
    const query = Exercise.find({});
    return query.exec();
}

export { createExercise, getExercises };