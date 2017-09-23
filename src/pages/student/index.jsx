import React from 'react'

import Attendance from './component/Attendance.jsx'
import Grades from './component/Grades.jsx'

import './stylesheet.css'

export default class Component extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      layout: 'attendance'
    }
  }

  render () {
    return (
      <div>
        <div className='menuBar'>
          <div><div className='button' onClick={() => this.setState({layout: 'attendance'})}>attendance</div></div>
          <div><div className='button' onClick={() => this.setState({layout: 'grades'})}>grades</div></div>
        </div>
        <div className='wrapper'>
          {
            this.state.layout === 'attendance' ? (
              <Attendance />
            ) : (
              <Grades />
            )
          }
        </div>
      </div>
    )
  }
}
