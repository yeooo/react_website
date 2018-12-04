import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import  { actionCreators }   from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavContainer,
  NavItem,
  NavSearch,
  Addition,
  AdditionLink,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style';

class Header extends PureComponent {
  getListArea(){
    // 结构赋值
    const { focused,mouseIn, list, page,totalPage, handleMouseEnter, handleMouseLeave,handleSwitchClick } = this.props;
    const jsList = list.toJS();// list是一个immutable对象 通过toJS方法转化为普通js对象
    const pageList = [];
    if(jsList.length){
      for(let i = (page-1) * 10; i < page * 10; i++){
        if(jsList[i]){
          pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
        }
      }
    }
    if(focused || mouseIn){
      return(
        <SearchInfo
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
          >
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={()=>{handleSwitchClick(page,totalPage,this.spinIcon)}}>
            <i className="iconfont spin" ref={(icon)=>{ this.spinIcon = icon }}>&#xe606;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }

  render(){
    // 结构赋值
    const { focused, handleInputFocused, handleInputBlur,list } = this.props;
    return ( 
      <HeaderWrapper> 
        <NavContainer>
          <Link to="/">
            <Logo/>
          </Link>
          <Nav>
            <NavItem className="left active">
            <i className="iconfont">&#xe627;</i> 首页
            </NavItem>
            <NavItem className="left">
            <i className="iconfont">&#xe655;</i>
            下载APP</NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch 
                  className={focused ?'focused':''}
                  onFocus={()=>handleInputFocused(list)}
                  onBlur={handleInputBlur}></NavSearch>
              </CSSTransition>
                <i className={focused ?'focused iconfont zoom':'iconfont zoom'} >&#xe60b;</i>
              { this.getListArea() }
            </SearchWrapper>
          </Nav>
          <Addition>
            <AdditionLink className="btn">注册</AdditionLink>
            <AdditionLink className="btn writing">
            <i className="iconfont">&#xe615;</i>
            写文章</AdditionLink>
            <AdditionLink>登录</AdditionLink>
            <AdditionLink>
            <i className="iconfont">&#xe636;</i>
            </AdditionLink>
          </Addition>  
        </NavContainer>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // 这个写法可以
    // state.get('header').get('focused')
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocused(list){
      if(list.size === 0){
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus(true));
    },
    handleInputBlur(){
      dispatch(actionCreators.searchFocus(false));
    },
    handleMouseEnter(){
      dispatch(actionCreators.changeMouseState(true));
    },
    handleMouseLeave(){
      dispatch(actionCreators.changeMouseState(false));
    },
    handleSwitchClick(page,totalPage,spin){
      let transformAngle = spin.style.transform.replace(/[^0-9]/ig,' ');
      if(transformAngle){
        transformAngle = parseInt(transformAngle,10);
      }else{
        transformAngle = 0;
      }
      spin.style.transform = 'rotate('+(transformAngle + 360)+'deg)';
      if(page < totalPage){
        dispatch(actionCreators.changePage(page+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);