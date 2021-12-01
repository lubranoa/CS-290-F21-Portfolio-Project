import * as exercises from './exercises_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();
app.use(express.json());

/**
 * Create a new exercise using the name, reps, weight, unit, 
 * and date provided in the body
 */
 app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            // In case of an error, send back status code 400.
            res.status(400).json({ Error: 'Request failed' });
        });
});