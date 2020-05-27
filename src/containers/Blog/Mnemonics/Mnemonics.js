import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Mnemonics extends Component {
    render() {
        const mnemonicIDs = ["Acute decompensated heart failure", "High anion gap metabolic acidosis"];
        const lists = mnemonicIDs.map((i, index) => (
            <li key={index}>
                <NavLink to={"/mnemonics/" + i}>{i}</NavLink>
            </li>
        ));
        return (
            <div>
                {lists}
            </div>
        );
    }
}
