import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
export default function AddTimeSheet() {
    const [startdate, setStartDate] = useState("");
    const [value, setValue] = useState("");
    return (
        <>
            <div className="container mt-5">
                <div className="card p-4" style={{ width: "88rem" }}>
                    <form>
                        <span className="badge bg-dark mt-4 my-2">TODAY TIMESHEET</span>
                        <button type="button" className="btn btn-light mx-3">Add More</button>
                    </form>
                    <form className="row g-3 mx-5">
                        <div className="col-md-3">
                            <label for="inputCity" className="form-label">Date<font color="red">*</font></label>
                            <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="col-md-3 mx-3">
                            <label for="inputState" className="form-label">Project Name<font color="red">*</font></label>
                            <select id="inputState" className="form-select">
                                <option value="">--Select Project--</option>
                                <option value="Other" >Other</option>
                            </select>
                        </div>
                        <div className="col-md-3 mx-2">
                            <label for="inputCity" className="form-label">Task<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Task.." />
                        </div>
                        <div className="col-md-2 mx-1">
                            <label for="inputCity" className="form-label">Hours<font color="red">*</font></label>
                            {/* <input type="text" className="form-control" id="inputCity" placeholder="Hours.." /> */}
                            <TimePicker
                                onChange={(value) => setValue(value)}
                                value={value}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div className="container mt-5">
                <div className="card p-4" style={{ width: "88rem" }}>
                    <form>
                        <span className="badge bg-dark mt-4 my-2">Next DAY TIMESHEET</span>
                        {/* <button type="button" className="btn btn-secondary mt-4 my-2" disabled>NEXT DAY TIMESHEET</button> */}
                        <button type="button" className="btn btn-light mx-3">Add More</button>
                    </form>
                    <form className="row g-3 mx-5">
                        <div className="col-md-3 ">
                            <label for="inputCity" className="form-label">Date<font color="red">*</font></label>
                            <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="col-md-3 mx-3">
                            <label for="inputState" className="form-label">Project Name<font color="red">*</font></label>
                            <select id="inputState" className="form-select">
                                <option value="">--Select Project--</option>
                                <option value="Other" >Other</option>
                            </select>
                        </div>
                        <div className="col-md-3 mx-2">
                            <label for="inputCity" className="form-label">Task<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Task.." />
                        </div>
                        <div className="col-md-2 mx-1">
                            <label for="inputCity" className="form-label">Hours<font color="red">*</font></label>
                            {/* <input type="text" className="form-control" id="inputCity" placeholder="Hours.." /> */}
                            <TimePicker
                                onChange={(value) => setValue(value)}
                                value={value}
                            />
                        </div>
                        <div className="col-md-3 my-3">
                            <button type="button" className="btn btn-success">SUBMIT</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
