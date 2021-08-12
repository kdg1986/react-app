import React from 'react';
import { Route, Switch } from "react-router";
import Inbox from '@/pages/inbox';
import Inbox2 from '@/pages/inbox2';

export default () => {
    return(
        <>
            <Route exact path="/" render={()=>(<h3>Main</h3>)}/>
            <Switch>
                <Route path="/inbox" component={Inbox}/>
                <Route path="/inbox/:name" component={Inbox}/>
            </Switch>
            <Switch>
                <Route path="/inbox2" component={Inbox2}/>
                <Route path="/inbox2/:name" component={Inbox2}/>
            </Switch>
        </>
    )
}