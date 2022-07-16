import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="p-2" caret={false}>
        <CAvatar src={avatar8} size="lg" />
        <h1 className="navbar-brand "> {localStorage.getItem("username")} </h1>
      </CDropdownToggle>
      
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="#/profile">
        <CIcon icon={cilUser} className="me-2" />
          View Profile
        </CDropdownItem>
        <CDropdownItem href="#/forgotpassword">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Change Password
        </CDropdownItem>
        <CDropdownItem href="#/logout">
        <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
        
        <CDropdownDivider />
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
