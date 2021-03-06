import * as exercises from './exercises_model.mjs';
import express, { json } from 'express';

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
            res.status(500).json({ Error: 'Request failed' });
        });
});

/**
 * Retrieves all exercises
 */
app.get('/exercises', (req, res) => {
    exercises.getExercises()
        .then(exercises =>{
            res.json(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request Failed' });
        });
});

/**
 * Update the exercise that has a matching _id to the _id in the 
 * query paramter of the URL and set its title, year and language
 * to the values provided in the body
 */
app.put('/exercises/:_id', (req, res) => {
    exercises.replaceExerciseById(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date });
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

/**
 * Delete the exercise that has a matching _id to the _id in the 
 * query paramter of the URL
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteExerciseById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' })
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});