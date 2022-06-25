import React from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const PhotoGalleryList = () => {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 3,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 4,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 5,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 6,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 7,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 8,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 9,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 10,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 11,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 12,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <DashboardLayout>
            <div className="dashboard_card_content">
                <div className="dashboard_card_header">
                    <h6>Photo Gallery List</h6>
                    <Link to="/photos-gallery" class="btn btn-sm btn-primary shadow p-2"> Add New <i class="ms-2 fa-solid fa-arrow-right-long"></i> </Link>

                </div>
                <div className="border border-rounded mt-3">
                    <DataTable
                        columns={columns}
                        data={data}
                        // selectableRows
                        pagination
                    // expandableRows
                    // expandableRowsComponent={ExpandedComponent}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default PhotoGalleryList;