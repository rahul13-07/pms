import React from 'react'

export default function CompetencyAchievementsList() {
    return (
        <>
            <div className="container mt-4">
                <div className="card p-4" style={{ width: "88rem" }}>
                    <h4>ASSIGN TO YOU</h4>
                    <div className="row">
                        <div className="col-lg-12 mt-3">

                            <div className="panel panel-primary">

                                <table className="table table-bordered responsive">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Date</th>
                                            <th>Technology</th>
                                            <th>Title</th>
                                            <th>Source</th>
                                            <th>Description</th>
                                            <th>Hours</th>
                                            <th>Assign To</th>
                                            <th>Status</th>
                                            <th>Link</th>
                                            <th>Comment</th>
                                            <th>Manage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="12"><center>No record found!</center></td>
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
