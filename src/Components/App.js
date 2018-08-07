import React, { Component } from 'react';

import '../Styles/App.css';
import { Button } from './Button';
import { Display } from './Display';

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
      if (this.isANumber(lastChar)) {
        this.setState({
          displayText: this.state.displayText + e.target.innerText
        })
      }     
      // TODO: fix Operators may be next to left parens
    } else if (entered === rightParen) {
      //TODO match parens
      if (this.isANumber(lastChar)) {
        this.setState({
          displayText: this.state.displayText + entered
        })
      } 
    } 
  }

  handleOperatorClick(e) {
    const entered = e.target.innerText;
    const lastChar = this.state.displayText.length > 0 ? this.state.displayText[this.state.displayText.length - 1] : "";

    if (this.isANumber(lastChar)) {
      this.setState({
        displayText: this.state.displayText + entered
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

    if(this.isANumber(lastChar)){
      this.setState({
        displayText: this.state.displayText + entered
      })
    }
  }

  handleCalculateClick(e) {
    const postFix = this.yard(this.state.displayText);
    const answer = this.reversePolishNotation(postFix);
    this.setState({
      displayText: answer
    })
  }

  //adapted from https://eddmann.com/posts/implementing-the-shunting-yard-algorithm-in-javascript/
  yard(infix) {
    let ops = {'+': 1, '-': 1, '*': 2, '/': 2};
    let peek = (a) => a[a.length - 1];
    let stack = [];
  
    return infix
      .split('')
      .reduce((output, token) => {
        if (parseFloat(token)) {
          output.push(token);
        }
  
        if (token in ops) {
          while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
            output.push(stack.pop());
          stack.push(token);
        }
  
        if (token == '(') {
          stack.push(token);
        }
  
        if (token == ')') {
          while (peek(stack) != '(')
            output.push(stack.pop());
          stack.pop();
        }
  
        return output;
      }, [])
      .concat(stack.reverse())
      .join(' ');
  };
  
  //adapted from https://eddmann.com/posts/small-rpn-implementation-in-javascript/
  reversePolishNotation(ts, s = []) {
    ts.split(' ').forEach(t =>
      s.push(t == +t ? t : eval(s.splice(-2,1)[0] + t + s.pop())));
    return s[0];
  }

  isANumber(lastChar) {
    const operators = ["/","*","+","-"];
    const decimal = ".";
    const leftParen = "(";
    const rightParen = ")";
    const isLastCharAnOperator = operators.indexOf(lastChar) >= 0;
    const isLastCharAdecimal = lastChar === decimal;
    const isLastCharAParen = lastChar === leftParen || lastChar === rightParen;
    const isLastCharEmpty = lastChar === "";

    if (!isLastCharEmpty && !isLastCharAnOperator && !isLastCharAParen && !isLastCharAdecimal) {
      return true;
    }
    return false;
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
