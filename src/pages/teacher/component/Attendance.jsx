import React from 'react'

export default class Component extends React.Component {
  constructor (props) {
    super(props)

    fetch('http://35.3.9.34:8080/query/allInCourse', {
      method: 'post',
      body: JSON.stringify({
        course: 'Physics'
      }),
      headers: new Headers({"Content-Type": "application/json"})
    })
      .then((response) => response.json())
      .then((students) => {
        console.log(students)
        this.setState({students: students})
      })

    this.state = {
      students: []
    }
    
  }


  render () {
    return (
      <ul className='teacher__attendance'>
        {this.state.students.map((student) => (
          <li key={student.name} className='teacher__attendance-row'>
            <p>{student.firstname} {student.lastname}</p>
            <div className={'teacher__attendance-buttons'}>
              <div className='button green'>present</div>
              <div className='button yellow'>tardy</div>
              <div className='button red'>absent</div>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}
