import { Route } from 'react-router-dom';
import queryString from 'query-string';
import { Container } from './Container';
import { App } from './BeautifulDnd';

export default ({location, match}) => {
    const query = queryString.parse(location.search);    
    return (
        <>        
            <Route exact path="/material/inbox2" component={()=><h3>Inbox2 Potal</h3>}/>
            {/*<Route exact path="/inbox2/table" component={Table}/>            */}
            <Route exact path="/material/inbox2/react-dnd" component={Container}/>
            <Route exact path="/material/inbox2/react-deatiful-dnd" component={App}/>
            
        </>
    )
}

