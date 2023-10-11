import React, { Component } from "react";
import Author from "./Author.jpg"

export default class Authors extends Component {
    render() {
        return (
            <div class="col-md-10 offset-md-1 col-sm-12">
                <div style={{float: "left", padding: "0px 20px 0px 0px"}}>
                    <img src={Author} width={350}></img>
                </div>
                <div style={{padding: "120px 20px 0px 0px"}}>   
                    Chien-Hung Lu<br></br>
                    A medical doctor with interests in computational methods and quantitative analysis in biomedicine.<br></br>
                    A clinical fellow in Gastroenterology and Hepatology.<br></br>
                    <a>contact me: </a><a href="mailto:howard790606@gmail.com">howard790606@gmail.com</a>
                    <br></br>
                    <a>*The tools and knowledge shared in this website is for reference only. Last update in 2023/10.</a>
                </div> 
            </div>
        );
    }
}