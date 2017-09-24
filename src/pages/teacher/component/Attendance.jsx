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
      students: []
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
      <ul className='teacher__attendance'>
        {this.state.students.map((student) => (
          <li key={student.id} className='teacher__attendance-row'>
            <p>{student.firstname} {student.lastname}</p>
            <div className={'teacher__attendance-buttons'}>
              <div className='button green' onClick={() => this.present(student.firstname,student.lastname)}>present</div>
              <div className='button yellow' onClick={() => this.tardy(student.firstname, student.lastname)}>tardy</div>
              <div className='button red' onClick={() => this.absent(student.firstname, student.lastname)}>absent</div>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}
