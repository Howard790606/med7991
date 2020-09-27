import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class FENa extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            SNaValue: 140,
            UNaValue: 150,
            SCreValue : 0.8,
            UCreValue : 120,
            FENa : 0
         };
        }

    handleIncFENa = () => {
            this.setState(state => ({ 
                FENa: (((this.state.UNaValue/this.state.SNaValue)/(this.state.UCreValue/this.state.SCreValue)).toFixed(2))
            }))
        };
  
    handleChangeSNa = (e) => this.setState({SNaValue: e.target.value});
    handleChangeUNa = (e) => this.setState({UNaValue: e.target.value});
    handleChangeSCre = (e) => this.setState({SCreValue: e.target.value});
    handleChangeUCre = (e) => this.setState({UCreValue: e.target.value});
   
    render() {
        return (
            <div>
                <h3><font color="#EB9900">FENa calulator</font></h3>
                <label>Serum Na<input type="number" value={this.state.SNaValue} onChange={this.handleChangeSNa}/>mmol/l<a>&nbsp;</a></label>
                <label>Urine Na<input type="number" value={this.state.UNaValue} onChange={this.handleChangeUNa}/>mmol/l<a>&nbsp;</a></label>
                <label>Serum Cre<input type="number" value={this.state.SCreValue} onChange={this.handleChangeSCre}/>mg/dl<a>&nbsp;</a></label>
                <label>Urine Cre<input type="number" value={this.state.UCreValue} onChange={this.handleChangeUCre}/>mg/dl<a>&nbsp;</a></label>
                <span>
                    <button onClick={this.handleIncFENa}>calculate</button>
                </span>
                <h4>FENa: {100*(this.state.FENa)}%</h4>
            </div>
        );
    }
}
