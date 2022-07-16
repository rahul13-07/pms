import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function AddLeave() {
    const [startdate, setStartDate] = useState("");
    return (
        <>
            <div className="container mt-5">
                <div className="card p-4" style={{ width: "88rem" }}>
                    <form>
                        <button type="button" className="btn btn-secondary mt-4 my-2" disabled>ADD LEAVE</button>
                    </form>
                    <form className="row g-3 mx-5 my-1">
                        <div className="col-md-3">
                            <label for="inputCity" className="form-label">From Date<font color="red">*</font></label>
                            {/* <input type="text" className="form-control" id="inputCity" placeholder = "Start Date.." /> */}
                            <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="col-md-3 mx-3">
                            <label for="inputCity" className="form-label">To Date<font color="red">*</font></label>
                            {/* <input type="text" className="form-control" id="inputCity" placeholder = "End Date.."/> */}
                            <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="col-md-3">
                            <label for="inputCity" className="form-label">Reason<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder = "Reason.."/>
                        </div>
                        <div className="col-md-3">
                        <label for="inputCity" className="form-label"></label>
                        {/* <input type="button" className="form-control my-2" id="inputCity" value = "SUBMIT"/> */}
                            <button type="button" className="btn btn-success">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
