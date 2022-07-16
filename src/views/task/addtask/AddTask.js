import React from 'react'

export default function AddTask() {
    return (
        <>
            <div className="container mt-5">
                <div className="card p-4" style={{ width: "88rem" }}>
                    <form>
                        <span className="badge bg-dark">ADD TASK</span>
                    </form>
                    <form className="row g-3 mx-5 my-1">
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Project<font color="red">*</font></label>
                            <select id="inputState" className="form-select">
                                <option value="">--Select Project--</option>
                                <option value="Other" >Other</option>
                            </select>
                        </div>
                        <div className="col-md-3 mx-5">
                            <label for="inputCity" className="form-label">Hours<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Hours.." />
                        </div>
                        <div className="col-md-3 mx-4">
                            <label for="inputCity" className="form-label">Description<font color="red">*</font></label>
                            <textarea className="form-label" placeholder="Description.."></textarea>
                        </div>
                        <div className="col-md-3">
                            <label for="inputCity" className="form-label">Assign Task<font color="red">*</font></label>
                            <textarea className="form-label" placeholder="Description.."></textarea>
                        </div>
                    </form>
                    <div className="col-md-3 p-2 mx-5 my-3">
                        <label for="inputCity" className="form-label"></label>
                        {/* <input type="button" className="form-control my-2" id="inputCity" value = "SUBMIT"/> */}
                        <button type="button" className="btn btn-success">SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    )
}
