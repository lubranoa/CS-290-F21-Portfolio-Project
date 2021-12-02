import React from "react";
import { RiDeleteBin2Line, RiEditLine } from 'react-icons/ri'

function Exercise ({ exercise }) {
    return(
        <tr>
            <td>{ exercise.name }</td>
            <td>{ exercise.reps }</td>
            <td>{ exercise.weight }</td>
            <td>{ exercise.unit }</td>
            <td>{ exercise.date }</td>
            <td>< RiEditLine /></td>
            <td>< RiDeleteBin2Line/></td>
        </tr>
    );
}

export default Exercise;