import React from 'react';
import ExerciseTableHead from './ExerciseTableHead';
import Exercise from './ExerciseRow';

function ExerciseTable({ exercises }) {
    return (
        <table id='exercises'>
            < ExerciseTableHead />
            <tbody>
            </tbody>
        </table>
    );
}

export default ExerciseTable;