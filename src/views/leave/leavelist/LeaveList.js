import React from 'react'

export default function LeaveList() {
    return (
        <>
        <div className = "container mt-4">
            <div className="card p-4" style={{ width: "88rem" }}>
            <h4>LEAVES</h4>
            <div className="row">
                <div className="col-lg-12 mt-3">

                    <div className="panel panel-primary">

                        <table className="table table-bordered responsive">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th>Reason</th>
                                    <th>Status</th>
                                    <th>Comment</th>
                                    <th>Manage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="6"><center>No record found!</center></td>
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
