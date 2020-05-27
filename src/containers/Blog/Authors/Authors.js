import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Authors extends Component {
    render() {
        return (
            <div>
                <img src="./Author.jpg"></img>
                <p>
                    Howard Lu<br></br>
                    A doctor with his interest in technology especially in computer science, hoping that he can leverage it to clinical use.
                </p>
                <a>contact me: </a><a >howard790606@gmail.com</a>
            </div>
        );
    }
}
