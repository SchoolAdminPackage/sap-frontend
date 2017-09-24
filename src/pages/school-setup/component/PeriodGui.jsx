import React from 'react'

export default class Component extends React.Component {
  state = {
    days: [],
    periods: []
  }
  currentDay = null

  render () {
    return (
      <div className='period'>
        <div className='button red' onClick={this.addDay} style={{display: 'inline-block', margin: '0 auto'}}>add day</div>
        <br /><br />

        <ul className='row even' style={{width: '100%'}}>
          {this.state.days.map((day) => (
            <li key={this.state.days.indexOf(day)} className={'period__day col button yellow ' + (this.currentDay === this.state.days.indexOf(day) ? 'day_selected' : '')} onClick={() => this.selectDay(this.state.days.indexOf(day))}>
              <ul>
                {day.map((period) => (
                  <li key={period}>
                    <p>{period}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <br />

        <div className='row'>
          <div className='button green' onClick={this.addPeriodType} style={{margin: 'auto'}}>add period</div>
          <ul className='row even' style={{width: '100%'}}>
            {this.state.periods.map((period) => (
              <li key={period} className='button red' onClick={() => this.addPeriod(period)}>{period}</li>
            ))}
          </ul>
        </div>
        <br /><br />

        <div className='button red' onClick={this.props.onClick}>done</div>
      </div>
    )
  }

  addDay = () => {
    this.state.days.push([])
    this.currentDay = this.state.days.length - 1
    this.forceUpdate()
  }

  addPeriodType = () => {
    this.state.periods.push(this.state.periods.length)
    this.forceUpdate()
  }

  addPeriod = (periodNumber) => {
    if (this.currentDay !== null && this.state.days[this.currentDay].indexOf(periodNumber) === -1) {
      this.state.days[this.currentDay].push(periodNumber)
      this.forceUpdate()
    }
  }

  selectDay = (dayNumber) => {
    this.currentDay = dayNumber
    this.forceUpdate()
  }
}
