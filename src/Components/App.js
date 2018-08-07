import React, { Component } from 'react';

import '../Styles/App.css';
import { Button } from './Button';
import { Display } from './Display';
import { isANumber, evalPostFix, toPostFix } from './Helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: "",
    };  

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleParenClick = this.handleParenClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
    this.handleCalculateClick = this.handleCalculateClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleDecimalClick = this.handleDecimalClick.bind(this);
  }    

  handleNumberClick(e) {
    this.setState({
      displayText: this.state.displayText + e.target.innerText
    })
  }

  handleParenClick(e) {    
    const leftParen = "(";
    const rightParen = ")";
    const entered = e.target.innerText;
    const lastChar = this.state.displayText.length > 0 ? this.state.displayText[this.state.displayText.length - 1] : "";
    const isLeftParenAndFirstCharEntered = entered === leftParen && lastChar === "" ? true : false;

    if (isLeftParenAndFirstCharEntered) {
      this.setState({
        displayText: this.state.displayText + e.target.innerText
      })
    } else if (entered === leftParen) { 
      // TODO: fix Operators may be next to left parens 
      if (isANumber(lastChar)) {
        this.setState({
          displayText: this.state.displayText + e.target.innerText
        })
      }     
      // TODO: fix Operators may be next to left parens
    } else if (entered === rightParen) {
      //TODO match parens
      if (isANumber(lastChar)) {
        this.setState({
          displayText: this.state.displayText + entered
        })
      } 
    } 
  }

  handleOperatorClick(e) {
    const entered = e.target.innerText;
    const lastChar = this.state.displayText.length > 0 ? this.state.displayText[this.state.displayText.length - 1] : "";

    if (isANumber(lastChar)) {
      this.setState({
        displayText: this.state.displayText + " " + entered + " "
      })
    }
  }

  handleClearClick() {
    this.setState({
      displayText: ""
    })
  }

  handleDecimalClick(e) {
    const entered = e.target.innerText;
    const lastChar = this.state.displayText.length > 0 ? this.state.displayText[this.state.displayText.length - 1] : "";

    if(isANumber(lastChar)){
      this.setState({
        displayText: this.state.displayText + entered 
      })
    }
  }

  handleCalculateClick(e) {
    const lastChar = this.state.displayText.length > 0 ? this.state.displayText[this.state.displayText.length - 1] : "";
    if (lastChar === "") {
      return;
    }

    const postFix = toPostFix(this.state.displayText);
    const answer = evalPostFix(postFix);
    this.setState({
      displayText: answer
    })
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Display text={this.state.displayText} />
          </div>
          <div className="row">
            <Button content="(" buttonStyles="paren" handleClick={this.handleParenClick} />
            <Button content=")" buttonStyles="paren" handleClick={this.handleParenClick} />
            <Button content="AC" buttonStyles="clear" handleClick={this.handleClearClick} />
          </div>
          <div className="row">
            <Button content="7" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="8" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="9" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="/" buttonStyles="operator-button" handleClick={this.handleOperatorClick} />
          </div>  
          <div className="row">
            <Button content="4" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="5" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="6" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="*" buttonStyles="operator-button" handleClick={this.handleOperatorClick}  />
          </div>    
          <div className="row">
            <Button content="1" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="2" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="3" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="-" buttonStyles="operator-button" handleClick={this.handleOperatorClick} />
          </div>  
          <div className="row">
            <Button content="0" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="." buttonStyles="num-button" handleClick={this.handleDecimalClick} />
            <Button content="=" buttonStyles="equals-button" handleClick={this.handleCalculateClick} />
            <Button content="+" buttonStyles="operator-button" handleClick={this.handleOperatorClick}  />
          </div>                 
        </div>
      </div>
    );
  }
}

export default App;
