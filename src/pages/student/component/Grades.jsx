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

// import { isoDate } from '../../../common/helpers.js'
// import { graphql, gql } from 'react-apollo'
// import casual from 'casual'

import style from '../stylesheet.css'
// let query = gql`
// query ($student: String) {
//   grades(student: $student) {
//     course
//     name
//     percent
//   }
//
//   courseMemberships(student: $student) {
//     name
//   }
// }
// `

// @graphql(query, {
//   options: {
//     variables: { student: window.localStorage.student }
//   }
// })


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes




export default class Component extends React.Component {
  constructor (props) {
    super(props)

    const main = this;
    
    //FETCH WITH STUDENT THINGY
    fetch(``)
    //^^^^^^^
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

    .then( function(response) {
      return response.json();
    })
    .then( function(data) {
      main.setState({
      	activeCourse: '',
      	assignments: data.assignments,
      	pointsEarned: data.pointsEarned,
      	pointsTotal: data.pointsTotal,
      	courses: data.courses

<<<<<<< Updated upstream
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

    .then( function(response) {
      return response.json();
    })
    .then( function(data) {
      main.setState({
      	activeCourse: '',
      	assignments: data.assignments,
      	pointsEarned: data.pointsEarned,
      	pointsTotal: data.pointsTotal,
      	courses: data.courses

=======
>>>>>>> Stashed changes
      });
    })
    
  }

  render () {
    return (
      <ul className={style.grades}>
        {this.state.courses.map((course) => (
            <li key={course.name} className={style.course} onClick={() => this.pullUp(course)}>
              <p className={style.leftPane}>{course.name}</p>
              <p className={style.rightPane}>{calcGrade(this.prop.data.assignments, course)}</p>
              {
                this.state.activeCourse === course.name ? (
                  <ul className={style.courseBreakdown}>
                    {this.state.assignments.map(assignment) => (
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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

export default Component

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
