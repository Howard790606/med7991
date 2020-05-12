import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Culture extends Component {
    constructor(props) {
        super(props);
        this.state = {
        value: 'Please paste the original laboratory data forms from your hospital web page and the lab data will be organized in the following table',
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
        const B2 = Lab.search(/B2\-/);
        const bloodcx = /ID\+DS Blood\.\#1\(\*\)/g;
        const bloodcx2 = /ID\+DS Blood\.\#1\(\)/g;

        let myArray;
        let myArray2;
        while ((myArray = bloodcx.exec(Lab)) !== null && (myArray2 = bloodcx2.exec(Lab)) !== null) {
        let msg = Lab.slice(bloodcx.lastIndex-35,bloodcx.lastIndex-25) + ' B/C ' + Lab.slice(bloodcx.lastIndex+1,bloodcx2.lastIndex-16);
        this.setState(({value_transform}) => ({value_transform:
            value_transform
            .concat(msg)
        }));
        }
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
            Culture selected<br></br>
            <textarea value={this.state.value_transform} rows={8} cols={50}/>
            </label>
        </form>
        );
    }
}
