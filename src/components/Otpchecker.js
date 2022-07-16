import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
export default function Otpchecker() {
    const [otp, setOtp] = useState("")
    let history = useHistory();
    const fp = (event) => {
        event.preventDefault()
        var bodyFormData = new FormData()
        bodyFormData.append('otp', otp)
        axios({
            method: 'post',
            url: 'http://localhost/ADMINPANEL_LOGINAPI/otpcheck_api.php',
            data: bodyFormData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (response) {
            if (response && response.data.success === true) {
                alert("Otp Match");
                history.push("/forgotpassword");
                console.log(response.data.message)
            }
            else {
                if (response.data.message === 'otp mismatch') {
                    alert("otp mismatch");
                    history.push('/404')
                }
                else {
                    console.log(response.data.success)
                    alert("please enter otp");
                }

                console.log(response.data.message)
            }
        })
            .catch(function (response) {
                console.log(response)
            })
    }
    return (
        <div>
            <center><form className='p-4'>
                <div className="col-md-2 my-3 form-group has-feedback">
                    <input type="text" className="form-control" placeholder="Enter OTP" name="otp" onChange={(e) => setOtp(e.target.value)} />
                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div className="col-xs-4">
                    <input type="submit" className="btn btn-primary btn-block btn-flat" name="submit" value="Check" onClick={(e) => fp(e)} />
                </div>
            </form></center>
        </div>
    )
}
