import React from 'react'

import style from '../stylesheet.css'

class Component extends React.Component {
  constructor (props) {
    super(props)

    ///// DEBUG ONLY
    this.prop = {}
    this.prop.data = {}
    this.prop.data.attendance = []
    for (let i = 0; i < 100; i++) {
      this.prop.data.attendance.push({date: i, type: true})
    }
    //////
  }


  render () {
    return (
      <ul className={`${style.attendanceWrapper}`}>
        {this.prop.data.attendance.map((attendance) => (
          <li key={attendance.date} ><p style={{backgroundColor: (attendance.type ? 'red' : 'yellow')}}>{attendance.date}</p></li>
        ))}
      </ul>
    )
  }
}

export default Component

