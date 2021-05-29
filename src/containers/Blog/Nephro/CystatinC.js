import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CystatinC extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            eGFR: 0,
            ageValue : 0,
            Scys: 0,
            gender: "male"
         };
        }

    handleIncScys = () => {
        if(this.state.gender=="male"){
            if(this.state.Scys<=0.8){
                this.setState(state => ({ 
                    eGFR: (133*Math.pow(this.state.Scys/0.8,-0.499)*Math.pow(0.996,this.state.ageValue)).toFixed(2)
                }))
            }else{
                this.setState(state => ({ 
                    eGFR: (133*Math.pow(this.state.Scys/0.8,-1.328)*Math.pow(0.996,this.state.ageValue)).toFixed(2)
                }))
            }
        }
        else{
            if(this.state.Scys<=0.8){
                this.setState(state => ({ 
                    eGFR: (133*Math.pow(this.state.Scys/0.8,-0.499)*Math.pow(0.996,this.state.ageValue)*0.932).toFixed(2)
                }))
            }else{
                this.setState(state => ({ 
                    eGFR: (133*Math.pow(this.state.Scys/0.8,-1.328)*Math.pow(0.996,this.state.ageValue)*0.932).toFixed(2)
                }))
            }
        }
        };
    //eGFR: 133×(Scys/0.8)−0.499×0.996Age [×0.932 if female]  (Scys<=0.8)
    //eGFR: 133×(Scys/0.8)−1.328×0.996Age [×0.932 if female]  (Scys>0.8)

    handleChangeAge = (e) => this.setState({ageValue: e.target.value});
    handleChangeScys = (e) => this.setState({Scys: e.target.value});
    changeGender = (e) => this.setState({gender: e.target.value});

    render() {
        return (
            <div>
                <h3><font color="#EB9900">CKD-EPI CystatinC eGFR calculator</font></h3>
                <input type="radio" value="male" checked={this.state.gender==="male"} onChange={this.changeGender} />male
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.changeGender}/>female<a>&nbsp;</a>
                <label><a>&nbsp;</a>Age<input type="number" value={this.state.ageValue} onChange={this.handleChangeAge}/></label>
                <label><a>&nbsp;</a>Cystatin C<input type="number" value={this.state.Scys} onChange={this.handleChangeScys}/></label>
                <span>
                    <a>&nbsp;&nbsp;</a>
                    <button onClick={this.handleIncScys}><a>&nbsp;</a>calculate</button>
                </span>
                <h4>eGFR: {this.state.eGFR}mg/dl</h4>
            </div>
        );
    }
}
