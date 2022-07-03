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
export const handleChangeVideoInput = (name, value, e = null) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.HANDLE_CHANGE_VIDEO_GALLERY_INPUT, payload: data });

    if (name === 'videoThumbnail') {
        let reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            data.name = 'photoPreview';
            data.value = reader.result;
            dispatch({ type: Types.HANDLE_CHANGE_VIDEO_GALLERY_INPUT, payload: data });
        }
        reader.readAsDataURL(file)
    }
};

export const deletePreviewImage = (name) => (dispatch) => {
    let data = {
        name: name,
        value: null,
    }
    dispatch({ type: Types.HANDLE_CHANGE_VIDEO_GALLERY_INPUT, payload: data });

    if (name === "videoThumbnail") {
        data.name = 'photoPreview';
    }
    dispatch({ type: Types.HANDLE_CHANGE_VIDEO_GALLERY_INPUT, payload: data });
};


/**
* Add New Guideline
* @param {object} videoInput ex: Wallet Input Fields
* @returns handleStorePhotoGallery
*/
export const handleStoreVideoGallery = (videoInput, navigate) => (dispatch) => {
    const response = {
        isLoading: true,
        status: false,
    }
    if (videoInput.videoTitle === "") {
        showToast("error", "Video title can't be blank!")
        return false;
    }
    if (videoInput.videoLink === "") {
        showToast("error", "Video link can't be blank!")
        return false;
    }

    if (videoInput.videoThumbnail === "" || videoInput.videoThumbnail === null) {
        showToast("error", "Video thumbnail Can't be blank!");
        return false;
    }

    dispatch({ type: Types.HANDLE_SUBMIT_VIDEO_GALLERY_DATA, payload: response });

    const addedVideo = {
        videoTitle: videoInput.videoTitle,
        videoLink: videoInput.videoLink,
        videoThumbnail: videoInput.photoPreview
    }
    Axios.post(`${baseURL}/videos/add-video`, addedVideo)
        .then((res) => {
            response.isLoading = false;
            showToast("success", res.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_VIDEO_GALLERY_DATA, payload: response });
            navigate("/dashboard/video-gallery-list");

        }).catch((err) => {
            response.isLoading = false;
            let responseLog = err.response;
            showToast("error", responseLog.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_VIDEO_GALLERY_DATA, payload: response });
        })
}

/**
 * Get All Guideline List
 * @returns getGuidelineList
 */
export const getVideoGalleryList = () => (dispatch) => {
    const responseData = {
        isLoading: true,
        status: false,
        message: "",
        data: [],
    }
    dispatch({ type: Types.GET_VIDEO_GALLERY_LIST, payload: responseData });

    Axios.get(`${baseURL}/videos/video-list`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message = res.data.message;
                responseData.data = res.data.getVideoList;
                responseData.isLoading = false;
                responseData.status = true;
            }
            dispatch({ type: Types.GET_VIDEO_GALLERY_LIST, payload: responseData });
            // showToast("success", res.data.message)

        }).catch((err) => {
            responseData.isLoading = false;
            responseData.status = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.GET_VIDEO_GALLERY_LIST, payload: responseData });
        })
}




export const updateVideoGallerItem = (video, videoStatus) => (dispatch) => {
    const updateValue = {
        _id: video._id,
        videoTitle: video.videoTitle,
        videoLink: video.videoLink,
        videoThumbnail: video.videoThumbnail,
        videoStatus: videoStatus
    }
    const response = {
        isUpdating: true,
        status: false,
    }

    dispatch({ type: Types.UPDATE_SINGLE_VIDEO, payload: response });

    Axios.put(`${baseURL}/videos/update-video`, updateValue)
        .then((res) => {
            response.isUpdating = false;
            showToast("success", res.data.message);
            dispatch({ type: Types.UPDATE_SINGLE_VIDEO, payload: response });
            dispatch(getVideoGalleryList())
        }).catch((err) => {
            response.isUpdating = false;
            let responseLog = err.response;
            showToast("error", responseLog.data.message);
            dispatch({ type: Types.UPDATE_SINGLE_VIDEO, payload: response });
        })
}


/**
 * Delete Single photos Data
 * @param {string} id Ex: photo ID || it's must be unique
 * @returns responseData
 */
export const deleteVideo = (id) => (dispatch) => {
    const responseData = {
        isDeleting: true,
        status: false,
        message: ""
    }
    dispatch({ type: Types.DELETE_VIDEO, payload: responseData });
    Axios.delete(`${baseURL}/videos/delete-video/${id}`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message = res.data.message;
                responseData.isDeleting = false;
                responseData.status = true;
                showToast("success", res.data.message);
                dispatch(getVideoGalleryList())
            }

            dispatch({ type: Types.DELETE_VIDEO, payload: responseData });
        }).catch((err) => {
            responseData.isDeleting = false;
            responseData.status = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.DELETE_VIDEO, payload: responseData });
        })
}