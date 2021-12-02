import React from "react";
import ExerciseTableHead from "./ExerciseTableHead";
import Exercise from "./ExerciseRow";

function ExerciseTable({ exercises, onDeleteExercise, onEditExercise }) {
    return (
        <table className="App-table" id="exercises">
            < ExerciseTableHead />
            <tbody>
                {exercises.map((exercise, i) => < Exercise exercise={exercise}
                    onDeleteExercise={onDeleteExercise}
                    onEditExercise={onEditExercise}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseTable;