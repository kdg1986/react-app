import React,{ Component } from 'react';
import { Link, Route } from 'react-router-dom';
import queryString from 'query-string';

const Starred = () => {
    return (
        <h3>Starred</h3>
    )
} 

const InboxPotal = () => {
    return (
        <h3>InboxPotal</h3>
    )
}

const Inbox = ({location, match}) => {
    const query = queryString.parse(location.search);    
    return (
        <>        
            <Route exact path="/inbox" component={InboxPotal}/>
            <Route exact path="/inbox/starred" component={Starred}/>
        </>
    )
}

export default Inbox;