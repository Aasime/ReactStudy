import React, { Component,useState, useEffect } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router'
import Profile from './Profile'

function SignUp(props){
    const [users, setUsers] = useState({
        signid :'',
        signpw : '',
        email : ''
    })
    
    const Change = e =>{ //모든 키 입력에서 Change 동작
        setUsers({
            ...users,
          [e.target.name] : e.target.value
        }) //그럼 name은 state 이름과 똑같이 해야하는 건가요
        console.log(users)
      }

    const Submit=()=>{
        fetch('/check/SignUp', {
            method :'post',
            headers : { //소문자로 쓰자....
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
               users : users
            }) 
        })
        alert("회원가입이 완료되었습니다!");
        alert(users)
        props.history.go(-1)
    }  

      
        return(
            <div>
            <form onSubmit ={Submit}>
            아이디 : <br></br>
            <input 
                type="text"
                name="signid"
                value={users.signid}
                placeholder="아이디를 입력해주세요."
                onChange ={Change}
                /><br></br>
            비밀번호 : <br></br>
            <input 
                type="password"
                name="signpw"
                value={users.signpw}
                placeholder="비밀번호를 입력해주세요"
                onChange ={Change}
                /> <br></br> 
            
            이메일 : <br></br>
            <input 
                type="email"
                name="email"
                value={users.email}
                placeholder="비밀번호를 입력해주세요"
                onChange ={Change}
                /> <br></br>
            <input 
                type="submit"
                value="입력"
                name="SignUpBnt"
                />                      
            </form> 
            
            </div>
        )
    }

export default SignUp;