import { createAction,handleActions } from 'redux-actions';

const LOADING = "common/LOADING";

export const loadingToggle = createAction(LOADING);

const initialState = {
    display : false
};


export default handleActions({
    [LOADING] : (state,action) => {
        console.log(state,action)
        return { display : !state.display }
    }
},initialState);

