import { Route } from 'react-router-dom';
import queryString from 'query-string';
import withComponentSplitting from '@/components/withComponentSplitting';
import IconLabelButtons from '@/components/atoms/Buttons';

const InboxPotal = () => {
    return(
        <>
            <IconLabelButtons variant="contained" color="secondary">TEST</IconLabelButtons>
        </>
    )
}


export default ({location, match}) => {
    const query = queryString.parse(location.search);    
    return (
        <>        
            <Route exact path={`${match.path}`} component={ () => <InboxPotal /> }/>
            <Route path={`${match.path}/inboxGrid`} component={withComponentSplitting( () => import('../inbox/inboxGrid') )}/>
            <Route path={`${match.path}/starred/starred_starred`} component={ () => <h3>starred_starred</h3> }/>
        </>
    )
}