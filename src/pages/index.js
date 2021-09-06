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
            <Route exact path="/" render={()=><Dialogs/>}/>
            <Switch>
                <Route path="/inbox" component={Inbox}/>
                <Route path="/inbox/:name" component={Inbox}/>
                
                <Route path="/inbox2" component={Inbox2}/>
                <Route path="/inbox2/:name" component={Inbox2}/>
            </Switch>
        </>
    )
}