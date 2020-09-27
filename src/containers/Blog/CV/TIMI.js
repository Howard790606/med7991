import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CCr extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            TIMIscore: 0,
            TIMI_age: 0,
            TIMI_Risk: 0,
            TIMI_knownCAD: 0,
            TIMI_ASA: 0,
            TIMI_ServereAngina: 0,
            TIMI_EKGST: 0,
            TIMI_PosCard: 0
         };
        }
        changeTIMI_age = () => {
            this.setState({TIMI_age: this.state.TIMI_age+1})
            if (this.state.TIMI_age % 2 == 0){
                this.setState({TIMIscore: this.state.TIMIscore+1})
            }
            else{
                this.setState({TIMIscore: this.state.TIMIscore-1})
            }
        }; 
        changeTIMI_Risk = () => {
            this.setState({TIMI_Risk: this.state.TIMI_Risk+1})
            if (this.state.TIMI_Risk % 2 == 0){
                this.setState({TIMIscore: this.state.TIMIscore+1})
            }
            else{
                this.setState({TIMIscore: this.state.TIMIscore-1})
            }
        }; 
        changeTIMI_knownCAD = () => {
            this.setState({TIMI_knownCAD: this.state.TIMI_knownCAD+1})
            if (this.state.TIMI_knownCAD % 2 == 0){
                this.setState({TIMIscore: this.state.TIMIscore+1})
            }
            else{
                this.setState({TIMIscore: this.state.TIMIscore-1})
            }
        };
        changeTIMI_ASA = () => {
            this.setState({TIMI_ASA: this.state.TIMI_ASA+1})
            if (this.state.TIMI_ASA % 2 == 0){
                this.setState({TIMIscore: this.state.TIMIscore+1})
            }
            else{
                this.setState({TIMIscore: this.state.TIMIscore-1})
            }
        };
        changeTIMI_SevereAngina = () => {
            this.setState({TIMI_ServereAngina: this.state.TIMI_ServereAngina+1})
            if (this.state.TIMI_ServereAngina % 2 == 0){
                this.setState({TIMIscore: this.state.TIMIscore+1})
            }
            else{
                this.setState({TIMIscore: this.state.TIMIscore-1})
            }
        };
        changeTIMI_EKGST = () => {
            this.setState({TIMI_EKGST: this.state.TIMI_EKGST+1})
            if (this.state.TIMI_EKGST % 2 == 0){
                this.setState({TIMIscore: this.state.TIMIscore+1})
            }
            else{
                this.setState({TIMIscore: this.state.TIMIscore-1})
            }
        };
        changeTIMI_PosCard= () => {
            this.setState({TIMI_PosCard: this.state.TIMI_PosCard+1})
            if (this.state.TIMI_PosCard % 2 == 0){
                this.setState({TIMIscore: this.state.TIMIscore+1})
            }
            else{
                this.setState({TIMIscore: this.state.TIMIscore-1})
            }
        };

    render() {
        return (
            <div>
                <h2><font color="#FF5959">TIMI Score for UA/NSTEMI</font></h2>
                <input type="checkbox" value="age" onChange={this.changeTIMI_age} /> age>=65<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="Risk" onChange={this.changeTIMI_Risk}/> >=3 CAD risk factors<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="knownCAD" onChange={this.changeTIMI_knownCAD}/> known CAD(stenosis>=50%)<a>&nbsp;&nbsp;</a>
                <br></br>
                <input type="checkbox" value="ASA" onChange={this.changeTIMI_ASA}/> ASA use in past 7 days<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="ServereAngina" onChange={this.changeTIMI_SevereAngina}/> Severe angina (≥2 episodes in 24 hrs)<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="EKGST" onChange={this.changeTIMI_EKGST}/> EKG ST changes ≥0.5mm<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="PosCard" onChange={this.changeTIMI_PosCard}/> Positive cardiac marker<a>&nbsp;&nbsp;</a>
                <h3>Score: {this.state.TIMIscore}</h3>
            </div>
        );
    }
}
