import React, {
  Component
} from 'react';
import Topic from './component/Topic';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends Component {
  render() {
    return ( 
      <HomeWrapper>
        <HomeLeft>
          <img 
          className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          <Topic></Topic>
        </HomeLeft>
        <HomeRight>HomeRight</HomeRight>
      </HomeWrapper>
    )
  }
}
export default Home;