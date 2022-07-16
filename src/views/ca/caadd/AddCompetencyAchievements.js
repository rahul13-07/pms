import React from 'react'

export default function AddCompetencyAchievements() {
    return (
        <>
            <div className="container mt-5">
                <div className="card p-4" style={{ width: "88rem" }}>
                    <form>
                        <span className="badge bg-dark">ADD CA</span>
                    </form>
                    <form className="row g-3 mx-5 my-1">
                        <div className="col-md-3">
                            <label for="inputState" className="form-label">Technology<font color="red">*</font></label>
                            <select id="inputState" className="form-select">
                                <option value="">--Select Technology--</option>
                                <option value="php" >PHP</option>
                                <option value="android" >Android</option>
                                <option value="ios" >IOS</option>
                                <option value="webdesign" >Web Design</option>
                                <option value="general" >General</option>
                            </select>
                        </div>
                        <div className="col-md-3 mx-5">
                            <label for="inputCity" className="form-label">Title<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Title.." />
                        </div>

                        <div className="col-md-3 mx-5">
                            <label for="inputCity" className="form-label">Source<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Source.." />
                        </div>
                        <div className="col-md-3">
                            <label for="inputCity" className="form-label">Description</label>
                            <textarea className="form-label col-lg-10" placeholder="Description.."></textarea>
                        </div>
                        <div className="col-md-3 mx-5">
                            <label for="inputCity" className="form-label">Hours<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Hours.." />
                        </div>
                        <div className="col-md-3 mx-5">
                            <label for="inputCity" className="form-label">Assign To</label>
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
