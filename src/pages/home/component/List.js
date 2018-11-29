import React,{ Component } from 'react';
import { connect } from 'react-redux';
import  * as actionCreators from '../store/actionCreators';

import {
  ListItem,
  ListInfo
} from '../style';

class List extends Component {
  getData(){
    const { list } = this.props;
    const jsList = list.toJS();    
    if(jsList.length > 0){
      return jsList.map((item)=>{
        return(
          <ListItem key={item.id}>
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

  componentWillMount(){
    this.props.getArticleData();
  }

  render(){
    return(
      <div>{ this.getData() }</div>
    )
  }
}

const mapStateToProps=(state)=>({
   list : state.getIn(['home','articleList'])
})

const mapDispatchToProps=(dispatch)=>{
  return{
    getArticleData(){
      dispatch(actionCreators.getArticleList());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);