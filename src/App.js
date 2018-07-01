import React, { Component } from 'react';
import Game from './Game'
import './App.css';


class ChooseType extends Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(type, event) {
    event.preventDefault()
    this.props.chooseTypeFunction(type)
  }

  render() {
    return(
      <div id="setup">
        <button onClick={this.clickHandler.bind(this,'ADDITION')}>Addition<div id="small">Choose level...</div></button>
        <button onClick={this.clickHandler.bind(this,'SUBTRACTION')}>Subtraction</button>
        <button onClick={this.clickHandler.bind(this,'MULTIPLICATION')}>Multiplication</button>
        <button onClick={this.clickHandler.bind(this,'DIVISION')}>Division</button>
      </div>
      )
  }
}

const GameReady = ({gameType, startTime, newGameFunction}) => {
  return (
    <div>
      <h3>{gameType}</h3>
      <p>{startTime} seconds.</p>
      <p>Are you ready?</p>
      <button id="btn" onClick={newGameFunction.bind(this,2)}>Go</button>
    </div>
    )
}

const Congratulations = ({score, newGameFunction}) => {
  return (
    <div>
      <h2>Congratulations</h2>
      <h3>Your scored: <strong>{score}</strong></h3>
      <br /><br /><br /><br /><br /><br />
      <button id="btn" onClick={newGameFunction.bind(this,1)}>Play again</button><br />
      <a onClick={newGameFunction.bind(this,0)}>Go to Start...</a>
    </div>
  )
}

class Steps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      gameType: '',
      score: 0
    }
    this.endGameHandler = this.endGameHandler.bind(this)
    this.chooseTypeFunction = this.chooseTypeFunction.bind(this)
    this.updateScore = this.updateScore.bind(this)
    this.newGame = this.newGame.bind(this)
  }

  endGameHandler() {
    this.setState({step: 3})
  }

  chooseTypeFunction(gameType) {
    this.setState({gameType: gameType, step: 1})
  }

  updateScore() {
    this.setState({score: this.state.score + 1})
  }

  newGame(step) {
    this.setState({score: 0})
    this.setState({step})
  }

  render() {
    const startTime = 10

    switch (this.state.step) {
      case 0:
        return <ChooseType chooseTypeFunction={this.chooseTypeFunction} />

      case 1:
        return <GameReady
                  gameType={this.state.gameType}
                  startTime={startTime}
                  newGameFunction={this.newGame} />

      case 2:
        return <Game 
                  gameType={this.state.gameType} 
                  startTime={startTime}
                  endGameHandler={this.endGameHandler} 
                  score={this.state.score} 
                  updateScoreFunction={this.updateScore} />

      case 3:
        return <Congratulations score={this.state.score} newGameFunction={this.newGame} />

      default:
        return <p>Step not defined: App</p>
    }

  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Happy Maths</h1>
        <Steps />
      </div>
      )
  }
}

export default App;
