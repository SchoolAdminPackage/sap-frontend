import React from 'react'

function calcGrade(grades, course) {
  let totalPoints = 0
  let earnedPoints = 0
  for (let grade of grades) {
    if (grade.course === course) {
      totalPoints += grade.pointsTotal
      earnedPoints += grade.pointsEarned
    }
  }
  return calcPercent(earnedPoints, totalPoints)
}

function calcPercent(earnedPoints, totalPoints) {
  return earnedPoints / totalPoints * 100 + '%'
}

import style from '../stylesheet.css'

export default class Component extends React.Component {
  constructor (props) {
    super(props)

    fetch('http://35.3.9.34:8080/query/allGrades', {
      method: 'post',
      body: JSON.stringify({
        id: 1
      }),
      headers: new Headers({"Content-Type": "application/json"})
    })
      .then((response) => response.json())
      .then((grades) => {
        this.setState({grades: grades})
      })

    fetch('http://35.3.9.34:8080/query/allCoursesForStudent', {
      method: 'post',
      body: JSON.stringify({
        id: 1
      }),
      headers: new Headers({"Content-Type": "application/json"})
    })
      .then((response) => response.json())
      .then((courses) => {
        this.setState({courses: courses})
      })

    this.state = {
      courses: [],
      grades: [],
      activeCourse: ''
    }
  }

  render () {
    return (
      <ul className='grades'>
        {this.state.courses.map((course) => (
          <li key={course} className='level1'>
            <div className={'buttonl ' + (this.state.activeCourse === course ? 'grade_selected' : '')} onClick={() => this.expand(course)} style={{width: '100%'}}>
              <div>
              <p className='leftPane'>{course}</p>
              <p className='rightPane'>{calcGrade(this.state.grades, course)}</p>
              </div>
            </div>
            {
              this.state.activeCourse === course ? (
                <ul className='level2'>
                  {this.state.grades.map((grade) => (
                    grade.course === course ? (
                      <li key={grade.title}>
                        <p className='leftPane'>{grade.title}</p>
                        <p className='rightPane'>{calcPercent(grade.pointsEarned, grade.pointsTotal)}</p>
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

  expand = (course) => {
  	if (this.state.activeCourse === course) {
      this.setState({activeCourse: ''})
    } else {
      this.setState({activeCourse: course})
    }
	}
}
