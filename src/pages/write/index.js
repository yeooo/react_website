import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent{
  render(){
    const { loginStatus } = this.props;
    if(loginStatus){
      return(
        <div>write</div>
      );
    }else{
      return <Redirect to='/login' />
    }
  }
}
const mapStateToProsp=(state)=>({
  loginStatus:state.getIn(['login','loginStatus'])
});

export default connect(mapStateToProsp,null)(Write);