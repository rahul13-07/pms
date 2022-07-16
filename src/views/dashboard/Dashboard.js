import React, { lazy } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {

  // if(localStorage.getItem('authentication')!=="true"){
  //   return <Redirect to='/login'  />
  // }

  return (
    <>
      <WidgetsDropdown />
      <div className="card p-2" style={{ width: "88rem" }}>
        <h4>Project</h4>
        <div className="row">
          <div className="col-sm-12 mt-3">

            <div className="panel panel-primary">

              <table className="table table-bordered responsive">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Running Status</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="5"><center>No record found!</center></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-3 card p-2" style={{ width: "88rem" }}>
        <h4>Timesheet</h4>
        <div className="row">
          <div className="col-sm-12 mt-3">

            <div className="panel panel-primary">

              <table className="table table-bordered responsive">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Date</th>
                    <th>Project Name</th>
                    <th>Task</th>
                    <th>Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="5"><center>No record found!</center></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard
