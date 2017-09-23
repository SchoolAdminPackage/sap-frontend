import React from 'react'

import Center from '../../component/Center.jsx'

export default class Main extends React.Component {
  render () {
    return (
      <Center>
        <img src='media/sap2.svg' style={{width: '100%'}} />
        <h1 className='button button-red' onClick={this.callback} style={{color: 'white'}}>new school?</h1>
      </Center>
    )
  }

  callback = () => {
    window.localStorage.layout = 'admin'
    window.location.reload()
  }
}
