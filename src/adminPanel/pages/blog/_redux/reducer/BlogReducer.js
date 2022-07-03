import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    blogList: [],
    message: "",
    blogInput: {
        blogTitle: "",
        blogDetails: "",
        blogBanner: "",
        photoPreview: null
    },
    isSubmitting: false,
    isDeleting: false,
};

const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.HANDLE_CHANGE_BLOG_INPUT:
            const blogInput = { ...state.blogInput };
            blogInput[action.payload.name] = action.payload.value;
            return {
                ...state,
                blogInput
            };
        case Types.HANDLE_SUBMIT_BLOG_DATA:
            return {
                ...state,
                isSubmitting: action.payload.isLoading,
                blogInput: initialState.blogInput
            };
        case Types.GET_BLOG_LIST:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                blogList: action.payload.data,
                message: action.payload.message
            };
        case Types.UPDATE_SINGLE_BLOG:
            return {
                ...state,
                isUpdating  : action.payload.isUpdating,
            };
        case Types.DELETE_BLOG:
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

export default BlogReducer;