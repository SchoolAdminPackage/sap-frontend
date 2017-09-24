import React from 'react'

import Center from '../../component/Center.jsx'

export default class Main extends React.Component {
  render () {
    return (
      <Center>
        <img src='media/sap2.svg' style={{width: '100%'}} />
        <br /><br /><br />
        <h1 className='button red' onClick={this.callback}>new school?</h1>
      </Center>
    )
  }

  callback = () => {
    window.localStorage.layout = 'school-setup'
    window.location.reload()
  }
}
