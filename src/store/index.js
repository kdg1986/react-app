import { combineReducers,createStore } from "redux";
import loadingReducer from './reducer/loadingReducer';
import layoutReducer from './reducer/layoutReducer';

export default (() => {    
    return createStore( 
        combineReducers({
            loadingReducer,
            layoutReducer,            
        })
    )
})();