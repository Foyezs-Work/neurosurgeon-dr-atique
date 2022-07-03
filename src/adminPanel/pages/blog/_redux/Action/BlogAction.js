import Axios from "axios";
import * as Types from "../types/Types";
import { showToast } from './../../../../../components/_utilities/Toaster';

let baseURL = process.env.REACT_APP_API_URL;


/**
 * 
 * @param {string} name ex: Input field data name
 * @param {string} value ex: Input field value
 * @param {string} e ex: Input file type
 * @returns formData
 */
export const handleChangeBlogInput = (name, value, e = null) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.HANDLE_CHANGE_BLOG_INPUT, payload: data });

    if (name === 'blogBanner') {
        let reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            data.name = 'photoPreview';
            data.value = reader.result;
            dispatch({ type: Types.HANDLE_CHANGE_BLOG_INPUT, payload: data });
        }
        reader.readAsDataURL(file)
    }
};

export const deletePreviewImage = (name) => (dispatch) => {
    let data = {
        name: name,
        value: null,
    }
    dispatch({ type: Types.HANDLE_CHANGE_BLOG_INPUT, payload: data });

    if (name === "blogBanner") {
        data.name = 'photoPreview';
    }
    dispatch({ type: Types.HANDLE_CHANGE_BLOG_INPUT, payload: data });
};


/**
* @param {object} blogInput ex: Wallet Input Fields
* @returns handleStoreBlog
*/
export const handleStoreBlog = (blogInput, navigate) => (dispatch) => {
    const response = {
        isLoading: true,
        status: false,
    }
    if (blogInput.blogTitle === "") {
        showToast("error", "Blog title can't be blank!")
        return false;
    }
    if (blogInput.blogDetails === "") {
        showToast("error", "Blog content can't be blank!")
        return false;
    }

    dispatch({ type: Types.HANDLE_SUBMIT_BLOG_DATA, payload: response });

    const addedBlog = {
        blogTitle: blogInput.blogTitle,
        blogDetails: blogInput.blogDetails,
        blogBanner: blogInput.photoPreview
    }
    Axios.post(`${baseURL}/blog/add-blog`, addedBlog)
        .then((res) => {
            response.isLoading = false;
            showToast("success", res.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_BLOG_DATA, payload: response });
            navigate("/dashboard/blog-list");

        }).catch((err) => {
            response.isLoading = false;
            let responseLog = err.response;
            showToast("error", responseLog.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_BLOG_DATA, payload: response });
        })
}

/**
 * Get All Blog List
 * @returns getBlogList
 */
export const getBlogList = () => (dispatch) => {
    const responseData = {
        isLoading: true,
        status: false,
        message: "",
        data: [],
    }
    dispatch({ type: Types.GET_BLOG_LIST, payload: responseData });

    Axios.get(`${baseURL}/blog/blog-list`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message = res.data.message;
                responseData.data = res.data.getBlogList;
                responseData.isLoading = false;
                responseData.status = true;
            }
            dispatch({ type: Types.GET_BLOG_LIST, payload: responseData });
            // showToast("success", res.data.message)

        }).catch((err) => {
            responseData.isLoading = false;
            responseData.status = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.GET_BLOG_LIST, payload: responseData });
        })
}



/**
 * Delete Single photos Data
 * @param {string} id Ex: photo ID || it's must be unique
 * @returns responseData
 */
export const deleteBlog = (id) => (dispatch) => {
    const responseData = {
        isDeleting: true,
        status: false,
        message: ""
    }
    dispatch({ type: Types.DELETE_BLOG, payload: responseData });
    Axios.delete(`${baseURL}/blog/delete-blog/${id}`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message = res.data.message;
                responseData.isDeleting = false;
                responseData.status = true;
                showToast("success", res.data.message);
                dispatch(getBlogList())
            }

            dispatch({ type: Types.DELETE_BLOG, payload: responseData });
        }).catch((err) => {
            responseData.isDeleting = false;
            responseData.status = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.DELETE_BLOG, payload: responseData });
        })
}