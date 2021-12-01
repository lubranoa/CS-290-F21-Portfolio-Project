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