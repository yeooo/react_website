import React, {
  PureComponent
} from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from '../style';


class Topic extends PureComponent {

  getListArea(){
    const { list } = this.props;
    const jsList = list.toJS();// list是一个immutable对象 通过toJS方法转化为普通js对象
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

export default connect(mapStateToProps,null)(Topic);