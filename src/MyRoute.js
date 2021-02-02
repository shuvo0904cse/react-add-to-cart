import React, {Component} from 'react';
import IceCreamBuilder from "./containers/IceCreamBuilder/IceCreamBuilder";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Services from "./containers/Services/Services";
import Orders from "./containers/Orders/Orders";
import {Route, Switch} from "react-router-dom";

class MyRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={IceCreamBuilder}/>
                    <Route exact path="/about-us" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/services" component={Services}/>
                    <Route exact path="/orders" component={Orders}/>
                </Switch>
            </div>
        );
    }
}

export default MyRoute;