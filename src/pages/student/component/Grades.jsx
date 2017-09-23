import React from 'react'

function calcGrade(grades, course) {
  let totalPoints = 0
  let earnedPoints = 0
  for (let grade of grades) {
    if (grade.course === course) {
      totalPoints += grade.pointsTotal
      earnedPoints += grade.earnedPoints
    }
  }
  return earnedPoints / totalPoints
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

    fetch('http://35.3.9.34:8080/query/allCourses', {
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
    console.log(this.state)
    return (
      <ul className='student__grades'>
        {this.state.courses.map((course) => (
          <li key={course} className='level1' onClick={() => this.setState({activeCourse: course})}>
            <p className='leftPane'>{course}</p>
            <p className='rightPane'>{calcGrade(this.state.grades, course)}</p>
            {
              this.state.activeCourse === course ? (
                <ul className='level2'>
                  {this.state.grades.map((grade) => (
                    grade.course === course ? (
                      <li key={grade.title}>
                        <p className='leftPane'>{grade.title}</p>
                        <p className='rightPane'>{grade.percent}</p>
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

  pullUp = (course) => {
  	if (this.state.activeCourse == null) this.state.activeCourse=''
  	console.log(this.state.activeCourse)
		if (course.name == this.state.activeCourse) {
			this.setState({activeCourse: ''})
		}
		else {
			this.setState({activeCourse: course.name})
		}
	}
}



    // .then( function(data) {
    //   main.setState({
    //    activeCourse: '',
    //    grades: data.grades,
    //    pointsEarned: data.pointsEarned,
    //    pointsTotal: data.pointsTotal,
    //    courses: data.courses
