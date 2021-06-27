import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class IBW extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            Height: 170,
            Weight: 60,
            IBWeight : 0,
            gender: "male"
         };
        }

    handleIncIBW = () => {
        if(this.state.gender=="male"){
            this.setState(state => ({ 
                IBWeight: (62+(this.state.Height-170)*0.6).toFixed(2)
            }))
        }else{
            this.setState(state => ({ 
                IBWeight: (52+(this.state.Height-158)*0.5).toFixed(2)
            }))
        }
    };
  
    handleChangeHeight = (e) => this.setState({Height: e.target.value});
    handleChangeWeight = (e) => this.setState({Weight: e.target.value});
    changeGender = (e) => this.setState({gender: e.target.value});

    render() {
        return (
            <div>
                <h3><font color="#0000FF">Ideal Body Weight</font></h3>
                <input type="radio" value="male" checked={this.state.gender==="male"} onChange={this.changeGender} />male<a>&nbsp;</a>
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.changeGender}/>female<a>&nbsp;</a>
                <br></br>
                <label>Height<input type="number" value={this.state.Height} onChange={this.handleChangeHeight}/>cm<a>&nbsp;</a></label>
                <label>Weight<input type="number" value={this.state.Weight} onChange={this.handleChangeWeight}/>kg<a>&nbsp;</a></label>
                <span>
                    <button onClick={this.handleIncIBW}>calculate</button>
                </span>
                <h4>IBW: {(this.state.IBWeight)}kg</h4>
            </div>
        );
    }
}
