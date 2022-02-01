import React, { Component } from "react";
import Steroids from "./Steroids.png"

export default class Steroid extends Component {
    render() {
        return (
            <div class="col-md-10 offset-md-1 col-sm-12">
                <br></br>
                <h2>
                    Steroid dosage equivalent<br></br>
                </h2>
                <img src={Steroids} width={500}></img>
            </div>
        );
    }
}
