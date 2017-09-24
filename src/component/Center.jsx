import React from 'react'

export default class Component extends React.Component {
  render () {
    return (
      <div className='vertical-center'>
        <div className='horizontal-center text-center'>{this.props.children}</div>
      </div>
    )
  }
}
