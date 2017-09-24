import React from 'react'

export default class Component extends React.Component {
  constructor (props) {
    super(props)

    fetch('http://35.3.9.34:8080/query/allCoursesForTeacher', {
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
      })

    fetch('http://35.3.9.34:8080/query/allCoursesForTeacher', {
      method: 'post',
      body: JSON.stringify({
        teacher: window.localStorage.id
      }),
      headers: new Headers({'Content-Type': 'application/json'})
    })
      .then((response) => response.json())
      .then((courses) => {
        fetch('http://35.3.9.34:8080/query/allInCourse', {
          method: 'post',
          body: JSON.stringify({
            course: 'Physics'
          }),
          headers: new Headers({"Content-Type": "application/json"})
        })
          .then((response) => response.json())
          .then((students) => {
            this.setState({students: students})
          })
      })

    this.state = {
      students: [],
      courses: [],
      activeCourse: ''
    }
  }

  present = (firstName, lastName) => {

  }
  
  tardy = (firstName, lastName) => {
    
  }

  absent = (firstName, lastName) => {
    
  }

  render () {
    return (
<<<<<<< HEAD
      <ul className='teacher__attendance'>
        {this.state.students.map((student) => (
          <li key={student.id} className='teacher__attendance-row'>
            <p>{student.firstname} {student.lastname}</p>
            <div className={'teacher__attendance-buttons'}>
              <div className='button green' onClick={() => this.present(student.firstname,student.lastname)}>present</div>
              <div className='button yellow' onClick={() => this.tardy(student.firstname, student.lastname)}>tardy</div>
              <div className='button red' onClick={() => this.absent(student.firstname, student.lastname)}>absent</div>
=======
      <ul className='grades'>
        {this.state.courses.map((course) => (
          <li key={course.title} className='level1'>
            <div className={'buttonl ' + (this.state.activeCourse === course.title ? 'grade_selected' : '')} onClick={() => this.expandCourse(course.title)} style={{width: '100%'}}>
              <p>{course.title}</p>
>>>>>>> 50ce41b6956b5472d0cf0cea1bae416e3221519c
            </div>
            {
              this.state.activeCourse === course.title ? (
                <ul className='teacher__attendance'>
                  {this.state.students.map((student) => (
                    <li key={student.id} className='teacher__attendance-row'>
                      <p>{student.firstname} {student.lastname}</p>
                      <div className={'teacher__attendance-buttons'}>
                        <div className='button green'>present</div>
                        <div className='button yellow'>tardy</div>
                        <div className='button red'>absent</div>
                      </div>
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


  expandCourse = (course) => {
    if (this.state.activeCourse === course) {
      this.setState({activeCourse: ''})
    } else {
      this.setState({activeCourse: course})
    }
  }
}
