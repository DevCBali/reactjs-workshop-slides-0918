import React, { Component } from 'react'

class Counter extends Component {
  state = {
    counter: 0
  }

  handleCountUp = e => {
    e.preventDefault()
    this.setState({ counter: this.state.counter + 1 })
  }

  handleCountDown = e => {
    e.preventDefault()
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>Counter: {this.state.counter}</div>
        <div>
          <button onClick={this.handleCountUp}>+</button> Increment
        </div>
        <div>
          <button onClick={this.handleCountDown}>-</button> Decrement
        </div>
      </div>
    )
  }
}

export default Counter
