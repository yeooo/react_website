import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';
import { LoginWrapper,LoginBox,Input,Button } from './style';

class Login extends PureComponent{
  render(){
    const { loginStatus } = this.props;
    if(!loginStatus){
      return(
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="username" ref={(input)=>{this.username = input}}/>
            <Input placeholder="password" type="password" ref={(input)=>{this.password = input}}/>
            <Button onClick={()=>this.props.handleLogin(this.username,this.password)}>login</Button>
          </LoginBox>
        </LoginWrapper>
      );
    }else{
      return <Redirect to='/' />
    }
  }
}
const mapStateToProsp=(state)=>({
  loginStatus:state.getIn(['login','loginStatus'])
});

const mapDispatchToProps=(dispatch)=>({
  handleLogin(username,login){
    dispatch(actionCreators.login(username.value,login.value))
  }
});

export default connect(mapStateToProsp,mapDispatchToProps)(Login);