import {GET_DATA} from '../_constants';

const initialState = {
    data: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state;
    }
}

export const getData = state => state.data;

export default rootReducer;