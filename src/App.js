import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Header from './common/header'
import {GlobalStyle} from "./style";
import {FontGlobalStyle} from './statics/iconfont/iconfont';

import Home from './pages/home';
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <FontGlobalStyle/>
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
