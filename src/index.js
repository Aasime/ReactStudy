import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import Main from './component/Main';
import SignUp from './component/SignUp'
import Profile from './component/Profile'
import {createBrowserHistory} from 'history'
import Dictionary from './component/pages/Dictionary'
import Recipe from './component/pages/Recipe'


const hs = createBrowserHistory();

ReactDOM.render(
    <Router>
        <div>
          <Switch history={hs}>
            <Route exact path="/" component={App}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route exact path="/Main" component={Main}/>
            <Route path="/Profile" component={Profile}/>
            <Route exact path="/Main/Dictionary" component={Dictionary}/> 
            <Route exact path="/Main/Recipe" component={Recipe}></Route> 
            <Route exact path="/Main/Profile" component={Profile}></Route>
            <Route path="*" render={()=><div><p>404</p></div>}/>
          </Switch>
          </div> 
    </Router>, document.getElementById('root'));
//리액트 컴포넌트를 보여주기 위해서 함수 사용 id가 root인 Dom을 찾아 그리도록 설정


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
