import React, { useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomPagination from '../../../components/_utilities/CustomPagination';
import DashboardLayout from '../../layout/DashboardLayout';
import { getPhotoGalleryList } from './_redux/Action/PhotoGalleryAction';

const PhotoGalleryList = () => {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Photo',
            selector: row => row.year,
            sortable: true
        },
        {
            name: 'Action',
            selector: row => row.year,
            // sortable: true
        },
    ];


    const dispatch = useDispatch();
    const { photoList, isLoading, isDeleting } = useSelector((state) => state.PhotoGalleryReducer);

    useEffect(() => {
        dispatch(getPhotoGalleryList())
    }, [dispatch])

    console.log('photoList :>> ', photoList);

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <DashboardLayout>
            <div className="dashboard_card_content">
                <div className="dashboard_card_header">
                    <h6>Photo Gallery List</h6>
                    <Link to="/add-photos" class="btn btn-sm btn-primary shadow p-2"> Add New <i class="ms-2 fa-solid fa-arrow-right-long"></i> </Link>

                </div>
                <div className="border table-border border-rounded mt-3">
                    <table class="table text-center">
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
                                photoList && photoList.length > 0 && photoList.map((item, index) => (
                                    // <DataTable
                                    //     columns={columns}
                                    //     data={photoList}
                                    //     // selectableRows
                                    //     pagination
                                    // // expandableRows
                                    // // expandableRowsComponent={ExpandedComponent}
                                    // />
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>
                                            <img src={item.photo} alt={item.title} style={{ width: "50px" }} />
                                        </td>
                                        <td>
                                            <button>Get</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>


                </div>

                <Pagination size="sm">{items}</Pagination>

                {
                    photoList && photoList.length > 0 && (
                        <CustomPagination
                            itemsPerPage={20}
                            datalist={photoList}
                        />
                    )
                }
            </div>
        </DashboardLayout>
    );
};

export default PhotoGalleryList;