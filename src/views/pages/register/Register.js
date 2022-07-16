import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
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

const Register = () => {
  let history = useHistory();
  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [repassword, setrepassword] = useState('')
  
  const validation = ()=>{
    if(password === repassword){
        return true;
    }
    return false;
  }

  const register = (event) => {
    if(!validation()){
       alert("Password should be Same");
    }
    else{
    event.preventDefault()
    console.log(email)
    console.log(password)
    console.log('clicked')

    var bodyFormData = new FormData()
    bodyFormData.append('username', username)
    bodyFormData.append('email', email)
    bodyFormData.append('password', password)
    axios({
      method: 'post',
      url: 'http://localhost/ADMINPANEL_LOGINAPI/register_api.php',
      data: bodyFormData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).then(function (response) {  
      if(response && response.data.success === true){
          if(response.data.msg === 'already a user'){
            alert("Already a User with this email-id");
            history.push("/login")
          }
          else{
            alert("Welcome!")
            history.push("/dashboard");
          }
      }
      else{
        alert("fill all details")
      }
    })
      .catch(function (response) {
        console.log(response)
      })
    }
}
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      onChange={(e) => setrepassword(e.target.value)}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={(e) => register(e)}>
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
