import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';


const json = [
    { name : "inbox", path : "/inbox", icon : <InboxIcon/>, subPage : [
        { name : "grid", path : "/inbox/inboxGrid", icon : <InboxIcon/> },
        { name : "starred_starred", path : "/inbox/starred/starred_starred", icon : <InboxIcon/> }
    ]},
    { name : "inbox2", path : "/inbox2", icon : <InboxIcon/>, subPage :[
        { name : "react-dnd", path : "/inbox2/react-dnd", icon : <InboxIcon/> },
        { name : "react-deatiful-dnd", path : "/inbox2/react-deatiful-dnd", icon : <InboxIcon/> },
    ]},    
]

export default json;