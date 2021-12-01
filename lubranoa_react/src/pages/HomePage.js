import React from "react";
import ExerciseTable from "../components/ExerciseTable";
import Navigation from '../components/Navigation';
import { useState } from 'react';

function HomePage() {
    
    const [exercises, setExercises] = useState([]);
    
    return (
        <>
            <h2>List of Exercises</h2>
            < ExerciseTable exercises={exercises} />
            < Navigation />
        </>
    )
}

export default HomePage;