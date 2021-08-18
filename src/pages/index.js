import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import withComponentSplitting from '@/components/withComponentSplitting';

const Inbox = withComponentSplitting( () => import('@/pages/inbox') );
const Inbox2 = withComponentSplitting( () => import('@/pages/inbox2') );

export default () => {    

    const dispatch = useDispatch();

    return(
        <>
            <Route exact path="/" render={()=>(
                <>
                    <h3>Main</h3>
                    <button onClick={() => dispatch({ type: 'common/LOADING',tit : "inbox" })}>
                        Increment counter
                    </button>
                </>
            )}/>
            <Switch>
                <Route path="/inbox" component={Inbox}/>
                <Route path="/inbox/:name" component={Inbox}/>
                
                <Route path="/inbox2" component={Inbox2}/>
                <Route path="/inbox2/:name" component={Inbox2}/>
            </Switch>
        </>
    )
}