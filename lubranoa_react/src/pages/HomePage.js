import React from "react";
import ExerciseTable from "../components/ExerciseTable";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function HomePage({ setExerciseToEdit }) {
    
    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const onDeleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            setExercises(exercises.filter(exercise => exercise._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEditExercise = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    };
    
    const loadExercises = async () => {
        const response = await fetch("/exercises");
        const data = await response.json();
        setExercises(data);
    };

    useEffect(() => {
        loadExercises();
    }, []);
    
    return (
        <>
            <h2>List of Exercises</h2>
            <p class="table-container">
                < ExerciseTable exercises={exercises} 
                    onDeleteExercise={onDeleteExercise} 
                    onEditExercise={onEditExercise} />
            </p>
        </>
    );
}

export default HomePage;