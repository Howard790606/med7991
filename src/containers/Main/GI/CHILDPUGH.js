import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CHILDPUGH extends Component {
        constructor(props) {
          super(props);
          this.state = { 
            Ascites: "none",
            TBIL: "none",
            Alb: "none",
            INR: "none",
            HE: "none",
            CPscore_a: 1,
            CPscore_b: 1,
            CPscore_c: 1,
            CPscore_d: 1,
            CPscore_e: 1,
            CPscore: '' 
         };
        }
        changeAscites = (e) => this.setState({Ascites: e.target.value});
        changeTBIL = (e) => this.setState({TBIL: e.target.value});
        changeAlb = (e) => this.setState({Alb: e.target.value});
        changeINR = (e) => this.setState({INR: e.target.value});
        changeHE = (e) => this.setState({HE: e.target.value});
        
        handleCPscore = () => {
            if(this.state.Ascites=="none"){
                this.setState({CPscore_a: 1})
            }
            else if(this.state.Ascites=="easily controlled"){
                this.setState({CPscore_a: 2})
            }else{
                this.setState({CPscore_a: 3})
            }
            if(this.state.TBIL=="none"){
                this.setState({CPscore_b: 1})
            }
            else if(this.state.TBIL=="easily controlled"){
                this.setState({CPscore_b: 2})
            }else{
                this.setState({CPscore_b: 3})
            }
            if(this.state.Alb=="none"){
                this.setState({CPscore_c: 1})
            }
            else if(this.state.Alb=="easily controlled"){
                this.setState({CPscore_c: 2})
            }else{
                this.setState({CPscore_c: 3})
            }
            if(this.state.INR=="none"){
                this.setState({CPscore_d: 1})
            }
            else if(this.state.INR=="easily controlled"){
                this.setState({CPscore_d: 2})
            }else{
                this.setState({CPscore_d: 3})
            }
            if(this.state.HE=="none"){
                this.setState({CPscore_e: 1})
            }
            else if(this.state.HE=="easily controlled"){
                this.setState({CPscore_e: 2})
            }else{
                this.setState({CPscore_e: 3})
            }
            this.setState({CPscore: this.state.CPscore_a + this.state.CPscore_b + this.state.CPscore_c + this.state.CPscore_d + this.state.CPscore_e})
        };

    render() {
        return (
            <div>
                <h2><font color="#1e6b33">Chigh-Pugh Score</font></h2>
                <a>Asites </a>
                <input type="radio" value="none" checked={this.state.Ascites==="none"} onChange={this.changeAscites} />none<a>&nbsp;</a>
                <input type="radio" value="easily controlled" checked={this.state.Ascites==="easily controlled"} onChange={this.changeAscites}/>easily controlled<a>&nbsp;</a>
                <input type="radio" value="refractory" checked={this.state.Ascites==="refractory"} onChange={this.changeAscites}/>refractory<a>&nbsp;</a>
                <br></br>
                <a>T-bil </a>
                <input type="radio" value="none" checked={this.state.TBIL==="none"} onChange={this.changeTBIL} />2mg/dl<a>&nbsp;</a>
                <input type="radio" value="easily controlled" checked={this.state.TBIL==="easily controlled"} onChange={this.changeTBIL}/>2-3mg/dl<a>&nbsp;</a>
                <input type="radio" value="refractory" checked={this.state.TBIL==="refractory"} onChange={this.changeTBIL}/>refractory<a>&nbsp;</a>
                <br></br>
                <a>Albumin </a>
                <input type="radio" value="none" checked={this.state.Alb==="none"} onChange={this.changeAlb} />3.5mg/dl<a>&nbsp;</a>
                <input type="radio" value="easily controlled" checked={this.state.Alb==="easily controlled"} onChange={this.changeAlb}/>2.8-3.5mg/dl<a>&nbsp;</a>
                <input type="radio" value="refractory" checked={this.state.Alb==="refractory"} onChange={this.changeAlb}/>2.8mg/dl<a>&nbsp;</a>
                <br></br>
                <a>PT INR </a>
                <input type="radio" value="none" checked={this.state.INR==="none"} onChange={this.changeINR} />1.7<a>&nbsp;</a>
                <input type="radio" value="easily controlled" checked={this.state.INR==="easily controlled"} onChange={this.changeINR}/>1.7-2.2<a>&nbsp;</a>
                <input type="radio" value="refractory" checked={this.state.INR==="refractory"} onChange={this.changeINR}/>2.2<a>&nbsp;</a>
                <br></br>
                <a>Hepatic encephalopathy </a>
                <input type="radio" value="none" checked={this.state.HE==="none"} onChange={this.changeHE} />nil<a>&nbsp;</a>
                <input type="radio" value="easily controlled" checked={this.state.HE==="easily controlled"} onChange={this.changeHE}/>Grade 1-2<a>&nbsp;</a>
                <input type="radio" value="refractory" checked={this.state.HE==="refractory"} onChange={this.changeHE}/>Grade 3-4<a>&nbsp;</a>
                <br></br>
                <button onClick={this.handleCPscore}><a>&nbsp;</a>calculate</button>
                <a>&nbsp;&nbsp;</a>
                <h3>Score: {this.state.CPscore}</h3>
                
            </div>
        );
    }
}
