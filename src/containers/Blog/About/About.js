import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About 關於我</h1>
                <p>
                This website is aimed to provide a platform for accessing clinical notes and medical formulas online. Visitors can browse through useful information for clinical use and add or revise the contents on the website supported by a backend system. Clinicians may find it practical for daily use!
                </p>
            </div>
        );
    }
}
