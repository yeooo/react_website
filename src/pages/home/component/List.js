import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';

class List extends PureComponent {
  getData(){
    const { list,page ,getMore} = this.props;
    const jsList = list.toJS();
    if(jsList.length > 0){
      return (
        <div>
        {
          jsList.map((item,index)=>{
            return(
              <Link key={index} to={"/detail/"+item.id}>
                <ListItem>
                  <img
                  className="list-img"
                  src={item.img} alt=""/>
                  <ListInfo>
                    <h3 className="title">{item.title}</h3>
                    <p className="desc">{item.desc}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={()=>getMore(page) }>加载更多</LoadMore>
        </div>
      )
    }else{
      return null;
    } 
  }

  render(){
    return(
      <div>
        { this.getData() }
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
    dispatch(actionCreators.getArticleList(page));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);