import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function StaffManagementSystem() {
    const [startdate, setStartDate] = useState("");
    return (
        <>
            <div className="container mt-5">
                <div className="card p-4" style={{ width: "88rem" }}>
                    <form>
                        <span className="badge bg-dark">ADD SMS</span>
                    </form>
                    <form className="row g-3  my-1">
                        <div className="col-md-3 mx-5">
                            <label for="inputCity" className="form-label">Date<font color="red">*</font></label>
                            {/* <input type="text" className="form-control" id="inputCity" placeholder="Date.." /> */}
                            <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="col-md-3 ">
                            <label for="inputCity" className="form-label">Message<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Message.." />
                        </div>
                        <div className="col-md-3  mx-5 my-5">
                        <label for="inputCity" className="form-label"></label>
                        {/* <input type="button" className="form-control my-2" id="inputCity" value = "SUBMIT"/> */}
                        <button type="button" className="btn btn-success">SUBMIT</button>
                    </div>

                    </form>
                    
                </div>
                <div className="card p-4 my-5" style={{ width: "88rem" }}>
                    <h4>Staff Management System</h4>
                    <div className="row">
                        <div className="col-lg-12 mt-3">

                            <div className="panel panel-primary">

                                <table className="table table-bordered responsive">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Date</th>
                                            <th>Message</th>
                                            <th>Status</th>
                                            <th>Reason</th>
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
