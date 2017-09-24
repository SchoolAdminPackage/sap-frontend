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
<<<<<<< Updated upstream
=======
        console.log(attendance)
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <li key={attendance.date}><p style={{backgroundColor: (attendance.tardy ? '#f1c40f' : '#b5525f')}} className='student__attendance_day'>{isoDate(attendance.date)}</p></li>
=======
          <li key={attendance.date}><p style={{backgroundColor: (attendance.tardy ? '#b5525f' : '#f1c40f')}} className='student__attendance_day'>{attendance.date}</p></li>
>>>>>>> Stashed changes
        ))}
      </ul>
    )
  }
}
