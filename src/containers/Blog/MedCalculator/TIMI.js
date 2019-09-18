import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CCr extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            ccr: 0,
            eGFR: 0,
            kgValue : 0,
            ageValue : 0,
            creValue : 0,
            score: 0,
            age: 1
         };
        }

    handleIncCCr = () => {
        if(this.state.gender=="male"){
            this.setState(state => ({ 
                ccr: ((140-this.state.ageValue)*this.state.kgValue/(72*this.state.creValue)).toFixed(2), 
                eGFR: (175*Math.pow(this.state.creValue,-1.154)*Math.pow(this.state.ageValue, -0.203)).toFixed(2)
            }))
        }
        else{
            this.setState(state => ({ 
                ccr: (0.85*(140-this.state.ageValue)*this.state.kgValue/(72*this.state.creValue)).toFixed(2), 
                eGFR: (0.742*175*Math.pow(this.state.creValue,-1.154)*Math.pow(this.state.ageValue, -0.203)).toFixed(2)
            }))
        }
        };
    //CCr: [[140 - age(yr)]*weight(kg)]/[72*serum Cr(mg/dL)] 
    //186 x (Creatinine/88.4)-1.154 x (Age)-0.203 

    handleChangeKg = (e) => this.setState({kgValue: e.target.value});
    handleChangeAge = (e) => this.setState({ageValue: e.target.value});
    handleChangeCre = (e) => this.setState({creValue: e.target.value});
    changeAge = (e) => this.setState({age: e.target.value});

    render() {
        return (
            <div>
                <h2>TIMI Score for UA/NSTEMI</h2>
                <input type="radio" value="age>=65" checked={this.state.age===">=65"} onChange={this.changeAge} />age>=65<span> </span>
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.changeAge}/>>=3 CAD risk factors<span> </span>
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.changeAge}/>known CAD(stenosis>=50%)<span> </span>
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.changeAge}/>ASA use in past 7 days<span> </span>
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.changeAge}/>Severe angina (≥2 episodes in 24 hrs)<span> </span>
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.changeAge}/>EKG ST changes ≥0.5mm<span> </span>
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.changeAge}/>Positive cardiac marker<span> </span>
               <span>
                    <button onClick={this.handleIncCCr}>calculate</button>
                </span>
                <h3>Score: {this.state.score}</h3>
            </div>
        );
    }
}
