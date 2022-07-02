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
export const handleChangePhotoInput = (name, value, e = null) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.HANDLE_CHANGE_PHOTO_GALLERY_INPUT, payload: data });

    if (name === 'photo') {
        let reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            data.name = 'photoPreview';
            data.value = reader.result;
            dispatch({ type: Types.HANDLE_CHANGE_PHOTO_GALLERY_INPUT, payload: data });
        }
        reader.readAsDataURL(file)
    }
};

export const deletePreviewImage = (name) => (dispatch) => {
    let data = {
        name: name,
        value: null,
    }
    dispatch({ type: Types.HANDLE_CHANGE_PHOTO_GALLERY_INPUT, payload: data });

    if (name === "photo") {
        data.name = 'photoPreview';
    }
    dispatch({ type: Types.HANDLE_CHANGE_PHOTO_GALLERY_INPUT, payload: data });
};


/**
* Add New Guideline
* @param {object} photoInput ex: Wallet Input Fields
* @returns handleStorePhotoGallery
*/
export const handleStorePhotoGallery = (photoInput, navigate) => (dispatch) => {
    const response = {
        isLoading: true,
        status: false,
    }
    if (photoInput.title === "") {
        showToast("error", "Photo title can't be blank!")
        return false;
    }

    if (photoInput.photoPreview === "" || photoInput.photoPreview === null) {
        showToast("error", "Image Can't be blank!");
        return false;
    }

    dispatch({ type: Types.HANDLE_SUBMIT_PHOTO_GALLERY_DATA, payload: response });

    const addedPhoto = {
        title: photoInput.title,
        photo: photoInput.photoPreview
    }
    Axios.post(`${baseURL}/photos/`, addedPhoto)
        .then((res) => {
            response.isLoading = false;
            showToast("success", res.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_PHOTO_GALLERY_DATA, payload: response });
            navigate("/photo-gallery-list");

        }).catch((err) => {
            response.isLoading = false;
            let responseLog = err.response;
            showToast("error", responseLog.data.message);
            dispatch({ type: Types.HANDLE_SUBMIT_PHOTO_GALLERY_DATA, payload: response });
        })
}

/**
 * Get All Guideline List
 * @returns getGuidelineList
 */
export const getPhotoGalleryList = () => (dispatch) => {
    const responseData = {
        isLoading: true,
        status: false,
        message: "",
        data: [],
    }
    dispatch({ type: Types.GET_PHOTO_GALLERY_LIST, payload: responseData });

    Axios.get(`${baseURL}/photos/photos-list`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message = res.data.message;
                responseData.data = res.data.getPhotosList;
                responseData.isLoading = false;
                responseData.status = true;
            }
            dispatch({ type: Types.GET_PHOTO_GALLERY_LIST, payload: responseData });
            // showToast("success", res.data.message)

        }).catch((err) => {
            responseData.isLoading = false;
            responseData.status = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.GET_PHOTO_GALLERY_LIST, payload: responseData });
        })
}




export const updatePhotoGallerItem = (photo, status) => (dispatch) => {
    const updateValue = {
        _id: photo._id,
        title: photo.title,
        photo: photo.photo,
        status: status
    }
    const response = {
        isUpdating: true,
        status: false,
    }

    dispatch({ type: Types.UPDATE_SINGLE_PHOTO, payload: response });

    Axios.put(`${baseURL}/photos/update-photo`, updateValue)
        .then((res) => {
            response.isUpdating = false;
            showToast("success", res.data.message);
            dispatch({ type: Types.UPDATE_SINGLE_PHOTO, payload: response });
            dispatch(getPhotoGalleryList())
        }).catch((err) => {
            response.isUpdating = false;
            let responseLog = err.response;
            showToast("error", responseLog.data.message);
            dispatch({ type: Types.UPDATE_SINGLE_PHOTO, payload: response });
        })
}


/**
 * Delete Single photos Data
 * @param {string} id Ex: photo ID || it's must be unique
 * @returns responseData
 */
export const deletePhoto = (id) => (dispatch) => {
    const responseData = {
        isDeleting: true,
        status: false,
        message: ""
    }
    dispatch({ type: Types.DELETE_PHOTO, payload: responseData });
    Axios.delete(`${baseURL}/photos/delete-photo/${id}`)
        .then((res) => {
            if (res.status === 201) {
                responseData.message = res.data.message;
                responseData.isDeleting = false;
                responseData.status = true;
                showToast("success", res.data.message);
                dispatch(getPhotoGalleryList())
            }

            dispatch({ type: Types.DELETE_PHOTO, payload: responseData });
        }).catch((err) => {
            responseData.isDeleting = false;
            responseData.status = false;
            showToast("warning", "Something went wrong!")
            dispatch({ type: Types.DELETE_PHOTO, payload: responseData });
        })
}