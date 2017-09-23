import React from 'react'

import Center from '../../component/Center.jsx'

export default class Main extends React.Component {
  render () {
    return (
      <Center>
        <h1>Step 1</h1>
        <h2>Add students - upload excel document</h2>
        <input className='button button-red' type='file' accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' style={{color: 'white'}} ref={this.callback} />
        <div>upload .csv</div>
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
          r.onload = (e) => {
            this.dataCallback(e.target.result)
          }
          r.readAsText(f)
        }
      })
    } else {
      alert('Your browser does not support file upload. Sorry.')
    }
  }

  dataCallback = (data) => {
    console.log(data)
  }
}

