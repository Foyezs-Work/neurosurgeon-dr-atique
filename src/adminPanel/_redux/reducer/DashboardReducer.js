import * as Types from "../types/Types";

const initialState = {
    isToggle: true,
};

const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.TOGGLE_DASH_SIDEBAR:
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

export default DashboardReducer;