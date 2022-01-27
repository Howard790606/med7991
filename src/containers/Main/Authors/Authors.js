import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Author from "./Author.jpg"

export default class Authors extends Component {
    render() {
        return (
            <div class="col-md-10 offset-md-1 col-sm-12">
                <img src={Author} width={500}></img>
                <p>
                    Howard Lu<br></br>
                    A medical doctor with his interest in technology especially in computer science, hoping to share tools for clinical use.<br></br>
                    <a>contact me: </a><a href="mailto:howard790606@gmail.com">howard790606@gmail.com</a>
                    <br></br>
                    <a>*The tool and knowledge shared in this website is for reference only.</a>
                </p>
                <p class="text-center"><b>Copyrights reserved by Howard & Sherry*, last update in 2022/01</b></p>
            </div>
        );
    }
}