import React from 'react'

export default class Component extends React.Component {
  constructor (props) {
    super(props)

    fetch('http://35.3.9.34:8080/query/allCoursesForTeacher', {
      method: 'post',
      body: JSON.stringify({
        teacher_id: 1
      }),
      headers: new Headers({'Content-Type': 'application/json'})
    })
      .then((response) => response.json())
      .then((courses) => {
        console.log(courses)
        this.setState({courses: courses})
        for (let course of courses) {
          fetch('http://35.3.9.34:8080/query/allInCourse', {
            method: 'post',
            body: JSON.stringify({
              course: course.title
            }),
            headers: new Headers({'Content-Type': 'application/json'})
          })
            .then((response) => response.json())
            .then((students) => {
              console.log(students)
              this.state.students[course.title] = students
            })

          fetch('http://35.3.9.34:8080/query/assignmentsForCourse', {
            method: 'post',
            body: JSON.stringify({
              course: course.title
            }),
            headers: new Headers({'Content-Type': 'application/json'})
          })
            .then((response) => response.json())
            .then((assignments) => {
              console.log(assignments)
              this.state.assignments[course.title] = assignments
            })
        }
      })


    this.state = {
      courses: [],
      assignments: {},
      students: {},
      activeCourse: '',
      activeAssignment: '',
      title: 'Assignment Name'
    }
  }

  handleChange(event) {
    this.setState({title: event.target.value})
  }

  render () {
    console.log('asdf', this.state)
    return (
      <ul className='grades'>
        {this.state.courses.map((course) => (
          <li key={course.title} className='level1'>
            <div className={'buttonl ' + (this.state.activeCourse === course.title ? 'grade_selected' : '')} onClick={() => this.expandCourse(course.title)} style={{width: '100%'}}>
              <p>{course.title}</p>
            </div>
            {
              this.state.activeCourse === course.title ? (
                <ul className='level2' style={{textAlign: 'center'}}>
                  {this.state.assignments[course.title].map((assignment) => (
                    <li key={assignment.name}>
                      <p style={{textAlign: 'center', width: '100%'}} onClick={() => this.expandAssignment(assignment.name)}>{assignment.name}</p>
                      {
                        this.state.activeAssignment === assignment.name ? (
                          <div className='col' style={{width: '100%'}}>
                            <div>

                            </div>
                            <ul className='row'>
                              {this.state.students[course.title].map((student) => (
                                <li key={student.id} className='assignment_students'>
                                  {student.firstname} {student.lastname}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : ''
                      }
                    </li>
                  ))}
                  <input type='text' id='title' value={this.state.title} onChange={this.handleChange.bind(this)}/>
                  <div className='buttonl' onClick={this.createAssignment}>new assignment</div>
                </ul>
              ) : ''
            }
          </li>
        ))}
      </ul>
    )
  }

  expandCourse = (course) => {
    if (this.state.activeCourse === course) {
      this.setState({activeCourse: ''})
    } else {
      this.setState({activeCourse: course})
    }
  }

  expandAssignment = (assignmentName) => {
    if (this.state.activeAssignment === assignmentName) {
      this.setState({activeAssignment: ''})
    } else {
      console.log(assignmentName)
      this.setState({activeAssignment: assignmentName})
    }
  }

  createAssignment = (title) => {
    fetch('http://35.3.9.34:8080/create/assignment', {
      method: 'post',
      body: JSON.stringify({
        course: this.state.currentCourse,
        name: this.state.title,
        date: 1
      }),
      headers: new Headers({'Content-Type': 'application/json'})
    })
  }
}
