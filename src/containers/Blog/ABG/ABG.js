import React, { Component } from "react";
import ABG_Interpretation from "./ABG_Interpretation";

export default class ABG extends Component {

    render() {
        return (
            <div>
                <ABG_Interpretation/>
                <p>Reference: The ICU book, 4th edition, Paul L. Marino</p>
            </div>
        );
    }
}
