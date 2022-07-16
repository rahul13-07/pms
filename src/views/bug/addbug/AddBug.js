import React from 'react'

export default function AddBugTrackingSystem() {
    return (
        <>
            <div className="container mt-5">
                <div className="card p-4" style={{ width: "88rem" }}>
                    <form>
                        <span className="badge bg-dark">ADD BUG</span>
                    </form>
                    <form className="row g-3 mx-5 my-1">
                        <div className="col-md-3">
                            <label for="inputState" className="form-label">Project<font color="red">*</font></label>
                            <select id="inputState" className="form-select">
                                <option value="">--Select Project--</option>
                            </select>
                        </div>
                        <div className="col-md-3 mx-5">
                            <label for="inputCity" className="form-label">Issues<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Issues.." />
                        </div>
                        <div className="col-md-3 mx-2">
                            <label for="inputCity" className="form-label">Assign To<font color="red">*</font></label>
                            <select id="inputState" className="form-select">
                                <option value="">--Select Employee--</option>
                                <option value="rahul Tyagi" >Rahul Tyagi</option>
                            </select>
                        </div>
                    </form>
                    <div className="col-md-3 p-2 mx-5 my-3">
                        <label for="inputCity" className="form-label"></label>
                        {/* <input type="button" className="form-control my-2" id="inputCity" value = "SUBMIT"/> */}
                        <button type="button" className="btn btn-success">SUBMIT</button>
                    </div>
                </div>
                <div className="card p-4 my-4" style={{ width: "88rem" }}>
                    <h4>ASSIGN BY YOU</h4>
                    <div className="row">
                        <div className="col-lg-12 mt-3">

                            <div className="panel panel-primary">

                                <table className="table table-bordered responsive">
                                    <thead>
                                    <tr>
                                            <th>Bug No.</th>
                                            <th>Project</th>
                                            <th>Issues</th>
                                            <th>Created</th>
                                            <th>Assign To</th>
                                            <th>Status</th>
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
