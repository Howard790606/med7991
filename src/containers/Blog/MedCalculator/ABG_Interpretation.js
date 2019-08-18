import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ABG_Interpretation extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            pH : 7.3,
            PaO2 : 90,
            PaCO2 : 60,
            HCO3: 32,
            Na: 132,
            diagnosis: ""
         };
        }

    //pH: 7.36 - 7.44
    //PaCO2: 36 - 44 mmHg
    //HCO3: 22 - 26 mEq/L

    handleABG = () => {
        if(this.state.pH < 7.36){
            if(this.state.PaCO2 > 44){
                if((1.2 * (24 - this.state.HCO3) - (this.state.PaCO2 - 40)) >= -2 && (1.2 * (24 - this.state.HCO3) - (this.state.PaCO2 - 40)) <= 2){
                    this.setState(state => ({ 
                        diagnosis: "Primary respiratory acidosis with appropriate renal response"
                    }))
                }else{
                    this.setState(state => ({ 
                        diagnosis: "Primary respiratory acidosis with secondary metalbolic alkalosis"
                    }))
                }
            }
            else if(this.state.PaCO2 < 36 && this.state.HCO3 < 22){
                if(-2 < ((40 - this.state.PaCO2)-1.2*(24 - this.state.HCO3)) && ((40 - this.state.PaCO2)-1.2*(24 - this.state.HCO3) < 2)){
                    this.setState(state => ({ 
                        diagnosis: "Primary metabolic acidosis with appropriate pulmonary response"
                    }))
                }
                else if(((40 - this.state.PaCO2)-1.2*(24 - this.state.HCO3) >= 2)){
                    this.setState(state => ({ 
                        diagnosis: "Primary metabolic acidosis with secondary respiratory alkalosis"
                    }))
                }
            }
        }
        else if(this.state.pH > 7.44){
            if(this.state.PaCO2 > 44){
                this.setState(state => ({ 
                    diagnosis: "Primary metabolic alkalosis"
                }))
            }
            else if(this.state.PaCO2 < 36){
                this.setState(state => ({ 
                    diagnosis: "Primary respiratory alkalosis"
                }))
            }
        }
    }
    handleChange_pH = (e) => this.setState({pH: e.target.value});
    handleChange_PaO2 = (e) => this.setState({PaO2: e.target.value});
    handleChange_PaCO2 = (e) => this.setState({PaCO2: e.target.value});
    handleChange_HCO3 = (e) => this.setState({HCO3: e.target.value});
    handleChange_Na = (e) => this.setState({Na: e.target.value});
  

    render() {
        return (
            <div>
                <h2>ABG Interpretator (Pending)</h2>
                <label> pH<input type="number" value={this.state.pH} onChange={this.handleChange_pH}/></label>
                <label>  PaO2<input type="number" value={this.state.PaO2} onChange={this.handleChange_PaO2}/>mmHg</label>
                <label>  PaCO2<input type="number" value={this.state.PaCO2} onChange={this.handleChange_PaCO2}/>mmHg</label>
                <label>  HCO3<input type="number" value={this.state.HCO3} onChange={this.handleChange_HCO3}/>mEg/L</label>
                <label>  Na<input type="number" value={this.state.Na} onChange={this.handleChange_Na}/>mEg/L</label>
                <span>
                    <button onClick={this.handleABG}>calculate</button>
                </span>
                <h3>Diagnosis: {this.state.diagnosis}</h3>
            </div>
        );
    }
}
