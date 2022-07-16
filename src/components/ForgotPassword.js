import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
export default function ForgotPassword() {
    const [enteremail, setEnteremail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [checked, setChecked] = useState('')
    let history = useHistory();
    const fp = (event) => {
        event.preventDefault()
        if(!checked){
          alert('must accept terms and conditions')
          return;
        }
        console.log(localStorage.getItem('username'));
        console.log('clicked')
        if (password !== repassword) {
            alert("Password should be same");
            return;
        }
        var bodyFormData = new FormData()
        bodyFormData.append('email', enteremail)
        bodyFormData.append('password', password)
        axios({
            method: 'post',
            url: 'http://localhost/ADMINPANEL_LOGINAPI/passwordupdate_api.php',
            data: bodyFormData,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (response) {
            if (response && response.data.success === true) {
                alert("Password successfully changed");
                localStorage.setItem('authentication', false);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('email', response.data.email);
                history.push("/login");
                console.log(response.data.message);
            }
            else {
                if (response.data.message === 'user not found') {
                    alert("user not found");
                }
                else {
                    console.log(response.data.success)
                    alert("username or password is empty");
                }

                console.log(response.data.message)
            }
        })
            .catch(function (response) {
                console.log(response)
            })
    }
    return (
        <center><div className="mx-5 my-5">
            <div className="register-box">

                <div className="register-box-body">
                    <h1 className="login-box-msg p-4">Change Password</h1>

                    <form className='my-5'>

                        <div className=" col-md-5 form-group has-feedback my-4">
                            <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e) => setEnteremail(e.target.value)} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="col-md-5 form-group has-feedback my-4">
                            <input type="password" className="form-control" placeholder="Password" name="newpass" id="password" onChange={(e) => setPassword(e.target.value)} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="col-md-5 form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Retype password" name="conpass"
                                id="password" onChange={(e) => setRepassword(e.target.value)} />
                            <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                        </div>
                        <div className="row my-4">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label>
                                        <input type="checkbox" onChange={(e) => setChecked(e.target.value)}/> I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4 my-4">
                                <input type="submit" className="btn btn-primary btn-block btn-flat" name="submit" value="Update" onClick={(e) => fp(e)} />
                            </div>
                        </div>
                    </form>
                    <a href="/login" className="text-center">I already have a membership</a>
                </div>
            </div>
        </div></center>
    )
}
