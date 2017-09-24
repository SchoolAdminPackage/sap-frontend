import React from 'react'

import { isoDate } from '../../../common/helpers.js'

export default class Component extends React.Component {
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

    fetch('http://35.3.9.34:8080/query/allAttendanceEvents', {
      method: 'post',
      body: JSON.stringify({
        id: 1
      }),
      headers: new Headers({"Content-Type": "application/json"})
    })
      .then((response) => response.json())
      .then((attendance) => {
        this.setState({attendance: attendance})
      })
  }


  render () {
    return (
      <ul className={'student__attendance'}>
        {this.state.attendance.map((attendance) => (
          <li key={attendance.date}><p style={{backgroundColor: (attendance.type ? '#b5525f' : '#f1c40f')}} className='student__attendance_day'>{isoDate(attendance.date)}</p></li>
        ))}
      </ul>
    )
  }
}
