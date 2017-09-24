import React from 'react'

import { isoDate } from '../../../common/helpers.js'

export default class Component extends React.Component {
  state = {attendance: []}

  constructor (props) {
    super(props)

    fetch('http://66.175.211.152/query/allAttendanceEvents', {
      method: 'post',
      body: JSON.stringify({
        id: 1
      }),
      headers: new Headers({"Content-Type": "application/json"})
    })
      .then((response) => response.json())
      .then((attendance) => {


        console.log(attendance)


        this.setState({attendance: attendance.attendanceEvents})
      })
      this.state = {
        attendance: []
      }
  }


  render () {
    return (
      <ul className={'student__attendance'}>
        {this.state.attendance.map((attendance) => (
          <li key={attendance.date}><p style={{backgroundColor: (attendance.tardy ? '#f1c40f' : '#b5525f')}} className='student__attendance_day'>{attendance.date}</p></li>
        ))}
      </ul>
    )
  }
}
