import React from 'react'
import ReactDOM from 'react-dom'

import './grid.css'
import './index.css'

import Student from './pages/student/index.jsx'
import Teacher from './pages/teacher/index.jsx'
import Admin from './pages/admin/index.jsx'
import NewSchool from './pages/new-school/index.jsx'
import SchoolSetup from './pages/school-setup/index.jsx'

///////// DEBUG ONLY
window.localStorage.layout = 'teacher'
/////////


let Component
switch (window.localStorage.layout) {
  case 'student':
    Component = Student
    break
  case 'teacher':
    Component = Teacher
    break
  case 'admin':
    Component = Admin
    break
  case 'invalid':
    Component = Invalid
    break
  case 'new-school':
    Component = NewSchool
    break
  case 'school-setup':
    Component = SchoolSetup
    break
}


ReactDOM.render(
  <Component />,
  document.getElementById('app')
)
