 import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const TimeSheetList = React.lazy(() => import('./views/timesheet/timesheetlist/TimeSheetList'))
const AddTimeSheet = React.lazy(() => import('./views/timesheet/addtimesheet/AddTimeSheet'))
const WorkingHours = React.lazy(() => import('./views/workinghours/WorkingHours'))
const Holidays = React.lazy(() => import('./views/holidays/Holidays'))
const LeaveList = React.lazy(() => import('./views/leave/leavelist/LeaveList'))
const AddLeave= React.lazy(() => import('./views/leave/addleave/AddLeave'))
const RecruitmentManagementSystem= React.lazy(() => import('./views/rms/RecruitmentManagementSystem'))
const TaskList = React.lazy(() => import('./views/task/tasklist/TaskList'))
const AddTask= React.lazy(() => import('./views/task/addtask/AddTask'))
const StaffManagementSystem= React.lazy(() => import('./views/sms/StaffManagementSystem')) 
const KnowledgeBase = React.lazy(() => import('./views/knowledgebase/knowledgeBase/KnowledgeBase'))
const AddKnowledgeBase= React.lazy(() => import('./views/knowledgebase/addknowledgeBase/AddKnowledgeBase'))
const Expense= React.lazy(() => import('./views/expense/Expense')) 
const Payroll= React.lazy(() => import('./views/payroll/Payroll')) 
const CompetencyAchievementsList = React.lazy(() => import('./views/ca/calist/CompetencyAchievementsList'))
const AddCompetencyAchievements= React.lazy(() => import('./views/ca/caadd/AddCompetencyAchievements'))
const BugTrackingSystemList = React.lazy(() => import('./views/bug/buglist/BugTrackingSystemList'))
const AddBug= React.lazy(() => import('./views/bug/addbug/AddBug'))

// // Base
// const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// // Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

// //Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('./views/charts/Charts'))

// // Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// // Notifications
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
// const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/timesheet', name: 'TimeSheet', component: TimeSheetList, exact: true },
  { path: '/timesheet/timesheetlist', name: 'TimeSheetList', component: TimeSheetList },
  { path: '/timesheet/addtimesheet', name: 'AddTimeSheet', component: AddTimeSheet },

  { path: '/workinghours', name: 'WorkingHours', component: WorkingHours},

  { path: '/holidays', name: 'Holidays', component: Holidays},

  { path: '/leave', name: 'Leave', component: LeaveList, exact: true },
  { path: '/leave/leavelist', name: 'LeaveList', component: LeaveList},
  { path: '/leave/addleave', name: 'AddLeave', component: AddLeave },
 
  { path: '/task', name: 'Task', component: TaskList, exact: true },
  { path: '/task/tasklist', name: 'TaskList', component: TaskList},
  { path: '/task/addtask', name: 'AddTask', component: AddTask },  

  { path: '/rms', name: 'RecruitmentManagementSystem', component: RecruitmentManagementSystem},

  { path: '/sms', name: 'StaffManagementSystem', component: StaffManagementSystem},

  { path: '/knowledgebase', name: 'Knowledgebase', component: TaskList, exact: true },
  { path: '/knowledgebase/knowledgeBase', name: 'KnowledgeBase', component: KnowledgeBase},
  { path: '/knowledgebase/addknowledgeBase', name: 'AddKnowledgeBase', component: AddKnowledgeBase },

  { path: '/expense', name: 'Expense', component: Expense},

  { path: '/payroll', name: 'Payroll', component: Payroll},

  { path: '/ca', name: 'CompetencyAchievements', component: CompetencyAchievementsList, exact: true },
  { path: '/ca/calist', name: 'CompetencyAchievementsList', component: CompetencyAchievementsList},
  { path: '/ca/caadd', name: 'AddCompetencyAchievements', component: AddCompetencyAchievements },   

  { path: '/bug', name: 'BugTrackingSystem', component: BugTrackingSystemList, exact: true },
  { path: '/bug/buglist', name: 'BugTrackingSystemList', component: BugTrackingSystemList},
  { path: '/bug/addbug', name: 'AddBug', component: AddBug },   

  // { path: '/base', name: 'Base', component: Cards, exact: true },
  // { path: '/base/accordion', name: 'Accordion', component: Accordion },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', component: Cards },
  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/base/navs', name: 'Navs', component: Navs },
  // { path: '/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/base/progress', name: 'Progress', component: Progress },
  // { path: '/base/spinners', name: 'Spinners', component: Spinners },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  // { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  // { path: '/forms/select', name: 'Select', component: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  // { path: '/forms/range', name: 'Range', component: Range },
  // { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', component: Layout },
  // { path: '/forms/validation', name: 'Validation', component: Validation },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/brands', name: 'Brands', component: Brands },
  // { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
]

export default routes
