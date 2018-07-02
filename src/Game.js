import React, { Component } from 'react';

const CountDown = ({time, startTime}) => {
  let length = Math.round((time/startTime) * 120)
  console.log(length)
  let chars = ''
  for (let i=0; i<length; i++){
    chars += '.'
  }
  return chars;
}

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      countDown: this.props.startTime,
      problem: ''
    }
    this.tick = this.tick.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.createRandomProblem = this.createRandomProblem.bind(this)
  }

  componentDidMount() {
    this.timer = setInterval(this.tick,1000)
    this.createRandomProblem(this.props.gameType)
  }

  tick() {
    if (this.state.countDown > 0) {
      this.setState({countDown: this.state.countDown - 1})
    }else {
      this.props.endGameHandler()
      clearInterval(this.timer)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleClick() {
    this.props.updateScoreFunction()
    this.createRandomProblem(this.props.gameType)
  }

  createRandomProblem(type) {
    const max = 10
    let random1 = Math.floor(Math.random() * 5)+5;
    let random2 = Math.floor(Math.random() * max)+1;
    var problem = '';

    switch (type) {
      case 'ADDITION':
        problem = random1 + ' + ' + random2;
        break;
      case 'SUBTRACTION':
        if (random1 >= random2) {
          problem = (random1+1) + ' - ' + random2;  
        } else {
          problem = (random2+8) + ' - ' + random1;
        }
        break;
      case 'MULTIPLICATION':
        problem = random1 + ' x ' + random2;
        break;
      case 'DIVISION':
        let dividend = random1 * random2;
        problem = dividend + ' / ' + random1;
        break;
      default:
        problem = 'type is NOT defined. createRandomProblem()'
    }

    this.setState({problem: problem})
  }

  render() {
    return (
      <div>
        <CountDown startTime={this.props.startTime} time={this.state.countDown} />
        <div id="counter">{this.props.score}</div>
        <div className="number">{this.state.problem}</div>
        <button id="btn" onClick={this.handleClick}>Next</button>
      </div>
      )
  }
}
