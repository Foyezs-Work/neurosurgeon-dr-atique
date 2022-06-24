import Axios from "axios";
import * as Types from "../types/Types";

/** */
export const handleToggleDashSidebar = (isToggle = true) => async (dispatch) => {
    dispatch({ type: Types.TOGGLE_DASH_SIDEBAR, payload: isToggle });
}