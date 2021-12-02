import React from "react";
import InputTableHead from "./InputTableHead";
import InputRow from "./InputRow";

function InputTable() {
    return (
        <table id="inputs">
            < InputTableHead />
            <tbody>
                < InputRow />
            </tbody>
        </table>
    );
}

export default InputTable;