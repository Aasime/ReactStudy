import React, { Component, useState,useEffect } from 'react';


export default function Profile(props){ 

    const [info, setInfo] =useState(null)
    const test= ()=>{
        setInfo(props.value)
        console.log(props)
    }

    return(
    <div>
        <h1>프로필 페이지입니다.</h1>
        <button onClick={test}>test</button>
        {info ? info.map((list, index)=>(
       <div key ={index}>
           당신의 정보 : <br></br>
            {list.signid}<br></br>
            {list.signpw}<br></br>
            {list.email}<br></br>             
       </div>
     )) : ''
    } 
    </div>
    )

}
