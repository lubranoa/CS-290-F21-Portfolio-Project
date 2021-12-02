import React from "react";
import InputTableHead from "./InputTableHead";
import AddExerciseRow from "./AddExerciseRow";

function InputTable() {
    return (
        <table id="inputs">
            < InputTableHead />
            <tbody>
                < AddExerciseRow />
            </tbody>
        </table>
    );
}

export default InputTable;