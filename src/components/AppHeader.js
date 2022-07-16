import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CDropdownItem,
  CAvatar,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { AppHeaderDropdown } from './header/index'
import { cilBell, cilEnvelopeOpen, cilList, cilLockLocked, cilMenu } from '@coreui/icons'
//import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-6">

      <div className="container-fluid">
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <AppHeaderDropdown />
        {/* <h3 className="navbar-brand mt-4 mb-2 mx-4"> Rahul Tyagi </h3> */}
        <form className="d-flex">
          <CDropdownItem href="#/logout" >
            <CIcon icon={cilLockLocked} className="me-2" />
            Log Out
          </CDropdownItem>
        </form>
      </div>
    </CHeader>
  )
}

export default AppHeader
