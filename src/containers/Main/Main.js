import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';

import Mnemonics from "./Mnemonics/Mnemonics";
import MnemonicRender from "./Mnemonics/MnemonicRender";
import Authors from "./Authors/Authors";
import Blog from "./Blog/Blog";
import CV from "./CV/CV";
import GI from "./GI/GI";
import Nephro from "./Nephro/Nephro";
import ICU from "./ICU/ICU";
import ABG from "./ABG/ABG";
import CCr1 from "./Nephro/CCr1";
import CystatinC1 from "./Nephro/CystatinC1";
import FENa1 from "./Nephro/FENa1";
import FEUN1 from "./Nephro/FEUN1";
import TTKG1 from "./Nephro/TTKG1";

export default class Main extends Component {
    render() {
        return (
            <div>                
                <Navbar collapseOnSelect bg="light" expand="lg">
                    <Navbar.Brand href="#home" className="offset-md-1">Med7991</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#authors">Authors</Nav.Link>
                        <Nav.Link href="#Blog">Blog</Nav.Link>
                        <Nav.Link href="#CV">CV</Nav.Link>
                        <Nav.Link href="#GI">GI</Nav.Link>
                        <NavDropdown title="Nephro" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#CCr1">CCr Calcultor</NavDropdown.Item>
                        <NavDropdown.Item href="#CystatinC1">CKD-EPI CystatinC eGFR calculator</NavDropdown.Item>
                        <NavDropdown.Item href="#FENa1">FENa calculator</NavDropdown.Item>
                        <NavDropdown.Item href="#FEUN1">FEUN calculator</NavDropdown.Item>
                        <NavDropdown.Item href="#TTKG1">TTKG calculator</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#ICU">ICU</Nav.Link>
                        <Nav.Link href="#ABG">ABG</Nav.Link>
                        <Nav.Link href="#Mnemonics">Mnemonics</Nav.Link>                        
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route exact path='/Mnemonics' component={Mnemonics} />
                    <Route path="/mnemonics/:id?" component={MnemonicRender} />
                    <Route path='/authors' component={Authors} />
                    <Route path='/Blog' component={Blog} />
                    <Route path="/CV" component={CV} />
                    <Route path="/GI" component={GI} />
                    <Route path="/Nephro" component={Nephro} />
                    <Route path="/CCr1" component={CCr1} />
                    <Route path="/CystatinC1" component={CystatinC1} />
                    <Route path="/FENa1" component={FENa1} />
                    <Route path="/FEUN1" component={FEUN1} />
                    <Route path="/TTKG1" component={TTKG1} />
                    <Route path="/ICU" component={ICU} />
                    <Route path="/ABG" component={ABG} />
                    {/* <Route path="/transformer" component={Transformer} /> */}
                    {/* <Route path="/culture" component={Culture} /> */}
                    <Route path="/" component={Authors} />
                    <Redirect from="/CV" to="/" />
                </Switch>
            </div>
        );
    }
}
