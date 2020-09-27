import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Mnemonics from "./Mnemonics/Mnemonics";
import MnemonicRender from "./Mnemonics/MnemonicRender";
import Authors from "./Authors/Authors";
import CV from "./CV/CV";
import Nephro from "./Nephro/Nephro";
import ICU from "./ICU/ICU";
import ABG from "./ABG/ABG";
import Transformer from "./Transformer/Transformer";
import Culture from "./Culture/Culture";

export default class Blog extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                    <a className="navbar-brand">Med7991</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="#"><NavLink to='/authors'>Authors</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to="/CV">CV</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to="/Nephro">Nephro</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to="/ICU">ICU</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to="/ABG">ABG</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to='/mnemonics'>Mnemonics</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to="/transformer">Transformer</NavLink></a>
                            {/* <a class="nav-item nav-link" href="#"><NavLink to="/culture">Culture</NavLink></a> */}
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/Mnemonics' component={Mnemonics} />
                    <Route path="/mnemonics/:id?" component={MnemonicRender} />
                    <Route path='/authors' component={Authors} />
                    <Route path="/CV" component={CV} />
                    <Route path="/Nephro" component={Nephro} />
                    <Route path="/ICU" component={ICU} />
                    <Route path="/ABG" component={ABG} />
                    <Route path="/transformer" component={Transformer} />
                    <Route path="/culture" component={Culture} />
                    <Route path="/" component={CV} />
                    <Redirect from="/CV" to="/" />
                </Switch>
            </div>
        );
    }
}
