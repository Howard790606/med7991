import React, { Component } from "react";
import CCr from "./CCr";
import ABG_Interpretation from "./ABG_Interpretation";
import TIMI from "./TIMI"
import FENa from "./FENa"

export default class MedCalculator extends Component {

    render() {
        return (
            <div>
                <h1>Medcalculator 醫學公式</h1>
                <CCr/>
                <p>Reference:  1. Cockcroft-Gault Equation 2. MDRD quation</p>
                <ABG_Interpretation/>
                <p>Reference: The ICU book, 4th edition, Paul L. Marino</p>
                <TIMI/>
                <FENa/>
            </div>
        );
    }
}
