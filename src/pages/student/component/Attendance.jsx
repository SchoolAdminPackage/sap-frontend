import React from 'react'
import style from '../stylesheet.css'
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

class Component extends React.Component {
  constructor (props) {
    super(props)

    ///// DEBUG ONLY
    this.prop = {}
    this.prop.data = {}
    this.prop.data.attendance = [{date: '03', type: true}, {date: '04', type: false}, {date: '06', type: true}]
    //////
  }


  render () {
    return (
      <div className={`${style.wrapper}`}>
      <ul className={`${style.columns}`}>
      {this.prop.data.attendance.map((attendance) => (
        <li className={`${style.attenBox}`} key={attendance.date} ><p style={{backgroundColor: (attendance.type ? 'red' : 'yellow'), width: '50px', top:'0px'}}>{attendance.date}</p></li>
      ))}
      </ul>
      </div>
    )
  }
}

export default Component

