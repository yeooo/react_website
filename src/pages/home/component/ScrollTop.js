import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'
import { ScrollTopWrapper } from '../style';

class ScrollTop extends PureComponent{
  handleScrollTop(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      this.props.showScroll ? <ScrollTopWrapper onClick={this.handleScrollTop}>回到顶部</ScrollTopWrapper>:null
    )
  }

  componentDidMount(){
    this.bindEvents();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.ccc);
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.ccc);
  }
}

const mapStateToProps=(state)=>({
  showScroll:state.getIn(['home','showScroll'])
});

const mapDispatchToProps=(dispatch)=>({
  ccc(){
    if(document.documentElement.scrollTop>150){
      dispatch(actionCreators.changeScrollShow(true))
    }else{
      dispatch(actionCreators.changeScrollShow(false))
    }
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ScrollTop);