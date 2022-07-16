import React from 'react'

export default function Holidays() {
    return (
        <>
        <div className = "container mt-4">
            <div className="card p-4" style={{ width: "88rem" }}>
            <h4>HOLIDAY</h4>
            <div className="row">
                <div className="col-lg-12 mt-3">

                    <div className="panel panel-primary">

                        <table className="table table-bordered responsive">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Running Status</th>
                                    <th>Status</th>
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
