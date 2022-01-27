import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Mnemonics extends Component {
    render() {
        const mnemonicIDs = ["Acute decompensated heart failure", 
        "High anion gap metabolic acidosis",
        "Systemic lupus erythematosus"
    ];
        const lists = mnemonicIDs.map((i, index) => (
            <li key={index}>
                <NavLink to={"/mnemonics/" + i}>{i}</NavLink>
            </li>
        ));
        return (
            <div class="col-md-10 offset-md-1 col-sm-12">
                <h1>醫學口訣</h1>
                {lists}
            </div>
        );
    }
}
