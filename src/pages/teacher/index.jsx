import React from 'react'

import Attendance from './component/Attendance.jsx'
import Grades from './component/Grades.jsx'

import './stylesheet.css'

export default class Component extends React.Component {
  tabs = ['attendance', 'grades']
  state = {layout: this.tabs[0]}

  render () {
    return (
      <div>
        <ul className='menuBar'>
          {this.tabs.map((tab) => (
            <li key={tab}><div className={'button green ' + (this.state.layout === tab ? 'tab_selected' : '')} onClick={() => this.setState({layout: tab})}>{tab}</div></li>
          ))}
        </ul>
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
