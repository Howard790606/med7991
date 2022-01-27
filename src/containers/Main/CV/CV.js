import React, { Component } from "react";
import CHA2DS2VASC from "./CHA2DS2VASC";
import TIMI from "./TIMI"

export default class CV extends Component {

    render() {
        return (
            <div class="col-md-10 offset-md-1 col-sm-12">
                <TIMI/>
                <br></br>
                <CHA2DS2VASC/>
            </div>
        );
    }
}
