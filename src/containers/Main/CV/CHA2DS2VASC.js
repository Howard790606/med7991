import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CHA2DS2VASC extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            AFscore: 0,
            CHF: 0,
            Age: 0,
            DM: 0,
            Stroke: 0,
            Vascular: 0,
            Age2: 0,
            Sex: 0
         };
        }
        changeCHF = () => {
            this.setState({CHF: this.state.CHF+1})
            if (this.state.CHF % 2 == 0){
                this.setState({AFscore: this.state.AFscore+1})
            }
            else{
                this.setState({AFscore: this.state.AFscore-1})
            }
        }; 
        changeAge = () => {
            this.setState({Age: this.state.Age+1})
            if (this.state.Age % 2 == 0){
                this.setState({AFscore: this.state.AFscore+2})
            }
            else{
                this.setState({AFscore: this.state.AFscore-2})
            }
        }; 
        changeDM = () => {
            this.setState({DM: this.state.DM+1})
            if (this.state.DM % 2 == 0){
                this.setState({AFscore: this.state.AFscore+1})
            }
            else{
                this.setState({AFscore: this.state.AFscore-1})
            }
        };
        changeStroke = () => {
            this.setState({Stroke: this.state.Stroke+1})
            if (this.state.Stroke % 2 == 0){
                this.setState({AFscore: this.state.AFscore+1})
            }
            else{
                this.setState({AFscore: this.state.AFscore-1})
            }
        };
        changeVascular = () => {
            this.setState({Vascular: this.state.Vascular+1})
            if (this.state.Vascular % 2 == 0){
                this.setState({AFscore: this.state.AFscore+1})
            }
            else{
                this.setState({AFscore: this.state.AFscore-1})
            }
        };
        changeAge2 = () => {
            this.setState({Age2: this.state.Age2+1})
            if (this.state.Age2 % 2 == 0){
                this.setState({AFscore: this.state.AFscore+1})
            }
            else{
                this.setState({AFscore: this.state.AFscore-1})
            }
        };
        changeSex= () => {
            this.setState({Sex: this.state.Sex+1})
            if (this.state.Sex % 2 == 0){
                this.setState({AFscore: this.state.AFscore+1})
            }
            else{
                this.setState({AFscore: this.state.AFscore-1})
            }
        };

    render() {
        return (
            <div>
                <h2><font color="#FF5959">CHA<sub>2</sub>DS<sub>2</sub>VASC Score for Atrial fibrillation</font></h2>
                <input type="checkbox" value="age" onChange={this.changeCHF} /> Congestive heart failure<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="Risk" onChange={this.changeAge}/> Age>=75 yr (+2)<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="knownCAD" onChange={this.changeDM}/> Diabetes mellitus<a>&nbsp;&nbsp;</a>
                <br></br>
                <input type="checkbox" value="ASA" onChange={this.changeStroke}/> Stroke/TIA<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="ServereAngina" onChange={this.changeVascular}/> Vascualr disease(MI, PAD, Ao plaque)<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="EKGST" onChange={this.changeAge2}/> Age 65~74 yr (+1)<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="PosCard" onChange={this.changeSex}/> Sex (female)<a>&nbsp;&nbsp;</a>
                <h3>Score: {this.state.AFscore}</h3>
            </div>
        );
    }
}
