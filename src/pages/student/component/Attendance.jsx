import React from 'react'

import { isoDate } from '../../../common/helpers.js'

export default class Component extends React.Component {
  state = {attendance: []}

  constructor (props) {
    super(props)

    fetch('http://35.3.9.34:8080/query/allAttendanceEvents', {
      method: 'post',
      body: JSON.stringify({
        id: 1
      }),
      headers: new Headers({"Content-Type": "application/json"})
    })
      .then((response) => response.json())
      .then((attendance) => {
        this.setState({attendance: attendance.attendanceEvents})
      })
  }


  render () {
    console.log(this.state.attendance)
    return (
      <ul className={'student__attendance'}>
        {this.state.attendance.map((attendance) => (
          <li key={attendance.date}><p style={{backgroundColor: (attendance.tardy ? '#f1c40f' : '#b5525f')}} className='student__attendance_day'>{isoDate(attendance.date)}</p></li>
        ))}
      </ul>
    )
  }
}
