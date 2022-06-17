import { combineReducers } from "redux";
// import LunchReducer from "../components/LaunchRocket/_redux/reducer/LaunchRocketReducer";
import GlobalReducer from './../_globalRedux/reducer/GlobalReducer';

const RootReducer = combineReducers({
    GlobalReducer  : GlobalReducer,
})

export default RootReducer;