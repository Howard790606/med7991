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
            gender: "male"
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
    changeGender = (e) => this.setState({gender: e.target.value});

    render() {
        return (
            <div>
                <h3><font color="#EB9900">CCr calulator </font></h3>
                <input type="radio" value="male" checked={this.state.gender==="male"} onChange={this.changeGender} />male
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.changeGender}/>female<a>&nbsp;</a>
                <label>Kg<input type="number" value={this.state.kgValue} onChange={this.handleChangeKg}/></label>
                <label><a>&nbsp;</a>Age<input type="number" value={this.state.ageValue} onChange={this.handleChangeAge}/></label>
                <label><a>&nbsp;</a>Cre<input type="number" value={this.state.creValue} onChange={this.handleChangeCre}/></label>
                <span>
                    <a>&nbsp;&nbsp;</a>
                    <button onClick={this.handleIncCCr}><a>&nbsp;</a>calculate</button>
                </span>
                <h4>CCr: {this.state.ccr}mg/dl</h4>
                <h4>eGFR: {this.state.eGFR}mg/dl</h4>
            </div>
        );
    }
}
