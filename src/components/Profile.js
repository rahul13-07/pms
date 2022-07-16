import React from 'react'
import { useHistory } from 'react-router-dom'
export default function Profile() {
    const history = useHistory()
    return (
        <>
            <center><div className="container my-auto p-4" >
                <h1 className='my-4'>Edit Profile</h1>

                <div className='col-md-3'>
                    <div className="text-center">
                        <img src="//placehold.it/100" className="avatar img-circle" alt="avatar" />
                        <h6 className='my-1'>Upload a different photo...</h6>
                        <input type="file" className="my-4 form-control" />
                    </div>
                </div>
                <form className="form-horizontal my-5">
                    <div className="form-group my-3">
                        <label className="col-md-3 control-label">Username:</label>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="fname" value={localStorage.getItem("username")} />
                        </div>
                    </div>

                    <div className="form-group my-3">
                        <label className="col-lg-3 control-label">Email:</label>
                        <div className="col-md-4">
                            <input className="form-control" disabled type="email" name="email" value={localStorage.getItem("email")} />
                        </div>
                    </div>

                    <div className="form-group my-3">
                        <label className="col-md-3 control-label"></label>
                        <div className="col-md-8">
                            <input type="submit" name="submit" className="btn btn-primary" value="Save Changes" />
                            <span></span>
                            <input type="reset" className="mx-2 btn btn-default" onClick={history.goBack} value="Cancel" />
                        </div>
                    </div>
                </form>
            </div></center>
        </>
    )
}
