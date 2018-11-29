import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';
import * as actionCreators from '../store/actionCreators'

class Recommend extends Component {
  render(){
    return(
      <RecommendWrapper>
        <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"/>
        <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"/>
      </RecommendWrapper>
    )
  }
  componentDidMound(){
    this.props.getList()
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','recommendList'])
});

const mapDispatchToProps=(dispatch)=>{
  return{
    getList(){
      dispatch(actionCreators.getRecommendList());
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);