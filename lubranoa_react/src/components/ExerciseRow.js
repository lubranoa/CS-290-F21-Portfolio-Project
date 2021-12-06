import React from "react";
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";

function Exercise ({ exercise, onDeleteExercise, onEditExercise }) {
    return(
        <tr>
            <td>{ exercise.name }</td>
            <td>{ exercise.reps }</td>
            <td>{ exercise.weight }</td>
            <td>{ exercise.unit }</td>
            <td>{ exercise.date }</td>
            <td>
                < RiEditLine className="edit-icon"
                    onClick={ () => onEditExercise(exercise) } />
            </td>
            <td>
                < RiDeleteBin2Line className="delete-icon"
                    onClick={ () => onDeleteExercise(exercise._id) } />
            </td>
        </tr>
    );
}

export default Exercise;