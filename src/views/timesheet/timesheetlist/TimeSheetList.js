import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function TimeSheetList() {
    const [startdate, setStartDate] = useState((new Date()).getDate())
    return (
        <>
            <div className="container">
                <div className=" container row mt-5">
                    <div className="search">
                        <div className="span3 filterdiv my-2">
                            {/* <input type="text" className="form-control datepicker" id="date" placeholder="Select Date.." /> */}
                            <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="span2 filterdiv my-2">
                            <select className="form-control" id="project" name="project_name[]" style={{
                                padding: "4px",
                                borderRadius: "4px",
                                direction: "ltr"
                            }}>
                                <option value="">--Select Project--</option>
                                <option value="Other" >Other</option>
                            </select>
                        </div>
                        <button className="btn-primary border"><i className="fa fa-search " aria-hidden="true"></i> Search</button>
                    <button className="btn-warning border mx-2"><i className="fa fa-times" aria-hidden="true"></i> Clear</button>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="panel panel-primary">
                                <div className="panel-heading">

                                    <div className="panel-title">TIMESHEET</div>

                                </div>

                                <table className="table table-bordered responsive">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Date</th>
                                            <th>Project Name</th>
                                            <th>Task</th>
                                            <th>Hours</th>
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
