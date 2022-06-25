import { combineReducers } from "redux";
import PhotoGalleryReducer from "../adminPanel/pages/photoGallery/_redux/reducer/PhotoGalleryReducer";
import DashboardReducer from "../adminPanel/_redux/reducer/DashboardReducer";
import GlobalReducer from './../_globalRedux/reducer/GlobalReducer';

const RootReducer = combineReducers({
    GlobalReducer  : GlobalReducer,
    DashboardReducer  : DashboardReducer,
    PhotoGalleryReducer  : PhotoGalleryReducer,
})

export default RootReducer;