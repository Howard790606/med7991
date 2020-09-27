import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Dopa extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            Solute: 400,
            Solvent: 250,
            Weight: 60,
            Rate_ml : 10,
            Rate_kg : 15
         };
        }

    handleIncDopa = () => {
            this.setState(state => ({ 
                Rate_kg: ((50*this.state.Solute*this.state.Rate_ml)/(3*this.state.Solvent*this.state.Weight)).toFixed(2)
            }))
        };
  
    handleChangeSolute = (e) => this.setState({Solute: e.target.value});
    handleChangeSolvent = (e) => this.setState({Solvent: e.target.value});
    handleChangeWeight = (e) => this.setState({Weight: e.target.value});
    handleChangeRate_ml = (e) => this.setState({Rate_ml: e.target.value});
    handleChangeRate_kg = (e) => this.setState({Rate_kg: e.target.value});
   
    render() {
        return (
            <div>
                <h3><font color="#0000FF">Dopamine infusion rate</font></h3>
                <label>Dopamine<input type="number" value={this.state.Solute} onChange={this.handleChangeSolute}/>mg<a>&nbsp;</a></label>
                <label>N/S<input type="number" value={this.state.Solvent} onChange={this.handleChangeSolvent}/>ml<a>&nbsp;</a></label>
                <label>Weight<input type="number" value={this.state.Weight} onChange={this.handleChangeWeight}/>kg<a>&nbsp;</a></label>
                <br></br>
                <label>Run<input type="number" value={this.state.Rate_ml} onChange={this.handleChangeRate_ml}/>ml/hr<a>&nbsp;</a></label>
                <br></br>
                <span>
                    <button onClick={this.handleIncDopa}>calculate</button>
                </span>
                <h4>Equal to {(this.state.Rate_kg)}mcg/kg/min</h4>
            </div>
        );
    }
}
