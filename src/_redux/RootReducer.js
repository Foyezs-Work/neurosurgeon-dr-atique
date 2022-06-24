import { combineReducers } from "redux";
import DashboardReducer from "../adminPanel/_redux/reducer/DashboardReducer";
import GlobalReducer from './../_globalRedux/reducer/GlobalReducer';

const RootReducer = combineReducers({
    GlobalReducer  : GlobalReducer,
    DashboardReducer  : DashboardReducer,
})

export default RootReducer;