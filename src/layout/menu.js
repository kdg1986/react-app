import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';


const json = [
    { name : "inbox", path : "/inbox", icon : <InboxIcon/>, subPage : [
        { name : "grid", path : "/inbox/grid", icon : <InboxIcon/> },
        { name : "starred_starred", path : "/inbox/starred/starred_starred", icon : <InboxIcon/> }
    ]},
    { name : "inbox2", path : "/inbox2", icon : <InboxIcon/>, subPage :[
        { name : "table", path : "/inbox2/table", icon : <InboxIcon/> },
    ]},
    { name : "inbox3", path : "/inbox3", icon : <InboxIcon/> },
    { name : "inbox4", path : "/inbox4", icon : <InboxIcon/> },    
]

export default json;