import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CCr extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            time: 0,
            TIMIscore: 0
         };
        }

    changeTIMI = () => {
            const key2 = this.state.TIMIscore
                this.setState(state => ({ 
                    TIMIscore: key2+1
              }))
        }; 

    render() {
        return (
            <div>
                <h2>TIMI Score for UA/NSTEMI</h2>
                <input type="checkbox" value="age" onChange={this.changeTIMI} /> age>=65<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="Risk" onChange={this.changeTIMI}/> >=3 CAD risk factors<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="knownCAD" onChange={this.changeTIMI}/> known CAD(stenosis>=50%)<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="ASA" onChange={this.changeTIMI}/> ASA use in past 7 days<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="ServereAngina" onChange={this.changeTIMI}/> Severe angina (≥2 episodes in 24 hrs)<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="EKGST" onChange={this.changeTIMI}/> EKG ST changes ≥0.5mm<a>&nbsp;&nbsp;</a>
                <input type="checkbox" value="PosCard" onChange={this.changeTIMI}/> Positive cardiac marker<a>&nbsp;&nbsp;</a>
                <h3>Score: {this.state.TIMIscore}</h3>
            </div>
        );
    }
}
