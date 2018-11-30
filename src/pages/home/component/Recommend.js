import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {

  getListArea(){
    const { list } = this.props;
    const jsList = list.toJS();
    return(
      jsList.map((item)=>{
        return(
          <RecommendItem key= {item.id} imgUrl={item.img} />
        )
      })
    )
  }

  render(){
    return(
      <RecommendWrapper>
        {
          this.getListArea()
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','recommendList'])
});

export default connect(mapStateToProps,null)(Recommend);