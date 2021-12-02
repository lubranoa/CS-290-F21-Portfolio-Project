import React from "react";
import InputTableHead from "./InputTableHeader";
import InputRow from "./InputRow";

function ExerciseTable({ exercises }) {
    return (
        <table id='exercises'>
            < InputTableHead />
            <tbody>
                < InputRow />
            </tbody>
        </table>
    );
}

export default ExerciseTable;