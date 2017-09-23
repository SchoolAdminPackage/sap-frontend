import React from 'react'

import Center from '../../component/Center.jsx'
import './stylesheet.css'

export default class Main extends React.Component {
  constructor (props) {
    super(props)

    if (!window.localStorage.setupStage || parseInt(window.localStorage.setupStage) > 3) {
      window.localStorage.setupStage = 1
    }
  }

  render () {
    if (window.localStorage.setupStage === "1") {
      return (
        <Center>
          <div>
            <h1>Step 1</h1>
            <h2>Add students</h2>
          </div>
          <br /><br />

          <label className='button button-red'>upload excel document<input type='file' accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' style={{display: 'none'}} ref={this.callback} /></label>

          <br /><br /><br />
          <h3>excel layout</h3>
          <div className="row" style={{borderTop: '3px solid black'}}>
            <p>first name</p>
            <div className="line" />
            <p>last name</p>
          </div>
        </Center>
      )
    } else if (window.localStorage.setupStage === "2") {
      return (
        <Center>
          <div>
            <h1>Step 2</h1>
            <h2>Add teachers</h2>
          </div>
          <br /><br />

          <label className='button button-red'>upload excel document<input type='file' accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' style={{display: 'none'}} ref={this.callback} /></label>

          <br /><br /><br />
          <h3>excel layout</h3>
          <div className="row" style={{borderTop: '3px solid black'}}>
            <p>first name</p>
            <div className="line" />
            <p>last name</p>
          </div>
        </Center>
      )
    } else {
      return (
        <Center>
          <div>
            <h1>Step 3</h1>
            <h2>Add courses</h2>
          </div>
          <br /><br />

          <label className='button button-red'>upload excel document<input type='file' accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' style={{display: 'none'}} ref={this.callback} /></label>

          <br /><br /><br />
          <h3>excel layout</h3>
          <div className="row" style={{borderTop: '3px solid black'}}>
            <p>first name</p>
            <div className="line" />
            <p>last name</p>
          </div>
        </Center>
      )
    }
  }

  callback = (element) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      element.addEventListener('change', (event) => {
        const f = event.target.files[0]
        if (!f) {
          alert('Failed to load file.')
        } else if (f.type !== 'text/csv') {
          alert(f.name + ' is not a valid csv file.')
        } else {
          const r = new FileReader()
          r.readAsText(f)
          r.onload = (e) => {
            this.dataCallback(e.target.result)
          }
        }
      })
    } else {
      alert('Your browser does not support file upload. Sorry.')
    }
  }

  dataCallback = (data) => {
    if (window.localStorage.setupStage === '1') {

    } else if (window.localStorage.setupStage === '2') {

    } else {
      window.localStorage.layout = 'admin'
    }
    window.localStorage.setupStage = parseInt(window.localStorage.setupStage) + 1
    console.log(window.localStorage.setupStage)
    window.location.reload()
  }
}
