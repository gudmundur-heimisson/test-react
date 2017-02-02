import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(),
                  on: true};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState, props) => ({
      on: !prevState.on
    }));
  }

  tick() {
    if (this.state.on) {
      this.setState({
        date: new Date()
      });
    }
  }

  render () {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.handleClick}>{this.state.on ? "on":"off"}</button>
      </div>);
  }
}

module.exports = Clock;
