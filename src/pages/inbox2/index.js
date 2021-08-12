import React,{ Component } from 'react';
import { Link, Route } from 'react-router-dom';
import queryString from 'query-string';
import Table from '@/pages/inbox2/Table';


const InboxPotal = () => {
    return (
        <h3>Inbox2 Potal</h3>
    )
}

export default ({location, match}) => {
    const query = queryString.parse(location.search);    
    return (
        <>        
            <Route exact path="/inbox2" component={InboxPotal}/>
            <Route exact path="/inbox2/table" component={Table}/>            
        </>
    )
}

