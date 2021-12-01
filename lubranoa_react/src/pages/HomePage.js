import React from "react";
import ExerciseTable from "../components/ExerciseTable";
import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';

function HomePage() {
    
    const [exercises, setExercises] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);
    
    return (
        <div className="App-header">
            <h2>List of Exercises</h2>
            < ExerciseTable exercises={exercises} />
            < Navigation />
        </div>
    )
}

export default HomePage;