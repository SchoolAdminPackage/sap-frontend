import React from 'react'

// import { isoDate } from '../../../common/helpers.js'
// import { graphql, gql } from 'react-apollo'
// import casual from 'casual'

import style from '../stylesheet.css'
// let query = gql`
// query ($student: String) {
//   grades(student: $student) {
//     course
//     name
//     percent
//   }
//
//   courseMemberships(student: $student) {
//     name
//   }
// }
// `

// @graphql(query, {
//   options: {
//     variables: { student: window.localStorage.student }
//   }
// })


function calcGrade(assignments, course) {
  let x = 0
  let amt = 0
  for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].course == course.name) {
      x += assignments[i].percent
      amt++
    }
  }
  x = x / amt
  return x
}


class Component extends React.Component {
  constructor (props) {
    super(props)

    ///// DEBUG ONLY
    this.prop = {}
    this.prop.data = {}
    this.prop.data.assignments = [{course: 'math', name: 'test', percent: 20}, {course: 'math', name: 'test2', percent: 30}, {course: 'english', percent: 59, name: 'quiz'}, {course: 'cs', percent: 99, name: 'project'}]
    this.prop.data.courses = [{name: 'math'}, {name: 'english'}, {name: 'cs'}]
    //////

    this.state = {
      activeCourse: ''
    }
  }



  render () {
    return (
      <ul className={style.grades}>
        {this.prop.data.courses.map((course) => (
            <li key={course.name} className={style.course} onClick={() => this.setState({activeCourse: course.name})}>
              <p className={style.leftPane}>{course.name}</p>
              <p className={style.rightPane}>{calcGrade(this.prop.data.assignments, course)}</p>
              {
                this.state.activeCourse === course.name ? (
                  <ul className={style.courseBreakdown}>
                    {this.prop.data.assignments.map((assignment) => (
                      assignment.course === course.name ? (
                        <li key={assignment.name}>
                          <p className={style.leftPane}>{assignment.name}</p>
                          <p className={style.rightPane}>{assignment.percent}</p>
                        </li>
                      ) : ''
                    ))}
                  </ul>
                ) : ''
              }
            </li>
        ))}
      </ul>
    )
  }
}

export default Component

