import React from 'react'

export default function KnowledgeBase() {
    return (
        <div>
             <div className="card p-4 my-5" style={{ width: "88rem" }}>
                    <h4>Knowledge Base</h4>
                    <div className="row">
                        <div className="col-lg-12 mt-3">

                            <div className="panel panel-primary">

                                <table className="table table-bordered responsive">
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Date</th>
                                            <th>Technology</th>
                                            <th>Title</th>
                                            <th>Source</th>
                                            <th>Posted By</th>
                                            <th>Manage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>18-01-2018</td>
                                            <td>General</td>
                                            <td>How to forward multiple email at a time</td>
                                            <td>External Link</td>
                                            <td></td>
                                            <td></td>
                                            
                                            
                                        
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
