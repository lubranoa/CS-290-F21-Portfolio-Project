import React from "react";

function InputRow({ 
    name, setName, 
    reps, setReps, 
    weight, setWeight, 
    unit, setUnit, 
    date, setDate
}) {
    return(
        <tr>
            <td>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </td>
            <td>
                <input
                    type="number"
                    value={reps}
                    onChange={e => setReps(e.target.value)} />
            </td>
            <td>
                <input
                    type="number"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} />
            </td>
            <td>
                <input
                    type="text"
                    placeholder="lbs or kgs"
                    value={unit}
                    onChange={e => setUnit(e.target.value)} />
            </td>
            <td>
                <input
                    type="text"
                    placeholder="MM-DD-YY"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
            </td>
        </tr>
    );
}

export default InputRow;