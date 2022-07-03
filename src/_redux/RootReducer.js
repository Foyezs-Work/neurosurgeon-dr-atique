import { combineReducers } from "redux";
import BlogReducer from "../adminPanel/pages/blog/_redux/reducer/BlogReducer";
import PhotoGalleryReducer from "../adminPanel/pages/photoGallery/_redux/reducer/PhotoGalleryReducer";
import VideoGalleryReducer from "../adminPanel/pages/videoGallery/_redux/reducer/VideoGalleryReducer";
import DashboardReducer from "../adminPanel/_redux/reducer/DashboardReducer";
import GlobalReducer from './../_globalRedux/reducer/GlobalReducer';

const RootReducer = combineReducers({
    GlobalReducer: GlobalReducer,
    DashboardReducer: DashboardReducer,
    PhotoGalleryReducer: PhotoGalleryReducer,
    VideoGalleryReducer: VideoGalleryReducer,
    BlogReducer: BlogReducer,
})

export default RootReducer;