import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputTableHead from "../components/InputTableHead";
import EditExerciseRow from "../components/EditExerciseRow";

export const EditExercisePage = () => {

    return (
        <>
            <h2>Edit Exercise</h2>
            <p>
                <table id="editEx">
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