import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PaginationComponent from '../../../components/_utilities/PaginationComponent';
import SimpleTooltip from '../../../components/_utilities/SimpleTooltip';
import DashboardLayout from '../../layout/DashboardLayout';
import { deleteBlog, getBlogList } from './_redux/Action/BlogAction';
import { confirmAlert } from 'react-confirm-alert';
import LoadingSpinner from '../../../components/_utilities/LoadingSpinner';

const BlogList = () => {

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 5;

    const dispatch = useDispatch();
    const { blogList, isLoading, isDeleting } = useSelector((state) => state.BlogReducer);

    useEffect(() => {
        dispatch(getBlogList())
    }, [dispatch])


    const postsData = useMemo(() => {
        let computedPosts = blogList;

        setTotalItems(computedPosts.length);

        //Current Page slice
        return computedPosts.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [blogList, currentPage]);



    // delete blog from list 
    const confirmDelete = (id) => {
        dispatch(deleteBlog(id));
    }
    const deletePost = (data) => {
        confirmAlert({
            title: "Confirm To Delete",
            message: `Are you sure to delete ${data.blogTitle}?`,
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
                    <h6>Blog List</h6>
                    <Link to="/dashboard/add-blog" class="btn btn-sm btn-primary shadow p-2"> Add New <i class="ms-2 fa-solid fa-arrow-right-long"></i> </Link>

                </div>
                <div className="table-responsive mt-3">
                    {
                        isDeleting && <div className="row justify-content-center m-5">
                            <LoadingSpinner title="Deleting Blog..." />
                        </div>
                    }
                    <table class="table table table-bordered border-rounded text-center">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Title</th>
                                <th scope="col">Banner</th>
                                {/* <th scope="col">Description</th> */}
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogList && blogList.length > 0 && postsData.map((item, index) => (

                                    <tr key={item._id} className="text-center">
                                        <td>{(currentPage * ITEMS_PER_PAGE) - 5 + index + 1}</td>
                                        <td>{item.blogTitle}</td>
                                        <td>
                                            <img src={item.blogBanner} alt={item.blogTitle} style={{ width: "50px" }} />
                                        </td>
                                        {/* <td>{item.blogDetails}</td> */}


                                        <td>
                                            <div className="d-flex justify-content-center align-items-center">

                                                <SimpleTooltip title={`Delete - ${item.blogTitle}`}>
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
                            <LoadingSpinner title="Loading Blog List..." />
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

export default BlogList;