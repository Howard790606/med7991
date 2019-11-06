import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class FENa extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            SNaValue: 0,
            UNaValue: 0,
            SCreValue : 0,
            UCreValue : 0,
            FENa : 0
         };
        }

    handleIncFENa = () => {
            this.setState(state => ({ 
                FENa: ((this.state.UNaValue/this.state.SNaValue)/(this.state.UCreValue/this.state.SCreValue)).toFixed(2)
            }))
        };
  
    handleChangeSNa = (e) => this.setState({SNaValue: e.target.value});
    handleChangeUNa = (e) => this.setState({UNaValue: e.target.value});
    handleChangeSCre = (e) => this.setState({SCreValue: e.target.value});
    handleChangeUCre = (e) => this.setState({UCreValue: e.target.value});
   
    render() {
        return (
            <div>
                <h2>FENa calulator </h2>
                <label>Serum Na<input type="number" value={this.state.SNaValue} onChange={this.handleChangeSNa}/></label>
                <label> Urine Na<input type="number" value={this.state.UNaValue} onChange={this.handleChangeUNa}/></label>
                <label> Serum Cre<input type="number" value={this.state.SCreValue} onChange={this.handleChangeSCre}/></label>
                <label> Urine Cre<input type="number" value={this.state.UCreValue} onChange={this.handleChangeUCre}/></label>
                <span>
                    <button onClick={this.handleIncFENa}>calculate</button>
                </span>
                <h3>FENa {(this.state.FENa)*100} %</h3>
            </div>
        );
    }
}
