import React, { Component } from "react";
import CCr from "./CCr";
import CystatinC from "./CystatinC";
import FENa from "./FENa"
import FEUN from "./FEUN"
import TTKG from "./TTKG"

export default class Nephro extends Component {

    render() {
        return (
            <div>
                <CCr/>
                <p>Reference:  1. Cockcroft-Gault Equation 2. MDRD quation</p>
                <CystatinC/>
                <p>Reference:  N Engl J Med. 2012 Jul 5;367:20-9.</p>
                <FENa/>
                <FEUN/>
                <TTKG/>
            </div>
        );
    }
}
