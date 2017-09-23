import React from 'react'

// import { isoDate } from '../../../common/helpers.js'
// import { graphql, gql } from 'react-apollo'
// import casual from 'casual'

import style from '../stylesheet.css'
// let queryCourse = gql`
// query ($teacher: String) {
//   courses(teacher: $teacher) {
//     name
//   }
// }
// `
// let query2 = gql`
// query ($course: String) {
//   courses(course: $course) {
//     student
//   }
// }
// `

// @graphql(queryStudents, {
//   options: {
//     variables:
//   }
// })
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
    this.prop.data.grades = [{course: 'math', name: 'test', percent: 20}, {course: 'math', name: 'test2', percent: 20}, {course: 'english', percent: 59, name: 'quiz'}, {course: 'cs', percent: 99, name: 'project'}]
    this.prop.data.courses = [{name: 'math'}, {name: 'english'}, {name: 'cs'}]
    //////
  }

  render () {
    return (
      <ul className={style.grades}>
        {this.prop.data.courses.map((course) => (
            <li key={course.name} className={style.course}>
              <p>{course.name}</p>
              <ul>
                {this.prop.data.grades.map((grade) => (
                  grade.course === course.name ? (
                    <li key={grade.name}>
                      <p>{grade.name}</p>
                      <p>{grade.percent}</p>
                    </li>
                  ) : ''
                ))}
              </ul>
            </li>
        ))}
      </ul>
    )
  }
}

export default Component

