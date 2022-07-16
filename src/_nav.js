import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'TimeSheet',
    to: '/timesheet/addtimesheet',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'TimeSheetList',
        to: '/timesheet/timesheetlist',
      },
      {
        component: CNavItem,
        name: 'AddTimeSheet',
        to: '/timesheet/addtimesheet',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'WorkingHours',
    to: '/workinghours',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Holidays',
    to: '/holidays',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Leave',
    to: '/leave',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'LeaveList',
        to: '/leave/leavelist',
      },
      {
        component: CNavItem,
        name: 'AddLeave',
        to: '/leave/addleave',
      },
      
    ],
  }, 
  {
    component: CNavItem,
    name: 'RecruitmentManagementSystem',
    to: '/rms',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Task',
    to: '/task',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'TaskList',
        to: '/task/tasklist',
      },
      {
        component: CNavItem,
        name: 'AddTask',
        to: '/task/addtask',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'StaffManagementSystem',
    to: '/sms',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Knowledgebase',
    to: '/knowledgebase',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'KnowledgeBase',
        to: '/knowledgebase/knowledgeBase',
      },
      {
        component: CNavItem,
        name: 'AddKnowledgeBase',
        to: '/knowledgebase/addknowledgeBase',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Expense',
    to: '/expense',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Payroll',
    to: '/payroll',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'CompetencyAchievements',
    to: '/ca',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CompetencyAchievementsList',
        to: '/ca/calist',
      },
      {
        component: CNavItem,
        name: 'AddCompetencyAchievements',
        to: '/ca/caadd',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'BugTrackingSystem',
    to: '/bug',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'BugTrackingSystemList',
        to: '/bug/buglist',
      },
      {
        component: CNavItem,
        name: 'AddBug',
        to: '/bug/addbug',
      },
    ],
  }
]

export default _nav
