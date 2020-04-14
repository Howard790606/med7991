import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Transformer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        value: 'Please paste the original laboratory data forms form your hospital web page and the lab data will be organized in the following table',
        value_transform: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleOnfocus(event) {
        this.setState({value: ''});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        const Lab = this.state.value;
        const Hb_find = Lab.search("HB");
        const WBC_find = Lab.search("WBC");
        const Seg_find = Lab.search("Seg");
        const Band_find = Lab.search("Band");
        const Plt_find = Lab.search("PLT");
        const Tbil_find = Lab.search("T-BIL");
        const Dbil_find = Lab.search("D-BIL");
        const AST_find = Lab.search("AST");
        const ALT_find = Lab.search("ALT");
        const LDH_find = Lab.search("LDH");
        const BUN_find = Lab.search("BUN");
        const Cre_find = Lab.search("CRE");
        const Na_find = Lab.search("Na");
        const K_find = Lab.search("K");
        const Ca_find = Lab.search("Ca");
        const PT_find = Lab.search("PT");
        const PTINR_find = Lab.search("PT INR");
        const aPTT_find = Lab.search("aPTT");
        this.setState({value_transform: ''.concat((this.state.value).slice(Hb_find,Hb_find+13))
            .concat(', ').concat((this.state.value).slice(WBC_find,WBC_find+14))
            .concat(', ').concat((this.state.value).slice(Seg_find,Seg_find+11))
            .concat(', ').concat((this.state.value).slice(Band_find,Band_find+11))
            .concat(', ').concat((this.state.value).slice(Plt_find,Plt_find+13))
            .concat(', ').concat((this.state.value).slice(Tbil_find,Tbil_find+17))
            .concat(', ').concat((this.state.value).slice(Dbil_find,Dbil_find+13))
            .concat(', ').concat((this.state.value).slice(AST_find,AST_find+11))
            .concat(', ').concat((this.state.value).slice(ALT_find,ALT_find+11))
            .concat(', ').concat((this.state.value).slice(LDH_find,LDH_find+12))
            .concat(', ').concat((this.state.value).slice(BUN_find,BUN_find+15))
            .concat(', ').concat((this.state.value).slice(Cre_find,Cre_find+14))
            .concat(', ').concat((this.state.value).slice(Na_find,Na_find+14))
            .concat(', ').concat((this.state.value).slice(K_find,K_find+14))
            .concat(', ').concat((this.state.value).slice(Ca_find,Ca_find+15))
            .concat(', ').concat((this.state.value).slice(PT_find,PT_find+12))
            .concat(', ').concat((this.state.value).slice(PTINR_find,PTINR_find+10))
            .concat(', ').concat((this.state.value).slice(aPTT_find,aPTT_find+14))
        });
        event.preventDefault();
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <br></br>
            <label>
            Lab<br></br>
            <textarea value={this.state.value} rows={8} cols={50} onFocus={this.handleOnfocus.bind(this)} onChange={this.handleChange} />
            </label>
            <br></br>
            <input type="submit" value="Transform" />
            <br></br>
            <label>
            <br></br>
            Lab selected<br></br>
            <textarea value={this.state.value_transform} rows={8} cols={50}/>
            </label>
        </form>
        );
    }
}
