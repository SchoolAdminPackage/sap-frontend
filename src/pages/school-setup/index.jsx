import React from 'react'

import Center from '../../component/Center.jsx'
import PeriodGui from './component/PeriodGui.jsx'
import Upload from './component/Upload.jsx'
import './stylesheet.css'

function processText (text) {
  let result = []
  for (const line of text.split('\n')) {
    if (line) {
      const info = line.split(',')
      result.push(info)
    }
  }
  return result
}


export default class Main extends React.Component {
  constructor (props) {
    super(props)

    if (!window.localStorage.setupStage || parseInt(window.localStorage.setupStage) > 5) {
      window.localStorage.setupStage = 1
    }
  }

  render () {
    if (window.localStorage.setupStage === '1') {
      return (
        <Upload stepNumber='1' stepText='Add students' callback={this.callback}>
          <p>first name</p>
          <div className='line' />
          <p>last name</p>
          <div className='line' />
          <p>email</p>
        </Upload>
      )
    } else if (window.localStorage.setupStage === '2') {
      return (
        <Upload stepNumber='2' stepText='Add teachers' callback={this.callback}>
          <p>first name</p>
          <div className='line' />
          <p>last name</p>
          <div className='line' />
          <p>email</p>
        </Upload>
      )
    } else if (window.localStorage.setupStage === '3') {
      return <Center><PeriodGui onClick={this.callback} /></Center>
    } else if (window.localStorage.setupStage === '4') {
      return (
        <Upload stepNumber='4' stepText='Add courses' callback={this.callback}>
          <p>name</p>
          <div className='line' />
          <p>teacher</p>
          <div className='line' />
          <p>period</p>
        </Upload>
      )
    } else {
      return (
        <Upload stepNumber='5' stepText='Add students to courses' callback={this.callback}>
          <p>student name</p>
          <div className='line' />
          <p>course name</p>
        </Upload>
      )
    }
  }

  callback = (data) => {
    if (window.localStorage.setupStage === '1') {
      for (let info of processText(data)) {
        fetch('http://66.175.211.152/create/student', {
          method: 'post',
          body: JSON.stringify({
            firstname: info[0],
            lastname: info[1],
            email: info[2]
          }),
          headers: new Headers({"Content-Type": "application/json"})
        })
      }
    } else if (window.localStorage.setupStage === '2') {
      for (let info of processText(data)) {
        fetch('http://66.175.211.152/create/teacher', {
          method: 'post',
          body: JSON.stringify({
            firstname: info[0],
            lastname: info[1],
            email: info[2]
          }),
          headers: new Headers({"Content-Type": "application/json"})
        })
      }
    } else if (window.localStorage.setupStage === '3') {
    } else if (window.localStorage.setupStage === '4') {
      for (let info of processText(data)) {
        fetch('http://66.175.211.152/create/course', {
          method: 'post',
          body: JSON.stringify({
            title: info[0],
            teacher: info[1],
            period: 'A'
          }),
          headers: new Headers({"Content-Type": "application/json"})
        })
      }
    } else if (window.localStorage.setupStage === '5') {
      for (let info of processText(data)) {
        fetch('http://66.175.211.152/create/course', {
          method: 'post',
          body: JSON.stringify({
            id: info[0],
            course: info[1]
          }),
          headers: new Headers({"Content-Type": "application/json"})
        })
      }
      window.localStorage.layout = 'admin'
    }
    window.localStorage.setupStage = parseInt(window.localStorage.setupStage) + 1
    window.location.reload()
  }
}
