import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Home,Page1,Page2,Page3,Page4,Page5 } from "./section1";

class Section1App extends Component{
    render(){
        return(
            <div>
                <Route exact path="/section1" component={Home}/>    
                <Switch>
                    <Route path="/section1/page1" component={Page1}/>
                    <Route path="/section1/page2" component={Page2}/>
                    <Route path="/section1/page3" component={Page3}/>
                    <Route path="/section1/page4" component={Page4}/>
                    <Route path="/section1/page5" component={Page5}/>
                </Switch>
            </div>
        );
    }
}

export default Section1App;
