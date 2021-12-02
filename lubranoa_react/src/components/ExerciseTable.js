import React from 'react';
import ExerciseTableHead from './ExerciseTableHead';
import Exercise from './Exercise';

function ExerciseTable({ exercises, onDeleteExercise }) {
    return (
        <table id='exercises'>
            < ExerciseTableHead />
            <tbody>
                {exercises.map((exercise, i) => < Exercise exercise={exercise}
                    onDeleteExercise={onDeleteExercise}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseTable;