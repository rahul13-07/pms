import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
export default function Otp() {
    const [email, setEmail] = useState("")
    let history = useHistory();
    const fp = (event) => {
        event.preventDefault()
        var val = Math.floor(1000 + Math.random() * 9000);
        var bodyFormData = new FormData()
        bodyFormData.append('email', email)
        bodyFormData.append('otp', val)
        axios({
            method: 'post',
            url: 'http://localhost/ADMINPANEL_LOGINAPI/otpsend_api.php',
            data: bodyFormData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (response) {
            if (response && response.data.success === true) {
                alert("Otp Send Successfully");
                history.push("/otpchecker");
            }
            else {
                if (response.data.msg === 'email not found') {
                    alert("email not registered");
                    history.push('/404')
                }
                else {
                    console.log(response.data.success)
                    alert("please enter email");
                }

                console.log(response.data.msg)
            }
        })
            .catch(function (response) {
                console.log(response)
            })
    }
    return (
        <div>
            <center><form className='p-4'>
                <div className="col-md-3 my-3 form-group has-feedback">
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div className="col-xs-4">
                    <input type="submit" className="btn btn-primary btn-block btn-flat" name="submit" value="Send Otp" onClick={(e) => fp(e)} />
                </div>
            </form></center>
        </div>
    )
}
