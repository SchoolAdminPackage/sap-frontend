import React from 'react'

// import { isoDate } from '../../../common/helpers.js'
// import { graphql, gql } from 'react-apollo'
// import casual from 'casual'

// import style from './stylesheet.css'
// let query = gql`
// query ($student: String) {
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
      <ul>
      {this.prop.data.attendance.map((attendance) => (
        <li key={attendance.date} style={{backgroundColor: (attendance.type ? 'red' : 'yellow')}}><p>{attendance.date}</p></li>
      ))}
      </ul>
    )
  }
}

export default Component

