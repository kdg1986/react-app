import InboxIcon from '@material-ui/icons/MoveToInbox';


const json = [
    { name : "inbox", path : "/material/inbox", icon : <InboxIcon/>, subPage : [
        { name : "grid", path : "/material/inbox/inboxGrid", icon : <InboxIcon/> },
        { name : "starred_starred", path : "/material/inbox/starred/starred_starred", icon : <InboxIcon/> }
    ]},
    { name : "inbox2", path : "/material/inbox2", icon : <InboxIcon/>, subPage :[
        { name : "react-dnd", path : "/material/inbox2/react-dnd", icon : <InboxIcon/> },
        { name : "react-deatiful-dnd", path : "/material/inbox2/react-deatiful-dnd", icon : <InboxIcon/> },
    ]},
    { name : "inbox3", path : "/material/inbox3", icon : <InboxIcon/> },
    { name : "inbox4", path : "/material/inbox4", icon : <InboxIcon/> },    
]

export default json;