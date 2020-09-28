import React, { Component } from "react";
import CCr from "./CCr";
import FENa from "./FENa"
import FEUN from "./FEUN"
import TTKG from "./TTKG"

export default class Nephro extends Component {

    render() {
        return (
            <div>
                <CCr/>
                <p>Reference:  1. Cockcroft-Gault Equation 2. MDRD quation</p>
                <FENa/>
                <FEUN/>
                <TTKG/>
            </div>
        );
    }
}
