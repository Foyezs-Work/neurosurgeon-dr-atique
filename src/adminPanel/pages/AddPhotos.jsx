import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';

const AddPhotos = () => {
    return (
        <DashboardLayout>
            <div className="dashboard_card_content">
                <div className="dashboard_card_header">
                    <h6>Add New Photos</h6>
                    <Link to="/photo-gallery-list" class="btn btn-sm btn-primary shadow p-2">  <i class="me-2 fa-solid fa-arrow-left-long"></i> Back To List </Link>

                </div>
                <div className=" border-rounded mt-3">
                    <form action="#">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Title" />
                        </div>

                        <div className="form-group">
                            <input type="file" className="form-control" />
                           <img src="" alt="" />
                        </div>
                        <div className="text-end mt-3">
                            <button class="btn btn-sm btn-secondary shadow p-2 me-2"> Clear </button>
                            <button class="btn btn-sm btn-primary shadow p-2"> Submit </button>
                        </div>
                    </form>
                    {/* <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form> */}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AddPhotos;