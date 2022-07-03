import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PaginationComponent from '../../../components/_utilities/PaginationComponent';
import SimpleTooltip from '../../../components/_utilities/SimpleTooltip';
import DashboardLayout from '../../layout/DashboardLayout';
import { deleteVideo, getVideoGalleryList, updateVideoGallerItem } from './_redux/Action/VideoGalleryAction';
import { confirmAlert } from 'react-confirm-alert';
import LoadingSpinner from '../../../components/_utilities/LoadingSpinner';

const VideoGalleryList = () => {

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 5;

    const dispatch = useDispatch();
    const { videoList, isLoading, isDeleting, isUpdating } = useSelector((state) => state.VideoGalleryReducer);

    useEffect(() => {
        dispatch(getVideoGalleryList())
    }, [dispatch])


    const postsData = useMemo(() => {
        let computedPosts = videoList;

        setTotalItems(computedPosts.length);

        //Current Page slice
        return computedPosts.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [videoList, currentPage]);



    // delete video from list 
    const confirmDelete = (id) => {
        dispatch(deleteVideo(id));
    }
    const deletePost = (data) => {
        confirmAlert({
            title: "Confirm To Delete",
            message: `Are you sure to delete ${data.videoTitle}?`,
            buttons: [
                {
                    label: "Yes",
                    onClick: () => confirmDelete(data._id),
                },
                {
                    label: "No"
                }
            ]
        });
    };

    return (
        <DashboardLayout>
            <div className="dashboard_card_content">
                <div className="dashboard_card_header">
                    <h6>Video Gallery List</h6>
                    <Link to="/dashboard/add-video" class="btn btn-sm btn-primary shadow p-2"> Add New <i class="ms-2 fa-solid fa-arrow-right-long"></i> </Link>

                </div>
                <div className="table-responsive mt-3">
                    {
                        isDeleting && <div className="row justify-content-center m-5">
                            <LoadingSpinner title="Deleting Video..." />
                        </div>
                    }
                    <table class="table table table-bordered border-rounded text-center">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Title</th>
                                <th scope="col">Video</th>
                                <th scope="col">Video Thumbnail</th>
                                <th scope="col">Wants to show UI?</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                videoList && videoList.length > 0 && postsData.map((item, index) => (

                                    <tr key={item._id} className="text-center">
                                        <td>{(currentPage * ITEMS_PER_PAGE) - 5 + index + 1}</td>
                                        <td>{item.videoTitle}</td>
                                        <td>
                                            <a href={item.videoLink} target="_blank" rel="noopener noreferrer">
                                                View Video
                                            </a>
                                        </td>
                                        <td>
                                            <img src={item.videoThumbnail} alt={item.videoTitle} style={{ width: "50px" }} />
                                        </td>
                                        <td>
                                            {
                                                isUpdating === true ? <LoadingSpinner title="Updating video status..." /> :
                                                    <select className="form-select" aria-label="Approve showing  UI" onChange={(e) => dispatch(updateVideoGallerItem(item, e.target.value))}>
                                                        <option value={true} selected={item.videoStatus === true && "selected"}>Approve</option>
                                                        <option value={false} selected={item.videoStatus === false && "selected"}>Reject</option>
                                                    </select>
                                            }

                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center">
                                               
                                                <SimpleTooltip title={`Delete - ${item.videoTitle}`}>
                                                    <button className="btn btn-danger text-white btn-sm py-2 px-3"
                                                        onClick={() => deletePost(item)}
                                                    > Delete
                                                        <i className="fas fa-trash ms-2"></i>
                                                    </button>
                                                </SimpleTooltip>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {
                        isLoading && <div className="row justify-content-center m-5">
                            <LoadingSpinner title="Loading Video List..." />
                        </div>
                    }

                    <div className="text-center">
                        {
                            postsData.length > 0 &&
                            <PaginationComponent
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        }
                    </div>

                </div>



            </div>
        </DashboardLayout >
    );
};

export default VideoGalleryList;