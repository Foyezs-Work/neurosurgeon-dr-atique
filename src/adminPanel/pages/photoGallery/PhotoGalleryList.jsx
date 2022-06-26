import React, { useEffect, useMemo, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PaginationComponent from '../../../components/_utilities/PaginationComponent';
import SimpleTooltip from '../../../components/_utilities/SimpleTooltip';
import DashboardLayout from '../../layout/DashboardLayout';
import { deletePhoto, getPhotoGalleryList } from './_redux/Action/PhotoGalleryAction';
import { confirmAlert } from 'react-confirm-alert';
import LoadingSpinner from '../../../components/_utilities/LoadingSpinner';

const PhotoGalleryList = () => {

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 5;
    let active = 2;

    const dispatch = useDispatch();
    const { photoList, isLoading, isDeleting } = useSelector((state) => state.PhotoGalleryReducer);

    useEffect(() => {
        dispatch(getPhotoGalleryList())
    }, [dispatch])


    const postsData = useMemo(() => {
        let computedPosts = photoList;

        setTotalItems(computedPosts.length);

        //Current Page slice
        return computedPosts.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [photoList, currentPage]);



    // delete photos from list 
    const confirmDelete = (id) => {
        console.log('id :>> ', id);
        dispatch(deletePhoto(id));
    }
    const deletePost = (data) => {
        confirmAlert({
            title: "Confirm To Delete",
            message: `Are you sure to delete ${data.title}?`,
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
                    <h6>Photo Gallery List</h6>
                    <Link to="/add-photos" class="btn btn-sm btn-primary shadow p-2"> Add New <i class="ms-2 fa-solid fa-arrow-right-long"></i> </Link>

                </div>
                <div className="table-responsive mt-3">
                    {
                        isDeleting && <div className="row justify-content-center m-5">
                            <LoadingSpinner title="Deleting Photo From Gallery List..." />
                        </div>
                    }
                    <table class="table table table-bordered border-rounded text-center">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Title</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                photoList && postsData.length > 0 && postsData.map((item, index) => (

                                    <tr key={item._id} className="text-center">
                                        <td>{((currentPage * ITEMS_PER_PAGE) + index + 1) - postsData.length}</td>
                                        <td>{item.title}</td>
                                        <td>
                                            <img src={item.photo} alt={item.title} style={{ width: "50px" }} />
                                        </td>
                                        <td>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <SimpleTooltip title={`View - ${item.title}`}>
                                                    <button className="btn btn-info btn-sm py-2 px-3 mx-2">
                                                        <i className="fa fa-eye"></i>
                                                    </button>
                                                </SimpleTooltip>
                                                <SimpleTooltip title={`Edit - ${item.title}`}>
                                                    <button className="btn btn-primary btn-sm me-2 py-2 px-3"
                                                    // onClick={() => handleUpdateModalShow(item)}
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                </SimpleTooltip>
                                                <SimpleTooltip title={`Delete - ${item.title}`}>
                                                    <button className="btn btn-danger btn-sm py-2 px-3"
                                                        onClick={() => deletePost(item)}
                                                    >
                                                        <i className="fas fa-trash"></i>
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
                            <LoadingSpinner title="Loading Photo Gallery List..." />
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

export default PhotoGalleryList;