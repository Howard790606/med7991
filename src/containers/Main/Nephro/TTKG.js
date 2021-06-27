import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TTKG extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            SKValue: 4.0,
            UKValue: 6.0,
            SOsmValue : 280,
            UOsmValue : 300,
            TTKG : 0
         };
        }

    handleIncTTKG = () => {
            this.setState(state => ({ 
                TTKG: (this.state.UKValue/this.state.SKValue)/(this.state.UOsmValue/this.state.SOsmValue)
            }))
        };
  
    handleChangeSK = (e) => this.setState({SKValue: e.target.value});
    handleChangeUK = (e) => this.setState({UKValue: e.target.value});
    handleChangeSOsm = (e) => this.setState({SOsmValue: e.target.value});
    handleChangeUOsm = (e) => this.setState({UOsmValue: e.target.value});
   
    render() {
        return (
            <div>
                <h3><font color="#EB9900">TTKG calulator</font></h3>
                <label>Urine K<input type="number" value={this.state.UKValue} onChange={this.handleChangeUK}/>mmol/l<a>&nbsp;</a></label>
                <label>Serum K<input type="number" value={this.state.SKValue} onChange={this.handleChangeSK}/>mmol/l<a>&nbsp;</a></label>
                <label>Urine Osmolality<input type="number" value={this.state.UOsmValue} onChange={this.handleChangeUOsm}/>mOsm/KgH2O<a>&nbsp;</a></label>
                <label>Serum Osmolality<input type="number" value={this.state.SOsmValue} onChange={this.handleChangeSOsm}/>mOsm/KgH2O<a>&nbsp;</a></label>
                <span>
                    <button onClick={this.handleIncTTKG}>calculate</button>
                </span>
                <h4>TTKG: {this.state.TTKG}</h4>
            </div>
        );
    }
}
