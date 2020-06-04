import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Culture extends Component {
    constructor(props) {
        super(props);
        this.state = {
        value: 'Please paste the original culture data forms from your hospital web page. The culture data will be organized in the following table',
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
        let Lab = this.state.value;
        let BxPB = Lab.search("BLOOD Peripheral");
        let BxCVC = Lab.search("BLOOD CVP");
        let BxDLC = Lab.search("BLOOD Double lumen");
        let bloodcx = /ID\+DS Blood\.\#1\(\*\)/g;

        let bxArray;
        while ((bxArray = bloodcx.exec(Lab)) !== null) {
        let msg;
        if(bloodcx.lastIndex < BxCVC){
            msg = Lab.slice(bloodcx.lastIndex-35,bloodcx.lastIndex-25) 
            + ' B/C(PB): ' + Lab.slice(bloodcx.lastIndex+1,bloodcx.lastIndex+25);
        }else if(bloodcx.lastIndex > BxCVC && bloodcx.lastIndex < BxDLC){
            msg = Lab.slice(bloodcx.lastIndex-35,bloodcx.lastIndex-25) 
            + ' B/C(CVC): ' + Lab.slice(bloodcx.lastIndex+1,bloodcx.lastIndex+25);
        }else if(bloodcx.lastIndex > BxDLC){
            msg = Lab.slice(bloodcx.lastIndex-35,bloodcx.lastIndex-25) 
            + ' B/C(DLC): ' + Lab.slice(bloodcx.lastIndex+1,bloodcx.lastIndex+25);
        }
        let enter = msg.search("\n");
        msg = msg.slice(0,enter);
        this.setState(({value_transform}) => ({value_transform:
            value_transform
            .concat(msg)
            .concat("\n")
        }));
        }

        let urinecx = /ID\+DS Urine \#1\(\/ml\)/g;

        let uxArray;
        while ((uxArray = urinecx.exec(Lab)) !== null) {
        let msg = Lab.slice(urinecx.lastIndex-37,urinecx.lastIndex-27) + ' U/C: ' + Lab.slice(urinecx.lastIndex+1,urinecx.lastIndex+25);
        let enter = msg.search("\n");
        msg = msg.slice(0,enter);
        this.setState(({value_transform}) => ({value_transform:
            value_transform
            .concat(msg)
            .concat("\n")
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
            Culture selected (Still testing...)<br></br>
            <textarea value={this.state.value_transform} rows={8} cols={50}/>
            </label>
        </form>
        );
    }
}
