import React, {
  Component
} from 'react';
import { connect } from 'react-redux';
import  * as actionCreators from '../store/actionCreators';

import {
  TopicWrapper,
  TopicItem
} from '../style';


class Topic extends Component {

  getListArea(){
    const { list } = this.props;
    const jsList = list.toJS();// list是一个immutable对象 通过toJS方法转化为普通js对象
    // console.log(jsList.length)
    if (jsList.length > 0) {
      return (
        jsList.map((item)=>{
          return(
            <TopicItem key={item.id}>
              <img
                className="topic-item-img" 
                src={item.img}
                alt=""></img>
              {item.title}
            </TopicItem>
          )
        })
      )
    }else{
      return null;
    }
  }

  componentWillMount(){
    this.props.getListData();
  }

  render() {
    return(
      <TopicWrapper>
        { this.getListArea() }  
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state)=>({
  list: state.getIn(['home','topicList'])
});

const mapDispatchToProps =(dispatch)=>{
  return{
    getListData(){
      dispatch(actionCreators.getTopicList());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);