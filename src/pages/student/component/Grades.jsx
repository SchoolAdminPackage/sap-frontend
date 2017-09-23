import React from 'react'

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


export default class Component extends React.Component {
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
      <ul>
        {this.prop.data.courses.map((course) => (
            <li key={course.name} className={'level1'} onClick={() => this.setState({activeCourse: course.name})}>
              <p className='leftPane'>{course.name}</p>
              <p className='rightPane'>{calcGrade(this.prop.data.assignments, course)}</p>
              {
                this.state.activeCourse === course.name ? (
                  <ul className='level2'>
                    {this.prop.data.assignments.map((assignment) => (
                      assignment.course === course.name ? (
                        <li key={assignment.name}>
                          <p className={'leftPane'}>{assignment.name}</p>
                          <p className={'rightPane'}>{assignment.percent}</p>
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
