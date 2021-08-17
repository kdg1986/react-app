import React from 'react';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
import withComponentSplitting from '@/components/withComponentSplitting';

export default ({location, match}) => {
    const query = queryString.parse(location.search);    
    return (
        <>        
            <Route exact path={`${match.path}`} render={() => <h3>InboxPotal111</h3>}/>
            <Route path={`${match.path}/inboxGrid`} component={withComponentSplitting( () => import('../inbox/inboxGrid') )}/>
            <Route path={`${match.path}/starred/starred_starred`} component={ () => <h3>starred_starred</h3> }/>
        </>
    )
}