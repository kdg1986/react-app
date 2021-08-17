import { createAction,handleActions } from 'redux-actions';

const LOADING = "layout/TITLE";

export const loadingToggle = createAction(LOADING);

const initialState = {
    title : "Main"
};


export default handleActions({
    [LOADING] : (state,action) => {
        return { display : !state.display }
    }
},initialState);

