import React from 'react'

export default function TaskList() {
    return (
        <>
        <div className = "container mt-4">
            <div className="card p-4" style={{ width: "88rem" }}>
            <h4>Task</h4>
            <div className="row">
                <div className="col-lg-12 mt-3">

                    <div className="panel panel-primary">

                        <table className="table table-bordered responsive">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Project Name</th>
                                    <th>Description</th>
                                    <th>Task Hours</th>
                                    <th>Status</th>
                                    <th>Manage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="5"><center>No record found!</center></td>
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
