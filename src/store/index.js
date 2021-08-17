import { combineReducers,createStore } from "redux";
//import * as reducer from './reducer';
import loading from './reducer/loading';

export default (() => {    
    return createStore( 
        combineReducers({
            loading
        })
    )
})();