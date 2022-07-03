import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    videoList: [],
    message: "",
    videoInput: {
        videoTitle: "",
        videoLink: "",
        videoThumbnail: "",
        photoPreview: null
    },
    isSubmitting: false,
    isDeleting: false,
};

const VideoGalleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.HANDLE_CHANGE_VIDEO_GALLERY_INPUT:
            const videoInput = { ...state.videoInput };
            videoInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                videoInput
            };
        case Types.HANDLE_SUBMIT_VIDEO_GALLERY_DATA:
            return {
                ...state,
                isSubmitting: action.payload.isLoading,
                photoInput: initialState.videoInput
            };
        case Types.GET_VIDEO_GALLERY_LIST:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                videoList: action.payload.data,
                message: action.payload.message
            };
        // case Types.GET_SINGLE_GUIDELINE:
        //     return {
        //         ...state,
        //         isLoading     : action.payload.isLoading,
        //         guidelineInput: action.payload.guidelineData
        //     };
        case Types.UPDATE_SINGLE_VIDEO:
            return {
                ...state,
                isUpdating  : action.payload.isUpdating,
            };
        case Types.DELETE_VIDEO:
            return {
                ...state,
                isDeleting: action.payload.isDeleting,
            };
        default:
            return {
                ...state,
            };
            break;
    }
};

export default VideoGalleryReducer;