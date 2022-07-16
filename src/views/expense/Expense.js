import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Expense() {
    const [startdate, setStartDate] = useState("");
    return (
        <div className='container my-5'>
            <div className="card p-4" style={{ width: "88rem" }}>
                    <form>
                        <span className="badge bg-dark">ADD EXPENSE</span>
                    </form>
                    <form className="row g-3  my-1">
                        <div className="col-md-2 mx-5">
                            <label for="inputCity" className="form-label">Date<font color="red">*</font></label>
                            {/* <input type="text" className="form-control" id="inputCity" placeholder="Date.." /> */}
                            <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="col-md-2 ">
                            <label for="inputCity" className="form-label">Title<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Title.." />
                        </div>
                        <div className="col-md-2 mx-5">
                            <label for="inputCity" className="form-label">Amount<font color="red">*</font></label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Amount.." />
                        </div>
                        <div className="col-md-2 mx-2 ">
                            <label for="inputCity" className="form-label">Image</label>
                            <input type="file" className="form-control" id="inputCity" placeholder="Title.." />
                        </div>
                        <div className="col-md-3  mx-5 my-4">
                        <label for="inputCity" className="form-label"></label>
                        {/* <input type="button" className="form-control my-2" id="inputCity" value = "SUBMIT"/> */}
                        <button type="button" className="btn btn-success">SUBMIT</button>
                    </div>

                    </form>
                    
                </div>
        </div>
    )
}
