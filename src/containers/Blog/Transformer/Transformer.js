import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Transformer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        value: 'Please paste the lab data.',
        value_transform: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        const Hb = this.state.value;
        const Hb_find = Hb.search("HB");
        const WBC = this.state.value;
        const WBC_find = WBC.search("WBC");
        const Seg = this.state.value;
        const Seg_find = Seg.search("Seg");
        const Band = this.state.value;
        const Band_find = Band.search("Band");
        const Plt = this.state.value;
        const Plt_find = Plt.search("PLT");
        const Tbil = this.state.value;
        const Tbil_find = Plt.search("T-bil");
        const AST = this.state.value;
        const AST_find = Plt.search("AST");
        const ALT = this.state.value;
        const ALT_find = Plt.search("ALT");
        const BUN = this.state.value;
        const BUN_find = Plt.search("BUN");
        const Cre = this.state.value;
        const Cre_find = Plt.search("CRE");
        this.setState({value_transform: this.state.value_transform.concat((this.state.value).slice(Hb_find,Hb_find+13))
            .concat(', ').concat((this.state.value).slice(WBC_find,WBC_find+13))
            .concat(', ').concat((this.state.value).slice(Seg_find,Seg_find+11))
            .concat(', ').concat((this.state.value).slice(Band_find,Band_find+11))
            .concat(', ').concat((this.state.value).slice(Plt_find,Plt_find+13))
            .concat('\n').concat((this.state.value).slice(Tbil_find,Tbil_find+13))
            .concat(', ').concat((this.state.value).slice(AST_find,AST_find+11))
            .concat(', ').concat((this.state.value).slice(ALT_find,ALT_find+11))
            .concat(', ').concat((this.state.value).slice(BUN_find,BUN_find+12))
            .concat(', ').concat((this.state.value).slice(Cre_find,Cre_find+14))
        });
        event.preventDefault();
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <br></br>
            <label>
            Lab<br></br>
            <textarea value={this.state.value} rows={8} cols={50} onChange={this.handleChange} />
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
