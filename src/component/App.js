import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import { createBrowserHistory } from 'history'

class App extends Component {
      constructor(){
        super(); 
      }
      state={
        id: '',
        pw: '',
        isLoggedIn : false
      }
  
  handleChange =(e)=>{ //모든 키 입력에서 handleChange 동작
    this.setState({
      [e.target.name] : e.target.value
    }) //그럼 name은 state 이름과 똑같이 해야하는 건가요
  }

  handleSubmit = (e)=>{ //handleSubmit을 해서 fetch로 check에 데이터 보내고 싶음.
    e.persist();
    e.preventDefault(); 
    
    window.localStorage.setItem('id', this.state.id);
    window.localStorage.setItem('pw', this.state.pw);
    window.localStorage.setItem('isLoggined', true);


    const options ={ //회원인 지 아닌 지 체크
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        id: this.state.id,
        pw: this.state.pw
      })
    }

    fetch('/check', options)
      .then(res=> res.json()) //== result is returned
      .then((data)=>{
        console.log(data) //1
        if(data === 1){
            this.setState({isLoggedIn : true})
            this.props.history.push({
              pathname:'/Main',
            }) 
        }
        else{
          alert("아이디 또는 비밀번호를 잘 못 입력하셨습니다.")       
          this.setState({
            id : "",
            pw : "",
            isLoggedIn : false
          })
        }
      }) 
    }

  render(){
    
    return (
      <div className="App">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
        {/* 동적 라우팅.  */}
        <input
          type="text"
          value={this.state.id}
          name="id"
          placeholder="아이디"
          onChange ={this.handleChange}
          /><br></br>

        <input
          type="password"
          value={this.state.pw}
          name="pw"
          placeholder="패스워드"
          onChange ={this.handleChange}
          /><br></br>

        <input type="submit" id ="SignIn" name="SignIn" value="로그인"/>
        </form><br></br>
        아직 회원이 아니세요?<br></br>
        <Link to="/SignUp">회원가입</Link>

      </div>
    );
  };
}

export default App;
  