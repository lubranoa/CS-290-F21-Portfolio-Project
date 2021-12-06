import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputTableHead from "../components/InputTableHead";
import EditExerciseRow from "../components/EditExerciseRow";

export const EditExercisePage = ({ exerciseToEdit }) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: "PUT",
            body: JSON.stringify(editedExercise),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise!");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <>
            <h2>Edit Exercise</h2>
            <p class="table-container">
                <table className="App-table" id="edit-table">
                <caption>Change desired information</caption>
                    < InputTableHead />
                    <tbody>
                        < EditExerciseRow name={name} setName={setName} 
                            reps={reps} setReps={setReps} 
                            weight={weight} setWeight={setWeight} 
                            unit={unit} setUnit={setUnit} 
                            date={date} setDate={setDate} />
                    </tbody>
                </table>
                <button onClick={editExercise}>Save</button>
            </p>
        </>
    );
}

export default EditExercisePage;