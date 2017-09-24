import React from 'react'

import Center from '../../../component/Center.jsx'

export default class Component extends React.Component {
  render () {
    return (
      <Center>
        <div>
          <h1>Step {this.props.stepNumber}</h1>
          <h2>{this.props.stepText}</h2>
        </div>
        <br /><br />

        <label className='button red'>upload excel document<input type='file' accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' style={{display: 'none'}} ref={this.callback} /></label>

        <br /><br /><br />
        <h3>excel layout</h3>
        <div className='row excel_layout'>
          {this.props.children}
        </div>
      </Center>
    )
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
            this.props.callback(e.target.result)
          }
        }
      })
    } else {
      alert('Your browser does not support file upload. Sorry.')
    }
  }
}
