import React from 'react'

export default class Component extends React.Component {
  constructor (props) {
    super(props)

    ///// DEBUG ONLY
    this.prop = {}
    this.prop.data = {}
    this.prop.data.students = []
    for (let i = 0; i < 10; i++) {
      this.prop.data.students.push({name: 'joe' + i})
    }
    //////
  }


  render () {
    return (
      <ul className='teacher__attendance'>
        {this.prop.data.students.map((student) => (
          <li key={student.name} className='teacher__attendance-row'>
            <p>{student.name}</p>
            <div className={'teacher__attendance-buttons'}>
              <div className='button button-green'>present</div>
              <div className='button button-yellow'>tardy</div>
              <div className='button button-red'>absent</div>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}
