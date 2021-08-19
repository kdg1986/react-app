/*
import { createAction,handleActions } from 'redux-actions';
const LOADING = "common/LOADING";
export const loadingToggle = createAction(LOADING);
const initialState = {
    display : false
};
export default handleActions({
    [LOADING] : (state,action) => {        
        return { display : !state.display }
    }
},initialState);
*/
export default (state = { display : false }, action) => {    
    switch (action.type) {
      case 'loading/fullIndicator':
        return { display : !state.display }
      default:
        return state
    }
}

