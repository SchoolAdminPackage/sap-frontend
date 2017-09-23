import React from 'react'

import style from './stylesheet.css'
import Attendance from './component/Attendance.jsx'
import Grades from './component/Grades.jsx'

class Main extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      layout: 'attendance'
    }
  }
  render () {
    return (
      <div>
        <div className={`row-2 ${style.menuBar}`}>
          <div className='button' onClick={() => this.setState({layout: 'attendance'})}>attendance</div>
          <div className='button' onClick={() => this.setState({layout: 'grades'})}>grades</div>
        </div>

        {
          this.state.layout === 'attendance' ? (
            <Attendance />
          ) : (
            <Grades />
          )
        }
      </div>
    )
  }
}

export default Main
