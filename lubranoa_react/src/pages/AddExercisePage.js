import React, { useState } from "react";
import { useHistory } from "react-router";
import InputTableHead from "../components/InputTableHead";
import InputRow from "../components/InputRow";

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert('Successfully added the exercise');
        } else {
            alert(`Failed to add the exercise, status code = ${response.status}`);
        }
        history.push('/');
    };

    return (
        <>
            <h2>Add Exercise</h2>
            <p>
                <table id="inputs">
                    < InputTableHead />
                    <tbody>
                        < InputRow name={name} setName={setName} 
                            reps={reps} setReps={setReps} 
                            weight={weight} setWeight={setWeight} 
                            unit={unit} setUnit={setUnit} 
                            date={date} setDate={setDate} 
                            addExercise={addExercise} />
                    </tbody>
                </table>
            </p>
        </>
    );
}

export default AddExercisePage;