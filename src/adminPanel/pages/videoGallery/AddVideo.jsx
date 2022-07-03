import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deletePreviewImage, handleChangeVideoInput, handleStoreVideoGallery } from './_redux/Action/VideoGalleryAction';
import no_img from "./../../../assets/images/no_img.jpg"
import { Spinner } from 'react-bootstrap';
import DashboardLayout from '../../layout/DashboardLayout';

const AddVideo = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const videoInput = useSelector(state => state.VideoGalleryReducer.videoInput)
    const isSubmitting = useSelector(state => state.VideoGalleryReducer.isSubmitting)

    const handleChangeTextInput = (name, value, e = null) => {
        dispatch(handleChangeVideoInput(name, value, e));
    };

    const onSubmit = (e) => {
        dispatch(handleStoreVideoGallery(videoInput, navigate))
        e.preventDefault();
    };

    console.log('videoInput :>> ', videoInput);

    return (
        <DashboardLayout>
            <div className="dashboard_card_content">
                <div className="dashboard_card_header">
                    <h6>Add New Video</h6>
                    <Link to="/dashboard/video-gallery" class="btn btn-sm btn-primary shadow p-2">  <i class="me-2 fa-solid fa-arrow-left-long"></i> Back To List </Link>

                </div>
                <div className=" border-rounded mt-3">
                    <form
                        onSubmit={(e) => onSubmit(e)}
                        method="post"
                        autoComplete="off"
                        encType="multipart/form-data"
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Video Title"
                                name="videoTitle"
                                value={videoInput.videoTitle}
                                onChange={(e) => handleChangeTextInput('videoTitle', e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Video Link"
                                name="videoLink"
                                value={videoInput.videoLink}
                                onChange={(e) => handleChangeTextInput('videoLink', e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control"
                                name="videoThumbnail"
                                onChange={(e) => handleChangeTextInput('videoThumbnail', e.target.files[0], e)}
                            />


                            {
                                videoInput.photoPreview !== null ?
                                    <div className="imgPreview">
                                        <div className="removePreview">
                                            <i className="fa fa-times pointer text-danger" title="Remove"
                                                onClick={() => dispatch(deletePreviewImage('videoThumbnail'))}
                                            ></i>
                                        </div>
                                        <img src={videoInput.photoPreview} className="img img-thumbnail" alt="" style={{ width: "150px", marginTop: "30px" }} />
                                    </div> :
                                    <img src={no_img} className="img img-thumbnail" alt="" style={{ width: "150px", marginTop: "30px" }} />
                            }
                        </div>
                        <div className="text-end mt-3">
                            {
                                isSubmitting && (
                                    <button type='submit' className='btn btn-sm btn-primary shadow p-2' disabled={true}>
                                        <Spinner
                                            animation="border"
                                            variant="custom-loading"
                                            size="sm"
                                        />
                                        <span className="ms-2">Submitting...</span>
                                    </button>
                                )
                            }
                            {
                                !isSubmitting && (
                                    <button type='submit' className='btn btn-sm btn-primary shadow p-2'>Submit</button>
                                )
                            }
                        </div>
                    </form>

                </div>
            </div>
        </DashboardLayout>
    );
};

export default AddVideo;