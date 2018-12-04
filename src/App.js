import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Header from './common/header'
import {GlobalStyle} from "./style";
import {FontGlobalStyle} from './statics/iconfont/iconfont';

import Home from './pages/home';
import Login from './pages/login'
import Detail from './pages/detail'
import Write from './pages/write'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <FontGlobalStyle/>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/write' exact component={Write}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
