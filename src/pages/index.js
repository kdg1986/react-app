import { Route, Switch } from 'react-router';
import withComponentSplitting from '@/components/withComponentSplitting';
import * as Dialog from '@/components/atoms/Dialog';

const Inbox = withComponentSplitting( () => import('@/pages/inbox') );
const Inbox2 = withComponentSplitting( () => import('@/pages/inbox2') );

const Dialogs = () =>{
    return(
        <>
            <Dialog.FullScreenDialog buttonName="FULL-SCREEN">
                {(() => {
                    return{                        
                        openFn : () => alert('open'),
                        closeFn : () => alert('close'),
                        content : <h1>test</h1>
                    }
                })()}                
            </Dialog.FullScreenDialog>
            <Dialog.AlertDialog buttonName="Alerts" />
        </>
    )  
    
        
}

export default () => {    
    return(
        <>  
            <button onClick={()=>{
                const NOTIFICATION_TITLE = 'Title';
                const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.';
                new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY });
            }}>noti</button>
            <Route exact path="/material" render={()=><Dialogs/>}/>
            <Switch>
                <Route path="/material/inbox" component={Inbox}/>
                <Route path="/material/inbox/:name" component={Inbox}/>
                
                <Route path="/material/inbox2" component={Inbox2}/>
                <Route path="/material/inbox2/:name" component={Inbox2}/>
            </Switch>
        </>
    )
}