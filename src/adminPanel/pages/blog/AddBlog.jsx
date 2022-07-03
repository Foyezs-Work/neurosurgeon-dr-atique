import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deletePreviewImage, handleChangeBlogInput, handleStoreBlog } from './_redux/Action/BlogAction';
import no_img from "./../../../assets/images/no_img.jpg"
import { Spinner } from 'react-bootstrap';
import DashboardLayout from '../../layout/DashboardLayout';

const AddBlog = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const blogInput = useSelector(state => state.BlogReducer.blogInput)
    const isSubmitting = useSelector(state => state.BlogReducer.isSubmitting)

    const handleChangeTextInput = (name, value, e = null) => {
        dispatch(handleChangeBlogInput(name, value, e));
    };

    const onSubmit = (e) => {
        dispatch(handleStoreBlog(blogInput, navigate))
        e.preventDefault();
    };

    return (
        <DashboardLayout>
            <div className="dashboard_card_content">
                <div className="dashboard_card_header">
                    <h6>Add New Blog</h6>
                    <Link to="/dashboard/blog-list" class="btn btn-sm btn-primary shadow p-2">  <i class="me-2 fa-solid fa-arrow-left-long"></i> Back To List </Link>

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
                                placeholder="Blog Title"
                                name="blogTitle"
                                value={blogInput.blogTitle}
                                onChange={(e) => handleChangeTextInput('blogTitle', e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="Video Link"
                                name="blogDetails"
                                value={blogInput.blogDetails}
                                onChange={(e) => handleChangeTextInput('blogDetails', e.target.value)}>
                            </textarea>
                        </div>

                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control"
                                name="blogBanner"
                                onChange={(e) => handleChangeTextInput('blogBanner', e.target.files[0], e)}
                            />


                            {
                                blogInput.photoPreview !== null ?
                                    <div className="imgPreview">
                                        <div className="removePreview">
                                            <i className="fa fa-times pointer text-danger" title="Remove"
                                                onClick={() => dispatch(deletePreviewImage('blogBanner'))}
                                            ></i>
                                        </div>
                                        <img src={blogInput.photoPreview} className="img img-thumbnail" alt="" style={{ width: "150px", marginTop: "30px" }} />
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

export default AddBlog;