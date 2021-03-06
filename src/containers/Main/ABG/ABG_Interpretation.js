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
            Cl: 90,
            Alb: 4,
            diagnosis: "",
            Anion_gap: "",
            Delta_gap: ""
         };
        }

    //pH: 7.36 - 7.44
    //PaCO2: 36 - 44 mmHg
    //HCO3: 22 - 26 mEq/L
    //Anion gap: 8 - 16 mEq/L

    handleABG = () => {
        var AG = this.state.Na - this.state.HCO3 - this.state.Cl
        var AG_expected = this.state.Alb * 2.5
        var deltaAG = Math.abs(AG-AG_expected)
        var deltaHCO3 = Math.abs(24-this.state.HCO3)

        if((AG-AG_expected) >= 2){
            this.setState(state => ({ 
                Anion_gap: AG + ", High anion gap (expected " + (this.state.Alb) * 2.5 + ")"
            }))
            if((AG-AG_expected)/(24-this.state.HCO3)>=1 && (AG -AG_expected)/(24-this.state.HCO3)<=2){
                this.setState(state => ({ 
                    Delta_gap: ((AG-AG_expected)/(24-this.state.HCO3)).toFixed(2)  + ", pure anion gap metabolic acidosis"
                    }))
            }else if((AG -AG_expected)/(24-this.state.HCO3)< 1){
                this.setState(state => ({ 
                    Delta_gap: ((AG-AG_expected)/(24-this.state.HCO3)).toFixed(2) + ", anion gap metabolic acidosis + simultaneous non-AG metabolic acidosis"
                }))
            }else{
                this.setState(state => ({ 
                    Delta_gap: ((AG-AG_expected)/(24-this.state.HCO3).toFixed(2)) + ", anion gap metabolic acidosis + simultaneous metabolic alkalosis"
                }))
            }
        }else if((this.state.Na - this.state.HCO3 - this.state.Cl -((this.state.Alb) * 2.5)) <= -2){
            this.setState(state => ({ 
                Anion_gap: this.state.Na - this.state.HCO3 - this.state.Cl + (4 - this.state.Alb) * 2.5 + ", Low anion gap (expected " + (this.state.Alb) * 2.5 + ")"
            }))
        }else{
            this.setState(state => ({ 
                Anion_gap: this.state.Na - this.state.HCO3 - this.state.Cl + (4 - this.state.Alb) * 2.5 + ", Normal anion gap (expected " + (this.state.Alb) * 2.5 + ")"
            }))
        }
        
        if(this.state.pH < 7.36){             //pH < 7.36
            if(this.state.PaCO2 >= 44){       //誤差值取2, 不包含端點
                if(((this.state.HCO3 - 24)-0.1*(this.state.PaCO2 - 40)) > -2 && ((this.state.HCO3 - 24)-0.1*(this.state.PaCO2 - 40))< 2){
                    this.setState(state => ({ 
                        diagnosis: "Primary respiratory acidosis with appropriate renal response(Compensated)"
                    }))
                }else if(((this.state.HCO3 - 24)-0.1*(this.state.PaCO2 - 40)) <= -2){
                    this.setState(state => ({ 
                        diagnosis: "Primary respiratory acidosis with secondary metalbolic acidosis"
                    }))
                }else if(((this.state.HCO3 - 24)-0.1*(this.state.PaCO2 - 40)) >= 2){
                    this.setState(state => ({ 
                        diagnosis: "Primary respiratory acidosis with secondary metalbolic alkalosis"
                    }))
                }
            }else if(this.state.PaCO2 < 44){
                if(this.state.HCO3 <= 22){
                    if(-2 < ((40 - this.state.PaCO2)-1.2*(24 - this.state.HCO3)) && ((40 - this.state.PaCO2)-1.2*(24 - this.state.HCO3) < 2)){
                    this.setState(state => ({ 
                        diagnosis: "Primary metabolic acidosis with appropriate pulmonary response"
                    }))
                }
                else if(((40 - this.state.PaCO2)-1.2*(24 - this.state.HCO3) >= 2)){
                    this.setState(state => ({ 
                        diagnosis: "Primary metabolic acidosis with secondary respiratory alkalosis"
                    }))
                }else if(((40 - this.state.PaCO2)-1.2*(24 - this.state.HCO3) <= -2)){
                    this.setState(state => ({ 
                        diagnosis: "Primary metabolic acidosis with secondary respiratory acidosis"
                    }))
                }
                }else if(this.state.HCO3 >= 22){
                    this.setState(state => ({ 
                        diagnosis: "Not likely"
                    }))
                }
            }
        //pH > 7.44
        }else if(this.state.pH > 7.44){          
            if(this.state.PaCO2 > 44){
                if(this.state.HCO3 > 26){       //primary metabolic alkalosis 誤差值取2, 不包含端點
                    if(((24 - this.state.HCO3)-(this.state.PaCO2 - 40)/0.7) > -2 && ((24 - this.state.HCO3)-(this.state.PaCO2 - 40)/0.7)< 2){
                        this.setState(state => ({ 
                            diagnosis: "Primary metabolic alkalosis with appropriate pulmonary response(Compensated)"
                     }))
                    }else if(((this.state.PaCO2 - 40)/0.7 - (24 - this.state.HCO3))<= -2){
                      this.setState(state => ({ 
                          diagnosis: "Primary metabolic alkalosis with secondary respiratory alkalosis"
                      }))
                    }else if(((this.state.PaCO2 - 40)/0.7 - (24 - this.state.HCO3)) >= 2){
                       this.setState(state => ({ 
                          diagnosis: "Primary metabolic alkalosis with secondary respiratory acidosis"
                      }))
                    }
                }else if(this.state.HCO3 <= 26){
                    this.setState(state => ({ 
                        diagnosis: "Not likely"
                    }))
                }
            }else if(this.state.PaCO2 < 36){
                //Acute primary respiratory alkalosis
                if(((this.state.HCO3 - 24)-0.2*(this.state.PaCO2 - 40)) > -2 && ((this.state.HCO3 - 24)-0.1*(this.state.PaCO2 - 40))< 2){
                    this.setState(state => ({ 
                        diagnosis: "Primary respiratory alkalosis with appropriate renal response(Acute Compensated)"
                    }))
                }else if((24 - this.state.HCO3)-(0.2*(40 - this.state.PaCO2)) <= -2){
                    this.setState(state => ({ 
                        diagnosis: "Primary respiratory alkalosis with secondary metalbolic alkalosis"
                    }))
                }else if(((24 - this.state.HCO3)-0.2*(40 - this.state.PaCO2)) >= 2){
                    this.setState(state => ({ 
                        diagnosis: "Primary respiratory alkalosis with secondary metalbolic acidosis"
                    }))
                }
            }else{
                this.setState(state => ({ 
                    diagnosis: "Not likely"
                }))
            }
        //7.36 < pH < 7.44
        }else if(7.36 <= this.state.pH && this.state.pH <= 7.44){                   
            if(this.state.PaCO2 > 44 && this.state.HCO3 >26){       //誤差值取2, 不包含端點
                    this.setState(state => ({ 
                        diagnosis: "Respiratory acidosis with metabolic alkalosis"
                    }))
            }else if(this.state.PaCO2 < 36 && this.state.HCO3 < 22){
                    this.setState(state => ({ 
                        diagnosis: "Metabolic acidosis with respiratory alkalosis"
                    }))
            }else if((this.state.HCO3 >=22 && this.state.HCO3<=26)&&((this.state.PaCO2>=36&&this.state.PaCO2<=44))){
                    this.setState(state => ({ 
                        diagnosis: "Normal"
                    }))
            }else{
                    this.setState(state => ({ 
                    diagnosis: "Not likely"
                    }))
            }
        }

    
    }
    handleChange_pH = (e) => this.setState({pH: e.target.value});
    handleChange_PaO2 = (e) => this.setState({PaO2: e.target.value});
    handleChange_PaCO2 = (e) => this.setState({PaCO2: e.target.value});
    handleChange_HCO3 = (e) => this.setState({HCO3: e.target.value});
    handleChange_Na = (e) => this.setState({Na: e.target.value});
    handleChange_Cl = (e) => this.setState({Cl: e.target.value});
    handleChange_Alb = (e) => this.setState({Alb: e.target.value});

    render() {
        return (
            <div>
                <h2><font color="#3B3BFF">ABG Interpretator</font></h2>
                <label> pH<input type="number" value={this.state.pH} onChange={this.handleChange_pH}/><a>&nbsp;</a></label>
                <label>  PaO2<input type="number" value={this.state.PaO2} onChange={this.handleChange_PaO2}/>mmHg<a>&nbsp;</a></label>
                <label>  PaCO2<input type="number" value={this.state.PaCO2} onChange={this.handleChange_PaCO2}/>mmHg<a>&nbsp;</a></label>
                <label>  HCO3<input type="number" value={this.state.HCO3} onChange={this.handleChange_HCO3}/>mEg/L<a>&nbsp;</a></label>
                <label>  Na<input type="number" value={this.state.Na} onChange={this.handleChange_Na}/>mEg/L<a>&nbsp;</a></label>
                <label>  Cl<input type="number" value={this.state.Cl} onChange={this.handleChange_Cl}/>mEg/L<a>&nbsp;</a></label>
                <label>  Alb<input type="number" value={this.state.Alb} onChange={this.handleChange_Alb}/>g/dL<a>&nbsp;</a></label>
                <span>
                    <button onClick={this.handleABG}>calculate</button>
                </span>
                <h3>Diagnosis: {this.state.diagnosis}</h3>
                <h4>Anion gap: {this.state.Anion_gap}</h4>
                <h4>Delta gap: {this.state.Delta_gap}</h4>
            </div>
        );
    }
}
