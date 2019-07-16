import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
import PostRender from "./Posts/PostRender";
import Authors from "./Authors/Authors";
import About from "./About/About";
import MedCalculator from "./MedCalculator/MedCalculator";
import Notes from "./Notes/Notes";

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
                            <a class="nav-item nav-link active" href="#"><NavLink to={process.env.PUBLIC_URL + '/about'}>About</NavLink><span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#"><NavLink to={process.env.PUBLIC_URL + '/posts'}>Posts</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to={process.env.PUBLIC_URL + '/authors'}>Authors</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to={process.env.PUBLIC_URL + "/medcalculator"} >MedCalculator</NavLink></a>
                            <a class="nav-item nav-link" href="#"><NavLink to={process.env.PUBLIC_URL + "/notes"}>Notes</NavLink></a>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/posts'} component={Posts} />
                    <Route path="/posts/:id?" component={PostRender} />
                    <Route path={process.env.PUBLIC_URL + '/authors'} component={Authors} />
                    <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
                    <Route path={process.env.PUBLIC_URL + "/medcalculator"} component={MedCalculator} />
                    <Route path={process.env.PUBLIC_URL + "/notes"} component={Notes} />
                    <Route path={process.env.PUBLIC_URL + "/"} component={MedCalculator} />
                    <Redirect from={process.env.PUBLIC_URL + "/medcalculator"} to="/" />
                </Switch>
            </div>
        );
    }
}
