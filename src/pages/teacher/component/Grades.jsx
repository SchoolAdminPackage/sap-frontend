import React from 'react'

// import casual from 'casual'

import style from '../stylesheet.css'

class Component extends React.Component {
  constructor (props) {
    super(props)

    ///// DEBUG ONLY
    this.prop = {}
    this.prop.data = {}
    this.prop.data.courses = [{name: 'math', period: 'A', students: [
      {firstName: "Anton", lastName: "Outkine"}
    ]}]
    this.prop.data.grades = [{course: 'math', name: 'test', percent: 20}, {course: 'math', name: 'quiz', percent: 40}, {course: 'math', name: 'worksheet', percent: 80}]
    //////

    this.state = {
      activeCourse: '',
      activeStudent: ''
    }
  }

  render () {
    return (
      <ul className={style.courseWrapper}>
        {this.prop.data.courses.map((course) => (
            <li key={course.name} className={style.course} onClick={() => this.setState({activeCourse: course.name})}>
              <p className='center'>{course.name}</p>
              {
                this.state.activeCourse === course.name ? (
                  <ul className={style.courseBreakdown}>
                    {course.students.map((student) => (
                      <li key={student.firstName + student.lastName} onClick={() => this.setState({activeStudent: student.firstName + student.lastName})}>
                        <p className='center'>{student.firstName} {student.lastName}</p>
                        {
                          this.state.activeStudent === student.firstName + student.lastName ? (
                            <ul className={style.gradesWrapper}>
                              {this.prop.data.grades.map((grade) => (
                                <li key={grade.name} className={style.gradeRow}>
                                  <p className={style.leftPane}>{grade.name}</p>
                                  <p className={style.rightPane}>{grade.percent}</p>
                                </li>
                              ))}
                            </ul>
                          ) : ''
                        }
                      </li>
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

