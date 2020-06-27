import React, { Component } from 'react';

class Counter extends Component {
    /*constructor(props){
        super(props);
        this.state={
            number:0;
        }
    }*/

   //js에서도 class가 도입됨. 생성자의 기능 대체. 메소드, 변수 
  state = {
    number: 0
  }

  constructor(props){
      super(props);
      console.log('constructor');
  }

  UNSAFE_componentWillMount(){
    console.log('componentWillMount (deprecated)');   
  }

  UNSAFE_componentDidMount(){
    console.log('componentDidMount');   
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProp, prevState){
    console.log('componentDidUpdate');
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div> //이벤트에 전달해주는 값은 함수의 이름?이어야 함.
    );
  }
}

export default Counter;