import { ToastrTypes } from './types';

const INITIAL_STATE = {
    open: false,
    message: '',
    type: undefined,
};

let types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ToastrTypes.SHOW:
            return {
                open: true, message: action.payload.message,
                type: types.some((ele) => ele === action.payload.type) ? action.payload.type : 'primary'
            };
        case ToastrTypes.HIDE:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
};

export default reducer;

