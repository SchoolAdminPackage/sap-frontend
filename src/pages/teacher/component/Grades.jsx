import React from 'react'

export default class Component extends React.Component {
  constructor (props) {
    super(props)

    ///// DEBUG ONLY
    this.prop = {}
    this.prop.data = {}
    this.prop.data.courses = [{name: 'math', period: 'A', students: [
      {firstName: "Anton", lastName: "Outkine"}], assignments: [{name: 'test', date: 'date01', course: 'course', totalPoints: 'total points of ass', description: 'short description'}, {name: 'test', date: 'date01', course: 'course', totalPoints: 'total points of ass', description: 'short description'}, {name: 'test', date: 'date01', course: 'course', totalPoints: 'total points of ass', description: 'short description'}]
    }]
    this.prop.data.assignments = 
    this.prop.data.grades = [{course: 'math', name: 'test', percent: 20}, {course: 'math', name: 'quiz', percent: 40}, {course: 'math', name: 'worksheet', percent: 80}]
    //////

    this.state = {
      activeCourse: '',
      activeStudent: '',
      activeAss: ''
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
                        {course.assignments.map((assignment) => (
                            <li><div className='button' onClick={() => this.setState({activeAss: assignment.name})}></div><p>{assignment.name}</p></li>
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
