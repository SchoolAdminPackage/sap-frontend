import React from 'react'

import style from '../stylesheet.css'
<<<<<<< Updated upstream

=======
import { isoDate } from '../../../common/helpers.js'
import { graphql, gql } from 'react-apollo'

// import casual from 'casual'

// import style from './stylesheet.css'
// let query = gql`
// query myQuery($student: String) {
//   attendance(student: $student) {
//     type
//     date
//   }
// }
// `

// @graphql(query, {
//   options: {
//     variables: { student: window.localStorage.student }
//   }
// })
>>>>>>> Stashed changes

class Component extends React.Component {
  constructor (props) {
    super(props)

    ///// DEBUG ONLY
    this.prop = {}
    this.prop.data = {}
<<<<<<< Updated upstream
    this.prop.data.attendance = []
    for (let i = 0; i < 100; i++) {
      this.prop.data.attendance.push({date: i, type: true})
    }
=======
    this.prop.data.attendance = [{date: '03', type: true}, {date: '04', type: false}, {date: '06', type: true}, {date: '07', type: true}]
>>>>>>> Stashed changes
    //////
  }


  render () {
    return (
<<<<<<< Updated upstream
      <ul className={`${style.attendanceWrapper}`}>
        {this.prop.data.attendance.map((attendance) => (
          <li key={attendance.date} ><p style={{backgroundColor: (attendance.type ? 'red' : 'yellow')}}>{attendance.date}</p></li>
        ))}
=======
      <div className={`${style.wrapper}`}>
      <ul className={`${style.columns}`}>
      {this.prop.data.attendance.map((attendance) => (
        <li className={`${style.attenBox}`} key={attendance.date} ><p style={{backgroundColor: (attendance.type ? 'red' : 'yellow'), width: '50px',padding:'20px', top:'0px'}}>{attendance.date}</p></li>
      ))}
>>>>>>> Stashed changes
      </ul>
    )
  }
}

export default Component

