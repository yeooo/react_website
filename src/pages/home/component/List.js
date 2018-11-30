import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';

class List extends Component {
  getData(){
    const { list } = this.props;
    const jsList = list.toJS();    
    if(jsList.length > 0){
      return jsList.map((item,index)=>{
        return(
          <ListItem key={ index }>
            <img
            className="list-img"
            src={item.img} alt=""/>
            <ListInfo>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </ListInfo>
          </ListItem>
        )
      })
    }else{
      return null;
    } 
  }

  render(){
    return(
      <div>
        { this.getData() }
        <LoadMore onClick={()=>this.props.getMore(this.props.page) }>加载更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','page'])
});

const mapDispatchToProps=(dispatch)=>({
  getMore(page){
    console.log(page);
    dispatch(actionCreators.getRecommendList(page));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);