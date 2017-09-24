import React from 'react'

import Center from '../../component/Center.jsx'

export default class Main extends React.Component {
  render () {
    return (
      <Center>
        <img src='media/sap2.svg' style={{width: '100%'}} />
        <br /><br /><br />
        <input className='element green' name='username' ref={(element) => this.input = element} />
        <div className='button red' onClick={this.callback}>submit</div>
      </Center>
    )
  }

  callback = () => {
    if (!this.input.value) {
      return
    }
    let string = this.input.value.toLowerCase()
    if (string.includes('@')) {
      string = string.split('@')[0]
    }
    window.localStorage.id = string
    fetch('http://35.3.9.34:8080/login', {
      method: 'post',
      body: JSON.stringify({
        email: string
      }),
      headers: new Headers({"Content-Type": "application/json"})
    })
      .then((response) => response.json())
      .then((result) => {
        if ('error' in result) {
          return
        }
        window.localStorage.layout = result.AccountType.toLowerCase()
        window.location.reload()
      })
  }
}
