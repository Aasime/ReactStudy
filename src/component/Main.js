import React, { Component, useState } from 'react';
import logo from '../logo.svg';
import { withRouter, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import Profile from './Profile'
import Recipe from './pages/Recipe'

function Main(props){ 

    const [keyword, setKeyword] = useState(' ');

    
    const IsLoggedIn=()=>{
         if(!window.localStorage.getItem('isLoggined')) //this는 클래스형식에서만 쓰이는 건가여..
            return 0;        
        else
            return 1;
    } 

    const keywordChange = (e)=>{
        e.preventDefault(); 
        setKeyword(e.target.value);
    }
    
    if(IsLoggedIn === 0){
        alert("로그인 후 이용할 수 있습니다")
        props.history.go(-1);
    }
    else{
        return(
            <div>
                <h1>Main</h1> 
                <Link to="/Main/Profile">내 정보</Link>
                <input 
                type="text"
                placeholder ="검색어를 입력해주세요"
                value={keyword}
                name="search"
                onChange = {keywordChange}
                /><br></br><br></br>
                <Recipe keyword></Recipe>
                <Link to="/Main/Dictionary">사전</Link><br></br>
                <Link exact to ="/Main/Recipe">레시피</Link>
                <button>추천</button>
                <Recipe data={keyword}></Recipe>   
             </div>
            )
        }
    }
const MainWithRouter = withRouter(Main)
/* HOC(Higher-order Component) : 고차 컴포넌트 
컴포넌트 로직을 재사용하기 위한 고급 기술
컴포넌트를 취해 새 컴포넌트를 반환하는 함수.
컴포넌트 프로퍼티로 라우터의 history를 얻을 수 있다. 
*/

export default Main;