import React from 'react'

export default function RecruitmentManagementSystem() {
    return (
        <>
            <div className="container mt-4">
                <div className="card p-4" style={{ width: "88rem" }}>
                    <h4>Recruitment Management System</h4>
                    <div className="row">
                        <div className="col-lg-12 mt-3">

                            <div className="panel panel-primary">

                                <table className="table table-bordered responsive">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Name</th>
                                            <th>Contact No.</th>
                                            <th>Technology</th>
                                            <th>Applied Date</th>
                                            <th>Status</th>
                                            <th>Schedule Date & Time</th>
                                            <th>Remark</th>
                                            <th>Manage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="7"><center>No record found!</center></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
