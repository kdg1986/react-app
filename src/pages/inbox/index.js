import React from 'react';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
import withComponentSplitting from '@/components/withComponentSplitting';

const InboxGrid = withComponentSplitting( () => import('@/pages/inbox/inboxGrid') );

export default ({location, match}) => {
    const query = queryString.parse(location.search);    
    return (
        <>        
            <Route exact path="/inbox" render={() => <h3>InboxPotal111</h3>}/>
            <Route exact path="/inbox/grid" component={InboxGrid}/>
            <Route exact path="/inbox/starred/starred_starred" render={()=>(<h3>Starred_Starred</h3>)}/>            
        </>
    )
    }