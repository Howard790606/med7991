import React, { Component } from "react";
import CCr from "./CCr";
import ABG_Interpretation from "./ABG_Interpretation";

export default class MedCalculator extends Component {

    render() {
        return (
            <div>
                <CCr/><br></br>
                <ABG_Interpretation/>
                <p>Reference: The ICU book, 4th edition, Paul L. Marino</p>
            </div>
        );
    }
}
