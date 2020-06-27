import React, { Component, useState } from 'react';
import { withRouter ,Link, BrowserRouter as Router, Route } from 'react-router-dom';


class Dictionary extends Component{

    state = {
        Name : '',
        sweet : '',
        kind : '',
        ml : '',
        price : '',
        alcohol : '',
        tansan : '',
        calories : ''
    }

    fetch("/Pages/recipe").then(res => res.json()) //json 내용물로 준다
    .then((data)=>{ 
        setContent(data)
    })

    render(){
        return (
            <div>
                <input
                    type="text"
                    placeholder="검색어를 입력해주세요"
                /> <button>검색</button>
            </div>
        )
    }
}

export default Dictionary;