import React from 'react'

import Center from '../../component/Center.jsx'

export default class Main extends React.Component {
  render () {
    return (
      <Center>
        <img src='media/sap2.svg' style={{width: '100%'}} />
        <br /><br /><br />
        <form method='post' action='http://35.3.9.34:8080/login'>
          <input className='element yellow' name='username' />
          <input className='element yellow' type='password' name='password' />
          <button className='button red'>submit</button>
        </form>
      </Center>
    )
  }

  callback = () => {
    window.localStorage.layout = 'school-setup'
    window.location.reload()
  }
}
