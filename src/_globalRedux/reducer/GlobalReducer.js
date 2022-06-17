import * as Types from "../types/Types";

const initialState = {
    isToggle: false,
};

const GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.TOGGLE_NAV_POSITION:
            return {
                ...state,
                isToggle: action.payload
            };

        default:
            return {
                ...state,
            };
            break;
    }
};

export default GlobalReducer;