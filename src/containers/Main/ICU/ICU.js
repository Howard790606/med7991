import React, { Component } from "react";
import Dopa from "./Dopa";
import IBW from "./IBW";

export default class ICU extends Component {

    render() {
        return (
            <div class="col-md-10 offset-md-1 col-sm-12">
            <Dopa/>
            <br></br>
            <IBW/>
            </div>
        );
    }
}
