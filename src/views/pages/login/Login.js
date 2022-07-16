import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(''); // return adjusted time or original string
}
const Login = () => {
  const [username, setemail] = useState('')
  const [password, setpassword] = useState('')
  let history = useHistory();
  const login = (event) => {
    event.preventDefault()

    var bodyFormData = new FormData()
    bodyFormData.append('username', username)
    bodyFormData.append('password', password)
    axios({
      method: 'post',
      url: 'http://localhost/ADMINPANEL_LOGINAPI/login_api.php',
      data: bodyFormData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(function (response) {
      if (response && response.data.success === true) {
        localStorage.setItem("authentication", "true");
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        history.push("/");
        // console.log(response.data.msg);
        // console.log(response.data.email);
      }
      else {
        if (response.data.msg === 'user not found') {
          alert("user not found");
        }
        else {
          console.log(response.data.success)
          alert("username or password is empty");
        }

        console.log(response.data.msg)
      }
    })
      .catch(function (response) {
        console.log(response)
      })

    var today = new Date();
    // var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDay();
    let date = new Date().toJSON().slice(0, 10);
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    time = tConvert(time);
    var bodyFormData1 = new FormData()
    bodyFormData1.append('username', username)
    bodyFormData1.append('logintime', time)
    bodyFormData1.append('date', date)
    axios({
      method: 'post',
      url: 'http://localhost/ADMINPANEL_LOGINAPI/user_date_time_api.php',
      data: bodyFormData1,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(function (response) {
      if (response && response.data.success === true) {
        console.log("success");
        console.log("login time " + response.data.logintime);
        localStorage.setItem("logintime", response.data.logintime);
        localStorage.setItem("logouttime", response.data.logouttime);
      }
      else {
        console.log("fail");
      }
    })
      .catch(function (response) {
        console.log("error")
      })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={(e) => login(e)}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to="/otp">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2 className='my-2'>Sign up</h2>
                    <p className='my-4'>
                      Enter Your Details And Start Journey With Us.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
