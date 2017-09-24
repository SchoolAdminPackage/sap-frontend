import React from 'react'

export default class Component extends React.Component {
  constructor (props) {
    super(props)
    fetch('http://66.175.211.152/query/allCoursesForTeacher', {
      method: 'post',
      body: JSON.stringify({
        teacher_id: window.localStorage.id
        }),
      headers: new Headers({'Content-Type': 'application/json'})
    })
      .then((response) => response.json())
      .then((courses) => {
        console.log(courses)
        this.setState({courses: courses})
        for (let course of courses) {
          fetch('http://66.175.211.152/query/allInCourse', {
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

              for (let student of students) {
                fetch('http://66.175.211.152/query/allGrades', {
                  method: 'post',
                  body: JSON.stringify({
                    id: student.id
                  }),
                  headers: new Headers({'Content-Type': 'application/json'})
                })
                  .then((response) => response.json())
                  .then((grades) => {
                    console.log('graddes', grades)
                    this.state.grades[student.id] = grades
                  })
              }
            })

          fetch('http://66.175.211.152/query/assignmentsForCourse', {
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
      grades: {},
      activeCourse: '',
      activeAssignment: '',
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
                <ul className='level2 assignment__student-row' style={{textAlign: 'center'}}>
                  {this.state.assignments[course.title].map((assignment) => (
                    <li key={assignment.name}>
                      <p style={{width: '100%'}} onClick={() => this.expandAssignment(assignment.name)}>{assignment.name}</p>
                      {
                        this.state.activeAssignment === assignment.name ? (
                          <ul className='col' style={{width: '100%', textAlign: 'left'}}>
                            {this.state.students[course.title].map((student) => (
                              <li key={student.id} className='assignment_students'>
                                <p className='leftPane'>{student.firstname} {student.lastname}</p>
                                <input className='rightPane' type='number' min='0' max='100' onChange={(event) => this.grade = event.target.value} />
                                <div className='buttonl' onClick={() => this.createGrade(student.id, assignment.name, course.title)}>submit</div>
                              </li>
                            ))}
                          </ul>
                        ) : ''
                      }
                    </li>
                  ))}
                  <input type='text' placeholder='name' ref={(element) => this.input = element} />
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
    fetch('http://66.175.211.152/create/assignment', {
      method: 'post',
      body: JSON.stringify({
        course: this.state.activeCourse,
        name: this.input.value,
        date: Date.now()
      }),
      headers: new Headers({'Content-Type': 'application/json'})
    })

    window.location.reload()
  }

  createGrade = (studentId, assignmentName, courseName) => {
    console.log(this.grade)
    fetch('http://66.175.211.152/create/grade', {
      method: 'post',
      body: JSON.stringify({
        course_title: this.state.activeCourse,
        id: studentId,
        title: assignmentName,
        pointsEarned: this.grade,
        pointsTotal: 100
      }),
      headers: new Headers({'Content-Type': 'application/json'})
    })

    window.location.reload()
  }
}
