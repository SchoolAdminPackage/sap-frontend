import React from 'react'

export default class Component extends React.Component {
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
      <ul>
        {this.prop.data.courses.map((course) => (
            <li key={course.name} className='level1' onClick={() => this.setState({activeCourse: course.name})}>
              <p className='text-center'>{course.name}</p>
              {
                this.state.activeCourse === course.name ? (
                  <ul className='level2'>
                    {course.students.map((student) => (
                      <li key={student.firstName + student.lastName} onClick={() => this.setState({activeStudent: student.firstName + student.lastName})}>
                        <p className='text-center'>{student.firstName} {student.lastName}</p>
                        {
                          this.state.activeStudent === student.firstName + student.lastName ? (
                            <ul className='level3'>
                              {this.prop.data.grades.map((grade) => (
                                <li key={grade.name} className='gradeRow'>
                                  <p className='leftPanel'>{grade.name}</p>
                                  <p className='rightPanel'>{grade.percent}</p>
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


  
}

