import React,{ Component } from 'react';
import { Link, Route } from 'react-router-dom';
import queryString from 'query-string';
import Grid from '@/pages/inbox/grid';


const InboxPotal = () => {
    return (
        <h3>InboxPotal111</h3>
    )
}

const Inbox = ({location, match}) => {
    const query = queryString.parse(location.search);    
    return (
        <>        
            <Route exact path="/inbox" component={InboxPotal}/>
            <Route exact path="/inbox/grid" component={Grid}/>
            <Route exact path="/inbox/starred/starred_starred" render={()=>(<h3>Starred_Starred</h3>)}/>            
        </>
    )
}

export default Inbox;