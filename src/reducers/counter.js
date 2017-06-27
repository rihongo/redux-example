/**
 * Created by rihongo on 2017. 6. 26..
 */
import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dummyObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

export default function counter(state = initialState, action) {

    /*
    if(state === 'undefined') {
        return initialState;
    }
    */
    switch (action.type) {
        case  types.INCREMENT:
            //return { number: state.number + 1};
            return { ...state,
                number: state.number + 1,
                dummyObject: { ...state.dummyObject, u: 0}
            };
        case  types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }

    return state;
}