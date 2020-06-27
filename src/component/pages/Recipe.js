import React, { Component, useState, useEffect} from 'react';


export default function Recipe(){

    const [push, setPush] = useState(null);
    const [content, setContent] =useState(null); //레시피 내용들
    const [_keyword, _setKeyword] = useState(null); //
    const [edit, setEdit] = useState(false);
    const url = "/Pages/like";
    let count =0;
    

    if(content == null){ 
        fetch("/Pages/recipe").then(res => res.json()) //json 내용물로 준다
        .then((data)=>{ 
            setContent(data)
        })
    }
    
    
    //비동기적이라서 content가 null이고 다시 렌더링되는 듯
    /*useEffect(()=>{
        console.log("드렁옴")
        
        if(content!=null){
            const contentInChange = Object.assign([], content);
            
            console.log(content)
            if (content[count].combineName == _keyword ) { //키워드가 있으면
                console.log("키워드랑 맞는 거 있음")
                const filter = content.filter(
                    items => items.combineName === _keyword
                )
                setContent(filter);
            }
            else{
                setContent(contentInChange);
                count++;
            }
        }
    },[_keyword]);
    */

   //사실 keyword 값이 변경될 때마다 보여주는 걸 바꾸고 싶은데
    const change = (e)=>{
        _setKeyword(e.target.value); 
        setEdit(true);
    }

    return (
    <div>
    <h1>레시피</h1><br></br>
    <input type="text" value={_keyword} onChange={change}/>
          
        {content ? content.map((list, index)=>(
                    <div key = {index}>
                        {list.combineName} {list.Decs} {list.combinealcol} {list.kind} 
                        <button onClick={()=>{fetch(url,{
                              method: 'post',
                              headers: {
                                'Content-Type': 'application/json'
                              },
                              body : JSON.stringify({
                                id : window.localStorage.getItem('id'),
                                num : index
                            })
                        }).then(res => res.json()).then(data => {
                            if(data) alert("좋아요가 눌려졌어요.")
                            else alert("이미 눌려진 좋아요입니다.")
                        })
                        }}>좋아요</button> {list.love}회
                    </div>
                )) : ''
            }
        </div>
    );
}