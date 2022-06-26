import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    photoList: [],
    message: "",
    photoInput: {
        title: "",
        photo: "",
        photoPreview: null
    },
    isSubmitting: false,
    isDeleting: false,
};

const PhotoGalleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.HANDLE_CHANGE_PHOTO_GALLERY_INPUT:
            const photoInput = { ...state.photoInput };
            photoInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                photoInput
            };
        // case Types.HANDLE_SUBMIT_GUIDELINE_DATA:
        //     return {
        //         ...state,
        //         isSubmitting  : action.payload.isLoading,
        //         guidelineInput: initialState.guidelineInput
        //     };
        case Types.GET_PHOTO_GALLERY_LIST:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                photoList: action.payload.data,
                message: action.payload.message
            };
        // case Types.GET_SINGLE_GUIDELINE:
        //     return {
        //         ...state,
        //         isLoading     : action.payload.isLoading,
        //         guidelineInput: action.payload.guidelineData
        //     };
        // case Types.UPDATE_SINGLE_GUIDELINE:
        //     return {
        //         ...state,
        //         isSubmitting  : action.payload.isLoading,
        //         guidelineInput: initialState.guidelineInput
        //     };
        case Types.DELETE_PHOTO:
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

export default PhotoGalleryReducer;