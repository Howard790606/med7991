import React, { Component } from "react";
import Mnemonic from "../../../components/Post/Mnemonic";

export default class MnemonicRender extends Component {
    render() {
        const mnemonicIDs = ["Acute decompensated heart failure", "High anion gap metabolic acidosis"];
        const { id } = this.props.match.params;
        return id && mnemonicIDs.includes(id) ? (
            <Mnemonic id={id} />
        ) : (
            <div>
                <h3>Error: Mnemonic #{id} NOT FOUND</h3>
            </div>
        );
    }
}
