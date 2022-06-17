import Axios from "axios";
import * as Types from "../types/Types";

/** */
export const handleNavbarPosition = (isToggle = false) => async (dispatch) => {
    console.log('isToggle :>> ', isToggle);
    dispatch({ type: Types.TOGGLE_NAV_POSITION, payload: isToggle });
}