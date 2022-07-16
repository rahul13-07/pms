import React from 'react'

export default function AddKnowledgeBase() {
    return (
        <div className="container mt-5">
            <div className="card p-4" style={{ width: "88rem" }}>
                <form>
                    <span className="badge bg-dark">ADD KB</span>
                </form>
                <form className="row g-3  my-1">
                <div className="col-md-4">
                            <label for="inputState" className="form-label">Technology<font color="red">*</font></label>
                            <select id="inputState" className="form-select">
                                <option value="">--Select Technology--</option>
                                <option value="php" >PHP</option>
                                <option value="android" >Android</option>
                                <option value="ios" >IOS</option>
                                <option value="webdesign" >Web Design</option>
                                <option value="general" >General</option>
                            </select>
                        </div>
                    <div className="col-md-3 ">
                        <label for="inputCity" className="form-label">Title<font color="red">*</font></label>
                        <input type="text" className="form-control" id="inputCity" placeholder="Title.." />
                    </div>
                    <div className="col-md-3 ">
                        <label for="inputCity" className="form-label">Link<font color="red">*</font></label>
                        <input type="text" className="form-control" id="inputCity" placeholder="Link.." />
                    </div>
                    <div className="col-md-3 ">
                        <label for="inputCity" className="form-label">Details<font color="red">*</font></label>
                        <textarea name="details" className="form-control ckeditor" required></textarea>
                    </div>

                </form>
                <div className="col-md-3 p-1 my-4">
                        <label for="inputCity" className="form-label"></label>
                        {/* <input type="button" className="form-control my-2" id="inputCity" value = "SUBMIT"/> */}
                        <button type="button" className="btn btn-success">SUBMIT</button>
                    </div>

            </div>
        </div>
    )
}
