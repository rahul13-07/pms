import React from 'react'

export default function () {
    return (
        <div className='container my-5'>
            <div className="card p-4" style={{ width: "88rem" }}>
                <form>
                    <span className="badge bg-dark">PAYROLL</span>
                </form>
                <form className="row g-3  my-1">
                    <div className="col-md-2 mx-5">
                        <label for="inputCity" className="form-label">Year</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="Year.." />
                    </div>
                    <div className="col-md-3">
                        <label for="inputCity" className="form-label">Month</label>
                        <select className="form-control month_pay" name="payroll_month" id="month">
                            <option value="" >--Select Month--</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>
                </form>

            </div>
        </div>
    )
}
