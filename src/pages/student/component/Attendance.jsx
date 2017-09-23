import React from 'react'

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
  }


  render () {
    return (
      <ul className={'student__attendance'}>
        {this.prop.data.attendance.map((attendance) => (
          <li key={attendance.date} ><p style={{backgroundColor: (attendance.type ? '#b5525f' : '#f1c40f')}} className='student__attendance_day'>{attendance.date}</p></li>
        ))}
      </ul>
    )
  }
}
