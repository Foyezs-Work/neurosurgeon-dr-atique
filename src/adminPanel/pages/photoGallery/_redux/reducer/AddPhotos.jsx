import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from './../../../../layout/DashboardLayout';
import { deletePreviewImage, handleChangePhotoInput, handleStorePhotoGallery } from './../Action/PhotoGalleryAction';
import no_img from "../../../../../assets/images/no_img.jpg"
import { Spinner } from 'react-bootstrap';

const AddPhotos = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const photoInput = useSelector(state => state.PhotoGalleryReducer.photoInput)
    const isSubmitting = useSelector(state => state.PhotoGalleryReducer.isSubmitting)

    const handleChangeTextInput = (name, value, e = null) => {
        dispatch(handleChangePhotoInput(name, value, e));
    };

    const onSubmit = (e) => {
        dispatch(handleStorePhotoGallery(photoInput, navigate))
        e.preventDefault();
    };

    console.log('photoInput :>> ', photoInput);

    return (
        <DashboardLayout>
            <div className="dashboard_card_content">
                <div className="dashboard_card_header">
                    <h6>Add New Photos</h6>
                    <Link to="/photo-gallery-list" class="btn btn-sm btn-primary shadow p-2">  <i class="me-2 fa-solid fa-arrow-left-long"></i> Back To List </Link>

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
                                placeholder="Title"
                                name="title"
                                value={photoInput.title}
                                onChange={(e) => handleChangeTextInput('title', e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control"
                                name="photo"
                                onChange={(e) => handleChangeTextInput('photo', e.target.files[0], e)}
                            />


                            {
                                photoInput.photoPreview !== null ?
                                    <div className="imgPreview">
                                        <div className="removePreview">
                                            <i className="fa fa-times pointer text-danger" title="Remove"
                                                onClick={() => dispatch(deletePreviewImage('photo'))}
                                            ></i>
                                        </div>
                                        <img src={photoInput.photoPreview} className="img img-thumbnail" alt="" style={{ width: "150px", marginTop: "30px" }} />
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

export default AddPhotos;