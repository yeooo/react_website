import React, {
  Component
} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators'
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import ScrollTop from './component/ScrollTop';
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
            className="banner-img" 
            src="https://upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
            alt="">
          </img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        <ScrollTop></ScrollTop>
      </HomeWrapper>
    )
  }
  componentDidMount(){
    const { getList,getListData,getArticleData } = this.props;
    getList();
    getArticleData();
    getListData();
  }
}

const mapDispatchToProps=(dispatch)=>({
  getArticleData(){
    dispatch(actionCreators.getArticleList());
  },
  getListData(){
    dispatch(actionCreators.getTopicList());
  },
  getList(){
    dispatch(actionCreators.getRecommendList());
  }
});

export default connect(null,mapDispatchToProps)(Home);