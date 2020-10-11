import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class FEUN extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            SUNValue: 140,
            UUNValue: 150,
            SCreValue : 0.8,
            UCreValue : 120,
            FEUN : 0
         };
        }

    handleIncFEUN = () => {
            this.setState(state => ({ 
                FEUN: (this.state.UUNValue/this.state.SUNValue)/(this.state.UCreValue/this.state.SCreValue)
            }))
        };
  
    handleChangeSUN = (e) => this.setState({SUNValue: e.target.value});
    handleChangeUUN = (e) => this.setState({UUNValue: e.target.value});
    handleChangeSCre = (e) => this.setState({SCreValue: e.target.value});
    handleChangeUCre = (e) => this.setState({UCreValue: e.target.value});
   
    render() {
        return (
            <div>
                <h3><font color="#EB9900">FEUN calulator</font></h3>
                <label>Serum UN<input type="number" value={this.state.SUNValue} onChange={this.handleChangeSUN}/>mg/dl<a>&nbsp;</a></label>
                <label>Urine UN<input type="number" value={this.state.UUNValue} onChange={this.handleChangeUUN}/>mg/dl<a>&nbsp;</a></label>
                <label>Serum Cre<input type="number" value={this.state.SCreValue} onChange={this.handleChangeSCre}/>mg/dl<a>&nbsp;</a></label>
                <label>Urine Cre<input type="number" value={this.state.UCreValue} onChange={this.handleChangeUCre}/>mg/dl<a>&nbsp;</a></label>
                <span>
                    <button onClick={this.handleIncFEUN}>calculate</button>
                </span>
                <h4>FEUN: {100*(this.state.FEUN)}%</h4>
            </div>
        );
    }
}
